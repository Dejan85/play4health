// Carousel Functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  // Remove prev class and add it to current active slide before switching
  const currentSlide = document.querySelector(".carousel-slide.active");
  if (currentSlide) {
    currentSlide.classList.remove("active");
    currentSlide.classList.add("prev");

    // Remove prev class after animation completes
    setTimeout(() => {
      currentSlide.classList.remove("prev");
    }, 2500);
  }

  // Remove active class from all dots
  dots.forEach((dot) => dot.classList.remove("active"));
}

// Project Details Modal
const modal = document.getElementById("modal");

const titleEl = document.getElementById("modalProjectTitle");
const rowInvestigator = document.getElementById("row-investigator");
const rowDescription = document.getElementById("row-description");
const rowTeam = document.getElementById("row-team");
const rowOrg = document.getElementById("row-organization");
const rowTimeline = document.getElementById("row-timeline");
const rowTrl = document.getElementById("row-trl");
const rowFunding = document.getElementById("row-funding");

const labelDescription = document.getElementById("label-description");
const labelInvestigator = document.getElementById("label-investigator");
const labelTeam = document.getElementById("label-team");
const labelOrg = document.getElementById("label-organization");
const labelTimeline = document.getElementById("label-timeline");
const labelTrl = document.getElementById("label-trl");
const labelFunding = document.getElementById("label-funding");

const valInvestigator = document.getElementById("modalInvestigator");
const valTeam = document.getElementById("modalTeam");
const valOrg = document.getElementById("modalOrganization");
const valStart = document.getElementById("modalStart");
const valDuration = document.getElementById("modalDuration");
const valTrl = document.getElementById("modalTrl");
const valFunding = document.getElementById("modalFunding");
const valDescription = document.getElementById("modalDescription");

function openProjectModal(button) {
  const lang = currentLang;
  const card = button.closest(".project-card");
  const projectName = card ? card.querySelector("h3").textContent : "Project";

  const descEl = card ? card.querySelector(".project-description") : null;
  const description = descEl
    ? descEl.getAttribute(`data-lang-${lang}`) || descEl.textContent || ""
    : "";

  const investigator = button.dataset.investigator || "";
  const team = button.dataset.team || "";
  const org =
    lang === "en"
      ? button.dataset.organizationEn || ""
      : button.dataset.organizationSr || "";
  const startDate = button.dataset.startDate || "";
  const duration =
    lang === "en"
      ? button.dataset.durationEn || ""
      : button.dataset.durationSr || "";
  const trlStart = button.dataset.trlStart || "";
  const trlEnd = button.dataset.trlEnd || "";
  const funding =
    lang === "en"
      ? button.dataset.fundingEn || button.dataset.funding || ""
      : button.dataset.fundingSr || button.dataset.funding || "";

  titleEl.textContent = projectName;

  // Labels
  if (labelDescription) {
    labelDescription.textContent = lang === "en" ? "Description" : "Opis";
  }
  labelInvestigator.textContent =
    lang === "en" ? "Principal Investigator" : "Glavni istraživač";
  labelTeam.textContent = lang === "en" ? "Team" : "Tim";
  labelOrg.textContent = lang === "en" ? "Organization" : "Organizacija";
  labelTimeline.textContent = lang === "en" ? "Timeline" : "Vremenski okvir";
  labelTrl.textContent = "TRL";
  labelFunding.textContent = lang === "en" ? "Funding" : "Finansiranje";

  // Description
  if (rowDescription && valDescription && description.trim()) {
    valDescription.textContent = description.trim();
    rowDescription.style.display = "block";
  } else if (rowDescription) {
    rowDescription.style.display = "none";
  }

  // Values + vidljivost redova
  if (investigator && investigator !== "TBD") {
    valInvestigator.textContent = investigator;
    rowInvestigator.style.display = "block";
  } else {
    rowInvestigator.style.display = "none";
  }

  if (team) {
    valTeam.textContent = team;
    rowTeam.style.display = "block";
  } else {
    rowTeam.style.display = "none";
  }

  if (org) {
    valOrg.textContent = org;
    rowOrg.style.display = "block";
  } else {
    rowOrg.style.display = "none";
  }

  if (startDate || duration) {
    valStart.textContent = startDate
      ? (lang === "en" ? "Start: " : "Početak: ") + startDate
      : "";
    valDuration.textContent = duration
      ? (lang === "en" ? "Duration: " : "Trajanje: ") + duration
      : "";
    rowTimeline.style.display = "block";
  } else {
    rowTimeline.style.display = "none";
  }

  if (trlStart && trlEnd) {
    valTrl.textContent = `${trlStart} → ${trlEnd}`;
    rowTrl.style.display = "block";
  } else {
    rowTrl.style.display = "none";
  }

  if (funding) {
    valFunding.textContent = funding;
    rowFunding.style.display = "block";
  } else {
    rowFunding.style.display = "none";
  }

  // Ako baš nema ničega
  if (
    !description &&
    !investigator &&
    !team &&
    !org &&
    !startDate &&
    !duration &&
    !trlStart &&
    !trlEnd &&
    !funding
  ) {
    if (rowDescription) rowDescription.style.display = "none";
    rowInvestigator.style.display = "none";
    rowTeam.style.display = "none";
    rowOrg.style.display = "none";
    rowTimeline.style.display = "none";
    rowTrl.style.display = "none";
    rowFunding.style.display = "none";
  }

  modal.style.display = "block";
}

// Add click event to all project buttons
document.querySelectorAll(".project-details-btn").forEach((btn) => {
  btn.addEventListener("click", () => openProjectModal(btn));
});

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Zatvori menu kada klikneš na link
  document.querySelectorAll("#navMenu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// Smooth scrolling za navigate linkove
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80; // Kompenzuj navbar
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Contact form
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Dobijanje vrednosti
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector("textarea").value;

    // Validation
    if (!name || !email || !message) {
      alert("Please fill in all required fields!");
      return;
    }

    // Demo message
    alert(
      `Thank you ${name}! Your message has been received.\nWe will respond to ${email} soon.`
    );

    // Resetuj formu
    this.reset();

    // U produkciji, ovde bi se slala poruka na server
    // const formData = new FormData(this);
    // fetch('your-backend-endpoint', {
    //     method: 'POST',
    //     body: formData
    // })
  });
}

// Navbar highlight aktivnog linka - FUNKCIJA
function highlightActiveLink() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-menu a");

  let current = "home";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // Ako je korisnik u okviru sekcije
    if (window.pageYOffset >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
}

// Pozovi funkciju na scroll
window.addEventListener("scroll", highlightActiveLink);

// Pozovi funkciju pri učitavanju stranice
document.addEventListener("DOMContentLoaded", highlightActiveLink);

// Animacija za cards na scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.animation = "fadeInUp 0.6s ease-out";
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Primeni animaciju na proizvode i usluge
document.querySelectorAll(".product-card, .service-card").forEach((card) => {
  card.style.opacity = "0";
  observer.observe(card);
});

// CSS animacija
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-menu a.active {
        color: var(--primary);
        border-bottom: 2px solid var(--primary);
        padding-bottom: 0.5rem;
    }
`;
document.head.appendChild(style);

// Scroll to Top Button Functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Prikaži/sakrij dugme na scroll
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
});

// Scroll to top na klik
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Language Toggle Functionality
let currentLang = localStorage.getItem("language") || "en";

function truncateText(text, maxChars) {
  const clean = (text || "").trim().replace(/\s+/g, " ");
  if (!clean) return "";
  if (clean.length <= maxChars) return clean;

  const slice = clean.slice(0, Math.max(0, maxChars - 3));
  const lastSpace = slice.lastIndexOf(" ");
  const base = lastSpace > 40 ? slice.slice(0, lastSpace) : slice;
  return base.trimEnd() + "...";
}

function updateProjectCardDescriptionPreviews(lang) {
  document
    .querySelectorAll(".project-card .project-description")
    .forEach((el) => {
      const full = el.getAttribute(`data-lang-${lang}`) || el.textContent || "";
      // Only the preview gets truncated; full text remains in data-lang-* for the modal.
      el.textContent = truncateText(full, 160);
    });
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all elements with data-lang attributes
  document.querySelectorAll("[data-lang-en]").forEach((element) => {
    const text = element.getAttribute(`data-lang-${lang}`);
    if (text) {
      // Check if element is title
      if (element.tagName === "TITLE") {
        document.title = text;
      }
      // Check if element is a button, heading, or simple paragraph (direct text node)
      else if (
        element.tagName === "BUTTON" ||
        element.tagName === "H2" ||
        element.tagName === "H3" ||
        element.tagName === "H4" ||
        element.tagName === "H5" ||
        element.tagName === "A" ||
        element.tagName === "LI" ||
        element.classList.contains("section-subtitle") ||
        element.classList.contains("category-title") ||
        element.classList.contains("product-desc") ||
        (element.tagName === "P" && !element.querySelector("strong, span"))
      ) {
        element.textContent = text;
      }
      // For paragraphs with nested elements (like strong tags), preserve structure
      else if (element.tagName === "P" || element.tagName === "SPAN") {
        element.innerHTML = element.innerHTML.replace(
          element.childNodes[element.childNodes.length - 1].textContent,
          text
        );
        // If it's just text content without nested elements, replace directly
        if (
          element.childNodes.length === 1 &&
          element.childNodes[0].nodeType === Node.TEXT_NODE
        ) {
          element.textContent = text;
        }
      }
    }
  });

  // Update placeholder attributes for input fields
  document.querySelectorAll("[data-lang-en-placeholder]").forEach((element) => {
    const placeholder = element.getAttribute(`data-lang-${lang}-placeholder`);
    if (placeholder) {
      element.placeholder = placeholder;
    }
  });

  // Update language toggle button
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    const langText = langToggle.querySelector(".lang-text");
    langText.textContent = lang === "en" ? "SR" : "EN";
  }

  // After swapping language text, re-apply truncated previews on project cards
  updateProjectCardDescriptionPreviews(lang);
}

// Initialize language on page load
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(currentLang);

  // Ensure previews are truncated on first paint
  updateProjectCardDescriptionPreviews(currentLang);

  // Add event listener to language toggle button
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      const newLang = currentLang === "en" ? "sr" : "en";
      setLanguage(newLang);
    });
  }

  // Project Details Modal close behavior (scope to the project modal, not the product modal)
  const projectModal = document.getElementById("modal");
  const projectCloseBtn = projectModal
    ? projectModal.querySelector(".close")
    : null;

  if (projectCloseBtn) {
    projectCloseBtn.onclick = function () {
      projectModal.style.display = "none";
    };
  }

  window.addEventListener("click", function (event) {
    if (event.target === projectModal) {
      projectModal.style.display = "none";
    }
  });

  // Close modal with ESC key
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && projectModal.style.display === "block") {
      projectModal.style.display = "none";
    }
  });
});
