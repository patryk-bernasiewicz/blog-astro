(() => {
  document.addEventListener("astro:page-load", () => {
    const lazyImages = document.querySelectorAll(".lazy-image");

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (!entry.target.hasAttribute("data-src")) {
            return;
          }

          const targetSrc = entry.target.getAttribute("data-src");
          if (typeof targetSrc !== "string") {
            return;
          }

          entry.target.setAttribute("src", targetSrc);
          entry.target.removeAttribute("data-src");
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback);
    lazyImages.forEach((image) => observer.observe(image));
  });
})();
