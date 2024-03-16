window.addEventListener("load", function () {
  const sections = {
    home: document.getElementById("section3"),
    about: document.getElementById("section5"),
    contact: document.getElementById("section6"),
    myProjectsSection: document.getElementById("section4"),
  };

  const navButtons = {
    home: document.getElementById("homeBtn"),
    about: document.getElementById("aboutBtn"),
    contact: document.getElementById("contactBtn"),
    contactMe: document.getElementById("contactMeBtn"),
  };

  function showSection(sectionId) {
    for (let key in sections) {
      if (key === sectionId) {
        sections[key].style.display = "flex";

        if (sectionId === "home") {
          sections.myProjectsSection.style.display = "flex";
        }
      } else {
        sections[key].style.display = "none";

        if (sectionId === "home") {
          sections.myProjectsSection.style.display = "flex";
        }
      }
    }
  }

  navButtons.home.addEventListener("click", function () {
    showSection("home");
  });

  navButtons.about.addEventListener("click", function () {
    showSection("about");
  });

  navButtons.contact.addEventListener("click", function () {
    showSection("contact");
  });

  navButtons.contactMe.addEventListener("click", function () {
    showSection("contact");
  });

  // Parse URL parameters to determine which section to display
  const urlParams = new URLSearchParams(window.location.search);
  const sectionToShow = urlParams.get("section");
  if (sectionToShow) {
    showSection(sectionToShow);
  } else {
    // If no section is specified, default to showing the home section
    showSection("home");
  }
});
