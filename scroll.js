/* let currentSectionIndex = 0;
const sections = ["homeNoMenu", "portfolioNoMenu", "aboutNoMenu", "contactNoMenu"];
let isScrolling = false;

window.addEventListener('wheel', (event) => {
    if (isScrolling) return;
    if ((currentSectionIndex === 0 && event.deltaY < 0) || 
        (currentSectionIndex === sections.length - 1 && event.deltaY > 0)) return;

    isScrolling = true;
    setTimeout(() => {
        if (event.deltaY > 0 && currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
        } else if (event.deltaY < 0 && currentSectionIndex > 0) {
            currentSectionIndex--;
        }

        const sectionFunc = sections[currentSectionIndex];
        if (sectionFunc) window[sectionFunc]();

        document.addEventListener('transitionend', () => {
            isScrolling = false;
        }, { once: true });
    }, 800);
});

const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar a");
const menuButton = document.getElementById("menuIcon");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const ycs = document.getElementById("ycs");

const homePage = document.querySelector(".home");
const aboutPage = document.querySelector(".about");
const portfolioPage = document.querySelector(".variable-width");
const contactPage = document.querySelector(".contact");

let transitionInProgress = false;
let isOpen = false;

sidebar.style.transition = "transform 1s ease";

function toggleMenu() {
    if (transitionInProgress) return;
    if (isOpen) {
        sidebarLinks.forEach(link => (link.style.opacity = "0"));
        setTimeout(() => {
            sidebar.style.transform = "translateY(-100%)";
        }, 800);
    } else {
        sidebar.style.transform = "translateY(0%)";
    }
    transitionInProgress = true;
    isOpen = !isOpen;
}

function transitionFunc() {
    if (transitionInProgress) return;
    sidebarLinks.forEach(link => (link.style.visibility = "hidden"));
    sidebar.style.transition = "transform 0.5s ease-in-out";
    sidebar.style.transform = "translateY(0%)";
    setTimeout(() => {
        sidebar.style.transform = "translateY(-100%)";
        sidebarLinks.forEach(link => (link.style.visibility = "visible"));
    }, 800);
    transitionInProgress = true;
}

function menuButtonClick() {
    if (isOpen) {
        line1.classList.add("line1-transformed");
        line2.classList.add("line2-transformed");
    } else {
        line1.classList.remove("line1-transformed");
        line2.classList.remove("line2-transformed");
    }
}

function navigateToSection(index, withMenu = true) {
    if (index < 0 || index >= sections.length) return;
    currentSectionIndex = index;
    const sectionFunc = sections[currentSectionIndex] + (withMenu ? "" : "NoMenu");
    setTimeout(() => {
        if (sectionFunc && typeof window[sectionFunc] === "function") {
            window[sectionFunc]();
        }
    }, 800);
}

sidebarLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        navigateToSection(index, false);
    });
});

function about() {
    toggleMenu();
    menuButtonClick();
    setTimeout(() => {
        aboutPage.style.display = "block";
        homePage.style.display = "none";
        portfolioPage.style.visibility = "hidden";
        contactPage.style.display = "none";
    }, 800);
}

function aboutNoMenu() {
    transitionFunc();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.visibility = "visible";
        portfolioPage.style.visibility = "hidden";
        contactPage.style.display = "none";
    }, 800);
}

function home() {
    toggleMenu();
    menuButtonClick();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.display = "block";
        portfolioPage.style.visibility = "hidden";
        contactPage.style.display = "none";
    }, 800);
}

function homeNoMenu() {
    transitionFunc();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.display = "block";
        portfolioPage.style.visibility = "hidden";
        contactPage.style.display = "none";
    }, 800);
}

function portfolio() {
    toggleMenu();
    menuButtonClick();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.display = "none";
        portfolioPage.style.visibility = "visible";
        contactPage.style.display = "none";
    }, 800);
}

function portfolioNoMenu() {
    transitionFunc();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.display = "none";
        portfolioPage.style.visibility = "visible";
        contactPage.style.display = "none";
    }, 800);
}

function contact() {
    toggleMenu();
    menuButtonClick();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.display = "none";
        portfolioPage.style.visibility = "hidden";
        contactPage.style.display = "flex";
    }, 800);
}

function contactNoMenu() {
    transitionFunc();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.visibility = "hidden";
        portfolioPage.style.visibility = "hidden";
        contactPage.style.display = "flex";
    }, 800);
}

sidebar.addEventListener("transitionend", () => {
    transitionInProgress = false;
    if (isOpen) {
        sidebarLinks.forEach(link => (link.style.opacity = "1"));
    }
});

document.addEventListener("mousemove", function (e) {
    const cursorX = e.pageX;
    const cursorY = e.pageY;
    const attractionRadius = 100;
    document.querySelectorAll(".slick-dots li").forEach(function(dot) {
        const dotRect = dot.getBoundingClientRect();
        const dotCenterX = dotRect.left + dotRect.width / 2;
        const dotCenterY = dotRect.top + dotRect.height / 2;
        const distanceX = cursorX - dotCenterX;
        const distanceY = cursorY - dotCenterY;
        const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
        if (distance < attractionRadius) {
            const strength = (attractionRadius - distance) / attractionRadius;
            const moveX = distanceX * strength * 0.3;
            const moveY = distanceY * strength * 0.3;
            dot.style.transform = `translate(${moveX}px, ${moveY}px)`;
        } else {
            dot.style.transform = "translate(0, 0)";
        }
    });
});

const glacierElements = document.getElementsByClassName("glacier");

Array.from(glacierElements).forEach(function(element) {
    element.addEventListener("click", function() {
        window.location.href = "glacier.html";
    });
});

document.body.ondragstart = function(e) {
    e.preventDefault();
};

document.body.onselectstart = function(e) {
    e.preventDefault();
};
 */


let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > lastScrollY) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollY = window.scrollY;
});
