$(document).ready(function() {

    function imgAndreasLeft() {
        $("#imgAnimateAndreas").animate({ left: "-=50" }, 3000, "swing", imgAndreasRight);
    }

    function imgAndreasRight() {
        $("#imgAnimateAndreas").animate({ left: "+=50" }, 3000, "swing", imgAndreasLeft);
    }

    imgAndreasRight();
});


const navigationSlide = () => {

    const navigationLinks = document.querySelectorAll('.nav-links li');
    const hamburger = document.querySelector('.burger');
    const navigation = document.querySelector('.nav-links');

    hamburger.addEventListener("click", function() {
        // Toggle navigation
        navigation.classList.toggle('nav-active');

        // Animationlänkar
        navigationLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `LinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        hamburger.classList.toggle('toggle');
    });
};
navigationSlide();

// Scroll to top from anywhere on the site

const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function() {
    $("html,body").animate({ scrollTop: 0 }, 1600);
});


// Down below we have fullscreen on key enter.

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        toggleFullScreen();
    }
}, false);


function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

//** End of fullscreen enter Key listener */


// Down below we have the progress bar

const skillsSection = document.getElementById('skillsection');

const progressBars = document.querySelectorAll('.progress-bar');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;

    });

}

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.4;

    if (sectionPos < screenPos) {

        showProgress();
    } else {

        progressBars.forEach(p => {
            p.style.opacity = 0;
            p.style.width = 0;
        });
    }
});

//** */ Up before we have the progress bar



function startFullscreen(pic) {
    pic = pic || document.documentElement;

    if (!document.fullscreenElement) {
        if (pic.requestFullscreen) {
            pic.requestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}