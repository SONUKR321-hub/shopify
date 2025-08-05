// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Example: Smooth scroll to top on page load (optional)
window.addEventListener('load', () => {
  gsap.to(window, {duration: 0, scrollTo: 0});
});

// Example: Product card hover animation
document.querySelectorAll('.product-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    gsap.to(card, {scale: 1.03, duration: 0.3, ease: 'power1.out'});
  });
  card.addEventListener('mouseleave', () => {
    gsap.to(card, {scale: 1, duration: 0.3, ease: 'power1.out'});
  });
});

// Example: Parallax effect on hero section (if applicable)
// gsap.to('.hero-section', {
//   backgroundPositionY: '20%',
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.hero-section',
//     start: 'top top',
//     end: 'bottom top',
//     scrub: true
//   }
// });

// Example: Sticky header (already handled by CSS, but can add JS for more complex behavior)
// window.addEventListener('scroll', () => {
//   const header = document.querySelector('.site-header');
//   if (window.scrollY > 100) {
//     header.classList.add('sticky');
//   } else {
//     header.classList.remove('sticky');
//   }
// });

// Lottie animation example (already in main-index.liquid, but can be controlled here)
// const lottiePlayer = document.querySelector('lottie-player');
// if (lottiePlayer) {
//   lottiePlayer.addEventListener('ready', () => {
//     console.log('Lottie player is ready');
//   });
// }