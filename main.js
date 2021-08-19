$.hint.defaults = {

    // additional CSS class
    className: null,

    // time to wait before showing the tooltip
    delayIn: 0,

    // enable/disable fade in/out transitions
    fade: true,
    fallback: '',

    // w/n/s/w
    gravity: 'n',

    // same to data-hint-html
    html: false,

    // offset in pixel
    offset: 0,

    // opacity from 0 to 1
    opacity: 0.8,

    // title
    title: 'title',

    // same to data-hint-align
    textAlign: 'center',

    // same to data-hint-max-width
    maxWidth: 0

}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

}



// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('slider').checked = true;
    }
})();