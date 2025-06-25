import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initializeAnimations = () => {
  // Hero Section Animations
  gsap.fromTo('.hero-content', 
    { opacity: 0, y: 50 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 1.2, 
      ease: 'power3.out',
      delay: 0.3
    }
  );

  gsap.fromTo('.character-container', 
    { opacity: 0, scale: 0.8, rotateY: 30 },
    { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      duration: 1.5, 
      ease: 'power3.out',
      delay: 0.6
    }
  );

  gsap.fromTo('.floating-shape', 
    { scale: 0, opacity: 0 },
    { 
      scale: 1, 
      opacity: 1,
      duration: 2, 
      ease: 'power2.out',
      stagger: 0.2,
      delay: 1
    }
  );

  // Character hover effect
  const characterContainer = document.querySelector('.character-container');
  if (characterContainer) {
    characterContainer.addEventListener('mouseenter', () => {
      gsap.to('.character-silhouette', {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    characterContainer.addEventListener('mouseleave', () => {
      gsap.to('.character-silhouette', {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
  }

  // About Section Animations
  gsap.fromTo('.about-header', 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      scrollTrigger: {
        trigger: '.about-header',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo('.about-image', 
    { opacity: 0, x: -50 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 1,
      scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo('.about-content', 
    { opacity: 0, x: 50 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 1,
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo('.about-stats > *', 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.about-stats',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Projects Section Animations
  gsap.fromTo('.projects-header', 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      scrollTrigger: {
        trigger: '.projects-header',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo('.projects-filter', 
    { opacity: 0, y: 20 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.6,
      scrollTrigger: {
        trigger: '.projects-filter',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo('.projects-grid > *', 
    { opacity: 0, y: 50, scale: 0.9 },
    { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Skills Section Animations
  gsap.fromTo('.skills-header', 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      scrollTrigger: {
        trigger: '.skills-header',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo('.skills-grid > *', 
    { opacity: 0, y: 30, rotateX: 15 },
    { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.skills-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Testimonials Section Animations
  gsap.fromTo('.testimonials-header', 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      scrollTrigger: {
        trigger: '.testimonials-header',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo('.testimonials-grid > *', 
    { opacity: 0, y: 50, scale: 0.9 },
    { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.testimonials-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Contact Section Animations
  gsap.fromTo('.contact-header', 
    { opacity: 0, y: 30 },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      scrollTrigger: {
        trigger: '.contact-header',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo('.contact-info', 
    { opacity: 0, x: -30 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.8,
      scrollTrigger: {
        trigger: '.contact-info',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  gsap.fromTo('.contact-form', 
    { opacity: 0, x: 30 },
    { 
      opacity: 1, 
      x: 0, 
      duration: 0.8,
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    }
  );

  // Skill level animations
  ScrollTrigger.batch('.skill-item', {
    onEnter: (elements) => {
      gsap.fromTo(elements, 
        { opacity: 0, x: -20 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out'
        }
      );
    },
    start: 'top 85%',
    end: 'bottom 15%'
  });

  // Parallax effect for floating shapes
  gsap.to('.floating-shape', {
    yPercent: -50,
    ease: 'none',
    scrollTrigger: {
      trigger: '#landing',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
};