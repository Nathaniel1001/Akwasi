/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");
  menuBtn.classList.toggle("responsive");
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.addEventListener("scroll", function () {
  const navHeader = document.getElementById("header");
  if (window.scrollY > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
});

/* ----- TYPING EFFECT ----- */
if (document.querySelector(".typedText")) {
  new Typed(".typedText", {
    strings: ["Akwasi", "Dedicated", "Innovative", "Reliable"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
  });
}

/* ----- ## -- SCROLL REVEAL ANIMATION (ONLY ONCE) -- ## ----- */
if (typeof ScrollReveal !== "undefined") {
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: false,  // Ensures animations only run once
  });

  /* -- HOME -- */
  sr.reveal(".featured-text-card", {});
  sr.reveal(".featured-name", { delay: 100 });
  sr.reveal(".featured-text-info", { delay: 200 });
  sr.reveal(".featured-text-btn", { delay: 200 });
  sr.reveal(".social_icons", { delay: 200 });
  sr.reveal(".featured-image", { delay: 300 });

  /* -- PROJECT BOX -- */
  sr.reveal(".project-box", { interval: 200 });

  /* -- HEADINGS -- */
  sr.reveal(".top-header", {});

  /* -- ABOUT SECTION -- */
  sr.reveal("#about .col-left", { origin: "left", delay: 100 });
  sr.reveal("#about .col-right", { origin: "right", delay: 200 });

  /* -- FACT SECTION -- */
  sr.reveal("#fact .FACT", { delay: 100 });
  sr.reveal("#fact .facts .pic", { interval: 200 });
}

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll("section[id]");
function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const link = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
    if (link) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        link.classList.add("active-link");
      } else {
        link.classList.remove("active-link");
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);
