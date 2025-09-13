document.addEventListener("DOMContentLoaded", () => {
  // ====== Xử lý show/hide form ======
  const methods = document.querySelectorAll(".method");
  const forms = document.querySelectorAll(".method-form");

  methods.forEach(method => {
    method.addEventListener("click", () => {
      const targetId = method.getAttribute("data-target");
      const targetForm = document.getElementById(targetId);

      if (targetForm.classList.contains("active")) {
        targetForm.classList.remove("active");
      } else {
        forms.forEach(f => f.classList.remove("active"));
        targetForm.classList.add("active");
      }
    });
  });

  // ====== Highlight link trong sidebar ======
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".sidebar a").forEach(link => {
    const linkPage = link.getAttribute("href").replace("./", "");

    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
      link.classList.add("active");
    }
  });
});
