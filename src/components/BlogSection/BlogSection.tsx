'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getBlogPosts, getBlogCategories, BlogPost } from '@/lib/firestore';
import styles from './BlogSection.module.css';

// BlogPost interface is now imported from firestore

// Static data removed - now fetching from Firestore

const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const router = useRouter();

  // Load blog posts and categories on component mount
  useEffect(() => {
    loadBlogData();
  }, []);

  const loadBlogData = async () => {
    try {
      setLoading(true);
      setError("");
      
      // Load blog posts
      const posts = await getBlogPosts();
      setBlogPosts(posts);
      
      // Load categories
      const blogCategories = await getBlogCategories();
      setCategories(["All", ...blogCategories]);
      
    } catch (error) {
      console.error("Error loading blog data:", error);
      setError("Failed to load blog posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    // Only show published posts
    if (!post.published) return false;
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  const handleViewFull = (postId: string) => {
    router.push(`/blog/${postId}`);
  };

  if (loading) {
    return (
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <div className={styles.loadingContainer}>
            <div className={styles.loadingSpinner}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="31.416" strokeDashoffset="31.416">
                  <animate attributeName="stroke-dasharray" dur="2s" values="0 31.416;15.708 15.708;0 31.416" repeatCount="indefinite"/>
                  <animate attributeName="stroke-dashoffset" dur="2s" values="0;-15.708;-31.416" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            <p>Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={styles.blogSection}>
        <div className={styles.container}>
          <div className={styles.errorContainer}>
            <div className={styles.errorIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <line x1="15" y1="9" x2="9" y2="15" stroke="currentColor" strokeWidth="2"/>
                <line x1="9" y1="9" x2="15" y2="15" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>Failed to Load Blog Posts</h3>
            <p>{error}</p>
            <button onClick={loadBlogData} className={styles.retryButton}>
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.blogSection}>
      {/* Animated Background */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
        <div className={styles.floatingParticles}>
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className={styles.particle}
              style={{
                '--delay': `${i * 0.2}s`,
                '--duration': `${6 + (i % 4)}s`
              } as React.CSSProperties}
            ></div>
          ))}
        </div>
      </div>

      <div className={styles.container}>

        {/* Blog Cards Grid */}
        <div className={styles.blogGrid}>
          {filteredPosts.map((post, index) => (
            <article 
              key={post.id} 
              className={`${styles.blogCard} ${post.featured ? styles.featured : ''}`}
              style={{
                '--delay': `${index * 0.1}s`
              } as React.CSSProperties}
            >
              <div className={styles.cardHeaderNoImage}>
                <div className={styles.headerContent}>
                  <span className={styles.categoryBadge}>{post.category}</span>
                  {post.featured && (
                    <div className={styles.featuredBadge}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                      </svg>
                      Featured
                    </div>
                  )}
                  <div className={styles.readTimeIndicator}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {post.readTime}
                  </div>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                </div>
                
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                
                <div className={styles.cardTags}>
                  {post.tags && post.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>#{tag}</span>
                  ))}
                </div>
                
                <div className={styles.cardFooter}>
                  <div className={styles.authorSection}>
                    <div className={styles.authorAvatar}>
                      <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className={styles.authorInfo}>
                      <span className={styles.authorName}>{post.author}</span>
                      <span className={styles.postDate}>
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                  
                  <button 
                    className={styles.viewFullButton}
                    onClick={() => handleViewFull(post.id!)}
                  >
                    <span>View Full</span>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ marginLeft: '8px' }}
                    >
                      <path 
                        d="M5 12H19M19 12L12 5M19 12L12 19" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className={styles.noResults}>
            <div className={styles.noResultsIcon}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>No articles found</h3>
            <p>Try adjusting your search terms or browse different categories.</p>
            <button 
              className={styles.clearFiltersButton}
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
            >
              Clear Filters
            </button>
          </div>
        )}


      </div>
    </section>
  );
};

export default BlogSection;