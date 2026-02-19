document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[target="_blank"]').forEach((a) => {
    // Resolve relative hrefs safely
    const url = new URL(a.getAttribute("href") || "", window.location.href);

    // If it's the same site, force same-tab
    if (url.origin === window.location.origin) {
      a.removeAttribute("target");
      // optional: also remove rel added for _blank
      if (a.getAttribute("rel") === "noopener noreferrer") a.removeAttribute("rel");
    }
  });
});