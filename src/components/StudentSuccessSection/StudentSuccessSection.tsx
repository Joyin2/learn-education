'use client';

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import styles from './StudentSuccessSection.module.css';

export default function StudentSuccessSection() {
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    {
      name: "Sarah M.",
      role: "UK Student",
      university: "University of London",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/students%20icons/sarah.jpg",
      quote: "Thanks to Learn Education London, I was able to get into my dream university. The team provided me with incredible support throughout the entire process, from my application to interview preparation. I couldn't have done it without their expert guidance!",
      rating: 5
    },
    {
      name: "Fatima S.",
      role: "International Student from UAE",
      university: "University of Manchester",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/students%20icons/fatima.jpg",
      quote: "The team at Learn Education London is dedicated and knowledgeable. They helped me navigate the UK education system, assisted with my visa application, and even offered career advice. Their ongoing support has been instrumental in my academic journey.",
      rating: 5
    },
    {
      name: "Daniel P.",
      role: "International Student from Brazil",
      university: "University of Edinburgh",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/students%20icons/daniel.jpg",
      quote: "I was impressed by the level of detail and care Learn Education London provided. They guided me through every step of the application process, and their interview preparation tips were spot on. I felt well-prepared and confident thanks to their expert advice.",
      rating: 5
    },
    {
      name: "John D.",
      role: "International Student from India",
      university: "University of Birmingham",
      image: "https://asvbqmdvplqupbqpigoa.supabase.co/storage/v1/object/public/learneducation/students%20icons/john.jpg",
      quote: "Applying to universities in the UK felt overwhelming at first, but Learn Education London made the entire process smooth and stress-free. Their personalized approach and detailed advice helped me secure a spot at one of the top universities. I highly recommend their services!",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Removed manual navigation to ensure smooth automatic transitions

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa-solid fa-star ${index < rating ? styles.starFilled : styles.starEmpty}`}
      ></i>
    ));
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
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            spaceBetween={30}
            slidesPerView={1}
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
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true
            }}
            speed={800}
            loop={true}
            className={styles.testimonialSwiper}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className={styles.testimonialSlide}>
                <div className={styles.testimonialCard}>
                  <div className={styles.cardHeader}>
                    <div className={styles.studentImage}>
                      <img src={testimonial.image} alt={testimonial.name} />
                      <div className={styles.imageOverlay}></div>
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
                    <i className="fa-solid fa-quote-left"></i>
                    <p>{testimonial.quote}</p>
                    <i className="fa-solid fa-quote-right"></i>
                  </blockquote>

                  <div className={styles.cardFooter}>
                    <div className={styles.verifiedBadge}>
                      <i className="fa-solid fa-check-circle"></i>
                      <span>Verified Student</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className={styles.swiperNavigation}>
            <button className={styles.swiperButtonPrev}>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className={styles.swiperButtonNext}>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>

          {/* Custom Pagination */}
          <div className={styles.swiperPagination}></div>
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
