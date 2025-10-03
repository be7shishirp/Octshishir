// GSAP ScrollTrigger setup
gsap.registerPlugin(ScrollTrigger);

// Example animation for sections
document.querySelectorAll('section').forEach((section, index) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "top 20%",
      toggleActions: "play none none reverse",
    },
  });
});
