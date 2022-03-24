// --- Config --- //
var purecookieTitle = "Privacy."; // Title
var purecookieDesc = "By using this website, you agree that we may collect certain data about you, only when we truly need it and to provide you with the most relevant experience."; // Description
var purecookieLink = '<a href="https://www.comfycapital.org/privacy/" target="_blank">What for?</a>'; // Cookiepolicy link
var purecookieButton = "Understood"; // Button text
// ---        --- //

function pureFadeIn(elem, display) {
    var el = document.getElementById(elem);
    el.style.opacity = 0;
    el.style.display = display || "block";

    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .02) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

function pureFadeOut(elem) {
    var el = document.getElementById(elem);
    el.style.opacity = 1;

    (function fade() {
        if ((el.style.opacity -= .02) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function purecookieDismiss() {
    pureFadeOut("cookieConsentContainer");
}

window.onload = function () {
    document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' + purecookieTitle + '</a></div><div class="cookieDesc"><p>' + purecookieDesc + ' ' + purecookieLink + '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' + purecookieButton + '</a></div></div>';
        pureFadeIn("cookieConsentContainer");
};