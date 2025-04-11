document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.split("/").pop();

  document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
    const linkHref = link.getAttribute("href").replace("./", "");

    if (
      linkHref === currentPath ||
      (linkHref === "index.html" && currentPath === "")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
