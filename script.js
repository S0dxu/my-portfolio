const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelectorAll(".sidebar a");
const menuButton = document.getElementById("menuIcon");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");

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
        }, 500);
    } else {
        sidebar.style.transform = "translateY(0%)";
    }
    
    transitionInProgress = true;
    isOpen = !isOpen;
}

function scrollToNextHuh(event) {
    const currentBox = event.target.closest('#box');
    const currentSection = currentBox.previousElementSibling;
    const nextSection = currentSection.nextElementSibling;

    if (nextSection) {
        nextSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
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
    console.log("asda") // debug
    if (isOpen) {
        line1.classList.add("line1-transformed");
        line2.classList.add("line2-transformed");
    } else {
        line1.classList.remove("line1-transformed");
        line2.classList.remove("line2-transformed");
    }
}

function about() {
    toggleMenu();
    menuButtonClick();
    setTimeout(() => {
        aboutPage.style.display = "flex";
        homePage.style.display = "none";
        portfolioPage.style.visibility = "hidden";
        contactPage.style.display = "none";
    }, 500);
}

function aboutNoMenu() {
    transitionFunc();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.visibility = "visible";
        portfolioPage.style.visibility = "hidden";
        contactPage.style.display = "none";
    }, 500);
}

function home() {
    toggleMenu();
    menuButtonClick();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.display = "block";
        portfolioPage.style.visibility = "hidden";
        contactPage.style.display = "none";
    }, 500);
}

function homeNoMenu() {
    transitionFunc();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.display = "block";
        portfolioPage.style.visibility = "hidden";
        contactPage.style.display = "none";
    }, 500);
}

function portfolio() {
    toggleMenu();
    menuButtonClick();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.display = "none";
        portfolioPage.style.visibility = "visible";
        contactPage.style.display = "none";
    }, 500);
}

function portfolioNoMenu() {
    transitionFunc();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.display = "none";
        portfolioPage.style.visibility = "visible";
        contactPage.style.display = "none";
    }, 500);
}

function contact() {
    toggleMenu();
    menuButtonClick();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.display = "none";
        portfolioPage.style.visibility = "hidden";
        contactPage.style.display = "flex";
    }, 500);
}

function contactNoMenu() {
    transitionFunc();
    setTimeout(() => {
        aboutPage.style.display = "none";
        homePage.style.visibility = "hidden";
        portfolioPage.style.visibility = "hidden";
        contactPage.style.display = "flex";
    }, 500);
}

sidebar.addEventListener("transitionend", () => {
    transitionInProgress = false;
    if (isOpen) {
        sidebarLinks.forEach(link => (link.style.opacity = "1"));
    }
});


// dot propreties to make them sticky to the mouse
document.addEventListener("mousemove", function (e) { // from bug to feature (I'm the best programmer ever)
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

document.body.ondragstart = function(e) {
    e.preventDefault();
};

document.body.onselectstart = function(e) {
    e.preventDefault();
};