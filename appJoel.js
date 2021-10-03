$(document).ready(function() {
  showProgress();
  });
  

  //Navigation bar functionality
  const navigationSlide = () => {
  
      const navigationLinks = document.querySelectorAll('.nav-links li');
      const hamburger = document.querySelector('.burger');
      const navigation = document.querySelector('.nav-links');
  
      hamburger.addEventListener('click', () => {
          // Toggle navigation
          navigation.classList.toggle('nav-active');
  
          // Animation links
          navigationLinks.forEach((link, index) => {
  
          if (link.style.animation){
              link.style.animation = '';
          }
          else {link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
          });
          hamburger.classList.toggle('toggle');
      });
  };
  navigationSlide();


 //Even listener for enter-key
  document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      toggleFullScreen();
    }
  }, false);
//Fullscreen start and exit function
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  //** End of fullscreen enter-key listener */


   // Progress bar function
 const progressBars = document.querySelectorAll('.progress-bar')
 function showProgress(){
 progressBars.forEach(progressBar=> {
     const value = progressBar.dataset.progress;
     progressBar.style.opacity = 1;
     progressBar.style.width = `${value}%`;
 });
}


