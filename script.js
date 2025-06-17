// GSAP Animations
gsap.from("#img1", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: 60,
});
gsap.from("#img2", {
  delay: 0.5,
  opacity: 0,
  duration: 1,
  x: 60,
});
gsap.from("#img3", {
  delay: 0.6,
  opacity: 0,
  duration: 1,
  y: -60,
});
gsap.from("#main h1", {
  delay: 0.3,
  opacity: 0,
  duration: 1,
});

// Responsive Menu Toggle
document.getElementById("menu-icon").addEventListener("click", () => {
  document.getElementById("part-2").classList.toggle("show");
});
