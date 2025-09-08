// Reveal sections on scroll
(function () {
  const revealables = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !revealables.length) {
    revealables.forEach((el) => el.classList.add("in-view"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.15 }
  );

  revealables.forEach((el) => io.observe(el));
})();