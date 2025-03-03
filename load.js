const loadingPage = document.querySelector(".loader");

window.onload = function() {
    console.log.apply(console, [
        "%c Designed and Coded by Giorgio ", 
        "color: #fff; background: #594988; padding:5px 0; border-radius: 5px; font-weight: bold"
    ]);
    /* loadingPage.style.opacity = "0";
    setTimeout(function() {
        loadingPage.style.display = "none";
    }, 500); */
};

jQuery.event.special.touchstart = {
    setup: function(_, ns, handle) {
        this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
};

jQuery.event.special.touchmove = {
    setup: function(_, ns, handle) {
        this.addEventListener("touchmove", handle, { passive: !ns.includes("noPreventDefault") });
    }
};

jQuery.event.special.wheel = {
    setup: function(_, ns, handle) {
        this.addEventListener("wheel", handle, { passive: true });
    }
};