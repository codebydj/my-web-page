document.addEventListener("DOMContentLoaded", function () {
  // Function to calculate and display total projects
  function updateTotalProjects() {
    const HCP =
      parseInt(document.getElementById("HCProjectsCount").innerText, 10) || 0;
    const HCJP =
      parseInt(document.getElementById("HCJProjectsCount").innerText, 10) || 0;
    const RTP =
      parseInt(document.getElementById("RTProjects").innerText, 10) || 0;

    const TPElement = document.getElementById("TotalProjectsCount");
    TPElement.innerText = HCP + HCJP + RTP;
  }

  // Run the calculation on page load
  updateTotalProjects();

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
        project.style.display = title.includes(searchTerm) ? "flex" : "none";
      });
    });

  document
    .getElementById("searchRemoveBtn")
    .addEventListener("click", function () {
      const searchInput = document.getElementById("projectSearch");
      searchInput.value = "";
      // Trigger the search/filter function to reset results
      searchInput.dispatchEvent(new Event("input"));
    });

  // Back to Top Button and Total Projects Count on Scroll
  window.onscroll = function () {
    // Back to Top Button Visibility
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("backToTop").style.display = "block";
    } else {
      document.getElementById("backToTop").style.display = "none";
    }

    // Update Total Projects Count
    updateTotalProjects();
  };

  // Back to Top Button Functionality
  document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  renderProjects(htmlCssProjects, 0);
  document.getElementById("HCProjectsCount").innerText = htmlCssProjects.length;

  renderProjects(htmlCssJsProjects, 1);
  document.getElementById("HCJProjectsCount").innerText =
    htmlCssJsProjects.length;

  renderProjects(realTimeProjects, 2);
  document.getElementById("RTProjects").innerText = realTimeProjects.length;

  document.getElementById("TotalProjectsCount").innerText = htmlCssProjects.length + htmlCssJsProjects.length + realTimeProjects.length;
});
