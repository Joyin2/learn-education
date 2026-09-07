import Link from 'next/link';
import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import JobApplicationForm from '@/components/JobApplicationForm';
import { getJobPosting, isJobOpen, JobPosting } from '@/lib/careers';
import styles from './JobDetail.module.css';

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobPosting(slug);

  if (!job || !job.published) {
    return {
      title: 'Job Not Found - Learn Education London',
      description: 'This job opening is no longer available.'
    };
  }

  return {
    title: `${job.title} - Careers at Learn Education`,
    description: job.summary,
    keywords: `${job.title}, ${job.department} jobs, ${job.location} vacancy, Learn Education careers`
  };
}

/**
 * schema.org JobPosting markup so the role can be picked up by job search engines
 */
function jobPostingSchema(job: JobPosting) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description || job.summary,
    datePosted: job.postedDate,
    ...(job.applicationDeadline ? { validThrough: job.applicationDeadline } : {}),
    employmentType: job.employmentType?.toUpperCase().replace('-', '_'),
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Learn Education',
      sameAs: process.env.NEXT_PUBLIC_SITE_URL || 'https://learn-education.co.uk'
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.location
      }
    },
    ...(job.workMode === 'Remote' ? { jobLocationType: 'TELECOMMUTE' } : {}),
    ...(job.openings ? { totalJobOpenings: job.openings } : {})
  };
}

function NotFound({ message }: { message: string }) {
  return (
    <div>
      <div className={styles.notFound}>
        <h1>Role Not Available</h1>
        <p>{message}</p>
        <Link href="/careers" className={styles.backButton}>
          ← Back to all openings
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default async function JobDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (!slug || typeof slug !== 'string') {
    return <NotFound message="The link you followed is not valid." />;
  }

  const job = await getJobPosting(slug);

  // Drafts must never be reachable from the public site
  if (!job || !job.published) {
    return (
      <NotFound message="This opening has been filled or is no longer listed. Have a look at our other roles." />
    );
  }

  const open = isJobOpen(job);
  const formatDate = (value: string) =>
    new Date(value).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

  return (
    <div className={styles.jobPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema(job)) }}
      />

      {/* Header */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/careers">Careers</Link>
            <span>/</span>
            <span>{job.title}</span>
          </nav>

          <div className={styles.heroBadges}>
            <span className={styles.departmentBadge}>{job.department}</span>
            {job.featured && <span className={styles.featuredBadge}>Featured</span>}
            {!open && <span className={styles.closedBadge}>Applications closed</span>}
          </div>

          <h1 className={styles.jobTitle}>{job.title}</h1>

          <div className={styles.heroMeta}>
            <span>{job.location}</span>
            <span className={styles.dot}>•</span>
            <span>{job.employmentType}</span>
            <span className={styles.dot}>•</span>
            <span>{job.workMode}</span>
            {job.experienceLevel && (
              <>
                <span className={styles.dot}>•</span>
                <span>{job.experienceLevel}</span>
              </>
            )}
          </div>

          {open && (
            <a href="#apply" className={styles.applyButton}>
              Apply Now
            </a>
          )}
        </div>
      </section>

      {/* Body */}
      <section className={styles.contentSection}>
        <div className={styles.container}>
          <div className={styles.layout}>
            <main className={styles.main}>
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>About the role</h2>
                {job.description ? (
                  <div
                    className={styles.richText}
                    dangerouslySetInnerHTML={{ __html: job.description }}
                  />
                ) : (
                  <p className={styles.summaryText}>{job.summary}</p>
                )}
              </div>

              {job.responsibilities?.length > 0 && (
                <div className={styles.card}>
                  <h2 className={styles.cardTitle}>Key responsibilities</h2>
                  <ul className={styles.list}>
                    {job.responsibilities.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {job.requirements?.length > 0 && (
                <div className={styles.card}>
                  <h2 className={styles.cardTitle}>What we are looking for</h2>
                  <ul className={styles.list}>
                    {job.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {job.benefits?.length > 0 && (
                <div className={styles.card}>
                  <h2 className={styles.cardTitle}>What we offer</h2>
                  <ul className={styles.list}>
                    {job.benefits.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {open ? (
                <JobApplicationForm
                  jobId={job.id!}
                  jobTitle={job.title}
                  jobSlug={job.slug}
                />
              ) : (
                <div className={styles.closedCard} id="apply">
                  <h3>Applications are closed</h3>
                  <p>
                    The deadline for this role passed on {formatDate(job.applicationDeadline)}.
                    Browse our other openings or get in touch and we will let you know when a
                    similar role opens up.
                  </p>
                  <div className={styles.closedActions}>
                    <Link href="/careers" className={styles.closedPrimary}>
                      See other roles
                    </Link>
                    <Link href="/contact" className={styles.closedSecondary}>
                      Contact us
                    </Link>
                  </div>
                </div>
              )}
            </main>

            <aside className={styles.sidebar}>
              <div className={styles.factsCard}>
                <h3 className={styles.factsTitle}>Job overview</h3>

                <div className={styles.factRow}>
                  <span className={styles.factLabel}>Department</span>
                  <span className={styles.factValue}>{job.department}</span>
                </div>
                <div className={styles.factRow}>
                  <span className={styles.factLabel}>Location</span>
                  <span className={styles.factValue}>{job.location}</span>
                </div>
                <div className={styles.factRow}>
                  <span className={styles.factLabel}>Employment type</span>
                  <span className={styles.factValue}>{job.employmentType}</span>
                </div>
                <div className={styles.factRow}>
                  <span className={styles.factLabel}>Work mode</span>
                  <span className={styles.factValue}>{job.workMode}</span>
                </div>
                {job.experienceLevel && (
                  <div className={styles.factRow}>
                    <span className={styles.factLabel}>Experience</span>
                    <span className={styles.factValue}>{job.experienceLevel}</span>
                  </div>
                )}
                {job.salaryRange && (
                  <div className={styles.factRow}>
                    <span className={styles.factLabel}>Salary</span>
                    <span className={styles.factValue}>{job.salaryRange}</span>
                  </div>
                )}
                {job.openings > 1 && (
                  <div className={styles.factRow}>
                    <span className={styles.factLabel}>Openings</span>
                    <span className={styles.factValue}>{job.openings}</span>
                  </div>
                )}
                <div className={styles.factRow}>
                  <span className={styles.factLabel}>Posted</span>
                  <span className={styles.factValue}>{formatDate(job.postedDate)}</span>
                </div>
                <div className={styles.factRow}>
                  <span className={styles.factLabel}>Apply by</span>
                  <span className={styles.factValue}>
                    {job.applicationDeadline ? formatDate(job.applicationDeadline) : 'Open until filled'}
                  </span>
                </div>

                {open && (
                  <a href="#apply" className={styles.sidebarApply}>
                    Apply for this role
                  </a>
                )}
              </div>

              <div className={styles.helpCard}>
                <h3>Questions about this role?</h3>
                <p>Our recruitment team is happy to help before you apply.</p>
                <Link href="/contact" className={styles.helpLink}>
                  Contact us →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
