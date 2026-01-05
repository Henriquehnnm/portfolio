export function observeAnimations() {
  const animatedElements = document.querySelectorAll('[class*="animate-"]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }
  );
  animatedElements.forEach((el) => observer.observe(el));
}
