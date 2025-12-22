// Product Details Modal
const productDetails = {
  1: {
    title: "Waste Container Holders",
    description:
      "Specialized holders for safe storage and access to medical waste containers in hospital facilities.",
    specs: [
      "Capacity: 3L and 4L variants",
      "Material: 3D printed thermoplastic",
      "Design: Ergonomic and safety-oriented",
      "Installation: Easy wall mounting",
      "Application: All hospital institutions with safety standards",
    ],
    benefits: [
      "Prevents spillage of infectious material",
      "Facilitates access for medical staff",
      "Organizes space efficiently",
      "Reduces risk of accidents",
      "Favorable production cost",
    ],
  },
  2: {
    title: "Wall-Mounted Glove Box Holder",
    description:
      "Practical wall holder designed for storage and easy access to boxes of disposable medical gloves.",
    specs: [
      "Type: Wall-mounted holder",
      "Compatibility: Various box sizes",
      "Installation: Simple mounting",
      "Material: Durable thermoplastic",
      "Dimensions: Adapted to standard boxes",
    ],
    benefits: [
      "Better glove accessibility",
      "Saves space in clinics",
      "Reduces time to find items",
      "Hygienic design",
      "Increases work efficiency",
    ],
  },
  3: {
    title: "Medical Instrument Holder",
    description:
      "Ergonomically designed holder for storing medical instruments in hospital conditions.",
    specs: [
      "Purpose: Storage of medical instruments",
      "Ergonomic design: Easier instrument access",
      "Material: Durable thermoplastic",
      "Flexibility: Adapted to different instruments",
      "Application: Operating rooms, clinics, medical offices",
    ],
    benefits: [
      "Prevents instrument damage",
      "Makes space more organized",
      "Faster tool access during procedure",
      "Reduces contamination risk",
      "Improves work safety",
    ],
  },
  4: {
    title: "Medicine Label Holder",
    description:
      "Innovative holder designed for storage and review of medications on carts in operating rooms.",
    specs: [
      "Application: Medication carts in operating rooms",
      "Capacity: Positions for multiple bottles/ampoules",
      "Attachment: Mounting on mobile carts",
      "Material: Durable and light thermoplastic",
      "Design: Allows quick review of medication sequence",
    ],
    benefits: [
      "Prevents medication confusion",
      "Reduces time to find needed medication",
      "Improves patient safety",
      "Makes surgical team work more efficient",
      "Reduces risk of error",
    ],
  },
  5: {
    title: "Laptop Holder for Operating Room",
    description:
      "Specialized holder that enables laptop use during surgical procedures.",
    specs: [
      "Purpose: Access to digital information in operating room",
      "Compatibility: Various laptop sizes",
      "Material: Protective thermoplastic",
      "Mounting: Flexible attachment to various surfaces",
      "Design: Does not interfere with surgical field access",
    ],
    benefits: [
      "Enables real-time access to medical records",
      "Faster preoperative and intraoperative consultation",
      "Improves team communication",
      "Reduces operation time",
      "Increases procedure precision",
    ],
  },
  6: {
    title: "VAK - Vascular Anastomosis Kit",
    description:
      "Revolutionary educational kit for training and demonstration of vascular surgical techniques.",
    specs: [
      "Purpose: Surgeon education and training",
      "Technology: 3D printed anatomical structure",
      "Material: Specialized biomedical materials",
      "Realism: Mimics blood vessel properties",
      "Version: Current + planned VAK PRO version",
    ],
    benefits: [
      "Enables realistic training before operation",
      "Improves surgeon skills",
      "Reduces risk during first procedure",
      "Ability to demonstrate difficult cases",
      "Support for continuous education",
      "Investment of €100,000 for VAK PRO version with advanced material",
    ],
  },
};

const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const closeBtn = document.querySelector(".close");

// Open modal on product card click
document.querySelectorAll(".product-card").forEach((card) => {
  const detailsBtn = card.querySelector(".btn-details");
  if (detailsBtn) {
    detailsBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const productId = card.dataset.productId;
      const product = productDetails[productId];

      if (product) {
        modalBody.innerHTML = `
                    <h2>${product.title}</h2>
                    <p><strong>${product.description}</strong></p>
                    
                    <h3>Specifikacije:</h3>
                    <ul>
                        ${product.specs
                          .map((spec) => `<li>${spec}</li>`)
                          .join("")}
                    </ul>
                    
                    <h3>Prednosti:</h3>
                    <ul>
                        ${product.benefits
                          .map((benefit) => `<li>${benefit}</li>`)
                          .join("")}
                    </ul>
                `;
        modal.classList.add("show");
      }
    });
  }
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
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
