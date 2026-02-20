const navbar = document.getElementById("navbar");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const scrollTopBtn = document.getElementById("scrollTop");
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
    scrollTopBtn.classList.add("active");
  } else {
    navbar.classList.remove("scrolled");
    scrollTopBtn.classList.remove("active");
  }

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const observerOptions = {
  threshold: 0.2,
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

const animateElements = document.querySelectorAll(
  ".skill-card, .project-card, .interest-card, .contact-card, .timeline-item, .info-item",
);
animateElements.forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "all 0.6s ease-out";
  observer.observe(el);
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

const skillCards = document.querySelectorAll(".skill-card");
skillCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

const interestCards = document.querySelectorAll(".interest-card");
interestCards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

let mouseX = 0;
let mouseY = 0;
let ballX = 0;
let ballY = 0;
const speed = 0.1;

function animate() {
  const distX = mouseX - ballX;
  const distY = mouseY - ballY;

  ballX += distX * speed;
  ballY += distY * speed;

  requestAnimationFrame(animate);
}

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

animate();

document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-text");
  if (heroText) {
    heroText.style.opacity = "0";
    setTimeout(() => {
      heroText.style.transition = "opacity 1s ease-out";
      heroText.style.opacity = "1";
    }, 100);
  }
});

const createParticles = () => {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 3 + 1}px;
            height: ${Math.random() * 3 + 1}px;
            background: rgba(0, 212, 255, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: particleFloat ${Math.random() * 10 + 5}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
    hero.appendChild(particle);
  }
};

const style = document.createElement("style");
style.textContent = `
    @keyframes particleFloat {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        50% {
            transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
        }
    }
`;
document.head.appendChild(style);

createParticles();

const contactCards = document.querySelectorAll(".contact-card");
contactCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });
  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    const icon = this.querySelector(".project-header i");
    if (icon) {
      icon.style.transform = "rotate(360deg) scale(1.2)";
      icon.style.transition = "transform 0.6s ease";
    }
  });
  card.addEventListener("mouseleave", function () {
    const icon = this.querySelector(".project-header i");
    if (icon) {
      icon.style.transform = "rotate(0deg) scale(1)";
    }
  });
});

console.log("Portfolio website loaded successfully!");
console.log("Developed by Prakhar Bhatnagar");

window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease-in";
    document.body.style.opacity = "1";
  }, 100);
});
