$(document).ready(function() {
    playButton.style.display = 'none';
    playButton.style.display = 'none';



    $(document).ready(function() {

        function flyingBugLeft() {
            $(".flyingBug").animate({ left: "-=500" }, 3000, "swing", flyingBugRight);
        }

        function flyingBugRight() {
            $(".flyingBug").animate({ left: "+=500" }, 3000, "swing", flyingBugLeft);
        }

        function flyingLeafLeft() {
            $(".flyingLeaf").animate({ right: "-=500" }, 3000, "swing", flyingLeafRight);
        }

        function flyingLeafRight() {
            $(".flyingLeaf").animate({ right: "+=500" }, 3000, "swing", flyingLeafLeft);
        }

        flyingBugRight();
        flyingLeafRight();
    });

});


const navigationSlide = () => {

    const navigationLinks = document.querySelectorAll('.nav-links li');
    const hamburger = document.querySelector('.burger');
    const navigation = document.querySelector('.nav-links');

    hamburger.addEventListener("click", function() {
        // Toggle navigation
        navigation.classList.toggle('nav-active');

        // Animation links
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

const btnScrollToTop = document.querySelector("#btnScrollToTop");


/* Slideshow variables and images */

let i = 0;
let images = [];
let time = setInterval(changeImage, 2000);
images[0] = '/images/Commodore.jpg';
images[1] = '/images/computerCode.jpg';
images[2] = '/images/Drone.jpg';
images[3] = '/images/WorkingPeople.jpg';

//Loops through array of images
function changeImage() {
    slideImg.src = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
}

/* Down below is the slideshow functions*/
//Event listener on click
pauseButton.addEventListener("click", function() {
    clearInterval(time);
    pauseButton.style.display = 'none';
    playButton.style.display = 'initial';
    //Pause slideshow, hide pause-button and show play button
});
playButton.addEventListener("click", function() {
    clearInterval(time);
    time = setInterval(changeImage, 2000);
    playButton.style.display = 'none';
    pauseButton.style.display = 'initial';
    //Play slideshow, set new interval and display pause button instead of play button
});

//Show the previous picture in slideshow
leftArrow.addEventListener("click", function() {
    let imgIn = document.getElementById('slideImg').getAttribute('src');
    let imgPosition = images.indexOf(imgIn);

    if (imgPosition == 0) {
        slideImg.src = images[3];
    } else {
        slideImg.src = images[imgPosition - 1];
    }
});

//Show the next picture in slideshow
rightArrow.addEventListener("click", function() {
    let imgIn = document.getElementById('slideImg').getAttribute('src');
    let imgPosition = images.indexOf(imgIn);

    if (imgPosition == 3) {
        slideImg.src = images[0];
        //Goes to first image if at the end of array-index
    } else {
        slideImg.src = images[imgPosition + 1];
    }
    //Otherwise increment index in the array
});

document.getElementById('slideImg').onclick = function() {
    startFullscreen(this);
};
//Start fullscreen of slideshow image

/*End of slideshow functions*/

function startFullscreen(pic) {
    //pic = pic || document.documentElement;
    // Starts fullscreen if fullscreen is not already on
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
//Exit fullscreen if fullscreen is detected
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    }
}

// Down below we have fullscreen on key enter.
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        toggleFullScreen();
    }
}, false);

//Toggles fullscreen
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }

    }

}