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

// Progress bar 

function animProgBar() {
    document.getElementsByClassName("progHTML").style.width = '0;';
}

// Anim icones

let iconesCtc = document.getElementsByClassName("fas");

for (let eachIcones of iconesCtc) {

    eachIcones.addEventListener("mouseenter", function (event) {

        event.target.classList.add("rotate");
        setTimeout(function () {
            event.target.classList.remove("rotate");
        }, 800);
    })
}

let iconesCpt = document.getElementsByClassName("fab");

for (let eachIcones of iconesCpt) {

    eachIcones.addEventListener("mouseenter", function (event) {

        event.target.classList.add("rotate");
        setTimeout(function () {
            event.target.classList.remove("rotate");
        }, 800);
    })
}

let textCpt = document.getElementsByClassName("compText");

for (let eachTxt of textCpt) {

    eachTxt.addEventListener("mouseenter", function (event) {

        console.log(eachTxt);


        event.target.classList.add("pulse");
        setTimeout(function () {
            event.target.classList.remove("pulse");
        }, 1000);
    })
}