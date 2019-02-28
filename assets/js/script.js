// Langues

function showLanguage(language) {
    document.querySelectorAll('.' + language).forEach(function (element) {
        element.classList.remove('hidden');
    });
}

function hideLanguage(language) {
    document.querySelectorAll('.' + language).forEach(function (element) {
        element.classList.add('hidden');
    });
}

function setLanguage(language) {
    if (language == 'fr') {
        showLanguage('fr');
        hideLanguage('en');
    } else {
        showLanguage('en');
        hideLanguage('fr');
    }
}
setLanguage('fr');

// A faire :

// Fermer menu après clic
// Background page

function animProgBar() {
    document.getElementsByClassName("progHTML").style.width = '0;';
}
