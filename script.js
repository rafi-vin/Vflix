// FAQ Toggle Functionality
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    const answer = faqItem.querySelector(".faq-answer");
    const toggle = question.querySelector(".faq-toggle");

    // Close other FAQ items
    document.querySelectorAll(".faq-item").forEach((item) => {
      if (item !== faqItem) {
        item.querySelector(".faq-question").classList.remove("active");
        item.querySelector(".faq-answer").classList.remove("active");
        item.querySelector(".faq-toggle").classList.remove("active");
      }
    });

    // Toggle current FAQ item
    question.classList.toggle("active");
    answer.classList.toggle("active");
    toggle.classList.toggle("active");
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Header scroll effect
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 100) {
    header.style.background = "rgba(20, 20, 20, 0.98)";
  } else {
    header.style.background = "rgba(20, 20, 20, 0.95)";
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all fade-in-up elements
document.querySelectorAll(".fade-in-up").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

// Price item hover effects
document.querySelectorAll(".price-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.background = "linear-gradient(135deg, #1a1a1a, #e50914)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.background = "#000";
  });
});

// Add click tracking for CTA buttons
document
  .querySelectorAll(".cta-button, .header-cta, .buy-btn")
  .forEach((button) => {
    button.addEventListener("click", () => {
      console.log("Button clicked:", button.textContent);
    });
  });

// Mobile menu functionality
const createMobileOptimizations = () => {
  if (window.innerWidth <= 768) {
    // Add mobile-specific optimizations
    document.body.style.fontSize = "16px"; // Prevent zoom on iOS

    // Optimize touch targets
    document.querySelectorAll(".buy-btn").forEach((btn) => {
      btn.style.minHeight = "44px";
      btn.style.minWidth = "44px";
    });
  }
};

window.addEventListener("resize", createMobileOptimizations);
createMobileOptimizations();

// Floating WhatsApp Button
function createFloatingWhatsApp() {
  const floatingBtn = document.createElement("div");
  floatingBtn.innerHTML = "💬";
  floatingBtn.className = "floating-whatsapp";

  floatingBtn.addEventListener("click", () => {
    window.open("https://wa.me/+62 857-1136-5650", "_blank");
  });

  document.body.appendChild(floatingBtn);
}

// Initialize floating WhatsApp button
createFloatingWhatsApp();

// Loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
  document.body.style.transition = "opacity 0.3s ease";
});

// Set initial body opacity
document.body.style.opacity = "0";

// Prevent horizontal scroll on mobile
function preventHorizontalScroll() {
  document.body.style.overflowX = "hidden";
  document.documentElement.style.overflowX = "hidden";
}

preventHorizontalScroll();

// Optimize images for mobile
function optimizeForMobile() {
  if (window.innerWidth <= 768) {
    // Add lazy loading for better performance
    document.querySelectorAll("img").forEach((img) => {
      img.loading = "lazy";
    });
  }
}

optimizeForMobile();

// Touch event optimizations for mobile
document.addEventListener("touchstart", () => {}, { passive: true });
document.addEventListener("touchmove", () => {}, { passive: true });

// Viewport height fix for mobile browsers
function setViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

window.addEventListener("resize", setViewportHeight);
setViewportHeight();

// Performance optimization
function optimizePerformance() {
  // Debounce scroll events
  let scrollTimeout;
  window.addEventListener(
    "scroll",
    () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        // Scroll handling code here
      }, 10);
    },
    { passive: true }
  );
}

optimizePerformance();

console.log("NetflixPro website loaded successfully! 🎬");
