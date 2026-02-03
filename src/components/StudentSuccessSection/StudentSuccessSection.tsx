'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './StudentSuccessSection.module.css';

export default function StudentSuccessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "UK Student",
      university: "University of London",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/students%20icons/sarah.jpg",
      quote: "Thanks to Learn Education London, I was able to get into my dream university. The team provided me with incredible support throughout the entire process, from my application to interview preparation. I couldn't have done it without their expert guidance!",
      rating: 5,
      date: "2024"
    },
    {
      id: 2,
      name: "Fatima Sheikh",
      role: "International Student from UAE",
      university: "University of Manchester",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/students%20icons/fatima.jpg",
      quote: "The team at Learn Education London is dedicated and knowledgeable. They helped me navigate the UK education system, assisted with my visa application, and even offered career advice. Their ongoing support has been instrumental in my academic journey.",
      rating: 5,
      date: "2024"
    },
    {
      id: 3,
      name: "Daniel Pereira",
      role: "International Student from Brazil",
      university: "University of Edinburgh",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/students%20icons/daniel.jpg",
      quote: "I was impressed by the level of detail and care Learn Education London provided. They guided me through every step of the application process, and their interview preparation tips were spot on. I felt well-prepared and confident thanks to their expert advice.",
      rating: 5,
      date: "2024"
    },
    {
      id: 4,
      name: "John Dev",
      role: "International Student from India",
      university: "University of Birmingham",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/students%20icons/john.jpg",
      quote: "Applying to universities in the UK felt overwhelming at first, but Learn Education London made the entire process smooth and stress-free. Their personalized approach and detailed advice helped me secure a spot at one of the top universities. I highly recommend their services!",
      rating: 5,
      date: "2024"
    },
    {
      id: 5,
      name: "Emma Thompson",
      role: "UK Student",
      university: "King's College London",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/students%20icons/sarah.jpg",
      quote: "The personalized attention I received was exceptional. They understood my goals and helped me craft applications that truly reflected my potential. I'm now studying at my dream university thanks to their support!",
      rating: 5,
      date: "2024"
    },
    {
      id: 6,
      name: "Michael Chen",
      role: "International Student from China",
      university: "Imperial College London",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/students%20icons/daniel.jpg",
      quote: "The visa support and interview preparation were invaluable. They helped me secure a place at one of the most competitive universities in the world. Their expertise and dedication made all the difference.",
      rating: 5,
      date: "2024"
    },
    {
      id: 7,
      name: "Sophia Williams",
      role: "UK Student",
      university: "University of Cambridge",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/students%20icons/fatima.jpg",
      quote: "The guidance I received was beyond what I expected. They helped me craft a compelling personal statement and prepared me for interviews. I'm grateful for their support in achieving my dream of studying at Cambridge.",
      rating: 5,
      date: "2024"
    },
    {
      id: 8,
      name: "Ahmed Khan",
      role: "International Student from Pakistan",
      university: "University College London",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/students%20icons/john.jpg",
      quote: "Moving to the UK for studies was a big step, but Learn Education made it seamless. Their support with accommodation, visa, and cultural adaptation was invaluable. I felt supported every step of the way.",
      rating: 5,
      date: "2024"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 160);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa-solid fa-star ${index < rating ? styles.starFilled : styles.starEmpty}`}
      ></i>
    ));
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <section className={styles.studentSuccessSection}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingShape1}></div>
        <div className={styles.floatingShape2}></div>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Header Section */}
          <div className={`${styles.headerSection} ${isVisible ? styles.fadeInUp : ''}`}>
            <div className={styles.badge}>STUDENT SUCCESS STORIES</div>
            <h2 className={styles.mainTitle}>What Our Students Say</h2>
            <p className={styles.description}>
              Real experiences from students who have achieved their educational dreams with Learn Education.
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className={styles.testimonialsContainer}>
            {/* Desktop Navigation */}
            <div className={styles.swiperNavigation}>
              <button 
                className={`${styles.navButton} ${styles.swiperButtonPrev}`}
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button 
                className={`${styles.navButton} ${styles.swiperButtonNext}`}
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <Swiper
              modules={[Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
              spaceBetween={24}
              slidesPerView={1}
              onSwiper={setSwiperInstance}
              navigation={{
                nextEl: `.${styles.swiperButtonNext}`,
                prevEl: `.${styles.swiperButtonPrev}`,
              }}
              pagination={{
                el: `.${styles.swiperPagination}`,
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              mousewheel={{
                forceToAxis: true,
                sensitivity: 1,
                releaseOnEdges: true,
              }}
              keyboard={{
                enabled: true,
                onlyInViewport: false,
              }}
              breakpoints={{
                // Mobile devices
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // Tablet
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 24,
                },
                // Desktop
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // Large Desktop
                1280: {
                  slidesPerView: 2.5,
                  spaceBetween: 30,
                }
              }}
              loop={true}
              className={styles.testimonialSwiper}
              grabCursor={true}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id} className={styles.testimonialSlide}>
                  <div className={styles.testimonialCard}>
                    <div className={styles.cardHeader}>
                      <div className={styles.studentAvatar}>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className={styles.studentImage}
                        />
                      </div>
                      <div className={styles.studentInfo}>
                        <h4 className={styles.studentName}>{testimonial.name}</h4>
                        <p className={styles.studentRole}>{testimonial.role}</p>
                        <p className={styles.university}>{testimonial.university}</p>
                      </div>
                    </div>

                    <div className={styles.rating}>
                      {renderStars(testimonial.rating)}
                    </div>

                    <blockquote className={styles.quote}>
                      <p>{testimonial.quote}</p>
                    </blockquote>

                    <div className={styles.cardFooter}>
                      <div className={styles.reviewDate}>{testimonial.date}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Mobile Navigation (Hidden on Desktop) */}
            <div className={styles.mobileNavigation}>
              <div className={styles.swiperPagination}></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Ready to Start Your Success Story?</h3>
            <p className={styles.ctaDescription}>
              Join thousands of students who have achieved their dreams with our expert guidance.
            </p>
            <a href="/contact" className={styles.ctaButton}>
              <span>Book Your FREE Consultation</span>
              <i className="fa-solid fa-arrow-right"></i>
              <div className={styles.buttonRipple}></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}