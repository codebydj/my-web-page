// Search functionality
document
  .getElementById("projectSearch")
  .addEventListener("input", function (e) {
    const searchTerm = e.target.value.toLowerCase();
    const projects = document.querySelectorAll(".projectCard");

    projects.forEach((project) => {
      const title = project
        .querySelector(".projectTitle")
        .textContent.toLowerCase();
      project.style.display = title.includes(searchTerm) ? "block" : "none";
    });
  });

document
  .getElementById("searchRemoveBtn")
  .addEventListener("click", function () {
    const searchTerm = document.getElementById("projectSearch");
    searchTerm.value = "";
    // Optionally trigger the search/filter function to reset results
    searchTerm.dispatchEvent(new Event("input"));
  });

// Back to top button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTop").style.display = "block";
  } else {
    document.getElementById("backToTop").style.display = "none";
  }
};
