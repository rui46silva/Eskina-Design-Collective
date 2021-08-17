$(document).ready(function() {
    'use strict'
    // HAMBURGER MENU
    $('.hamburger').on('click', function(e) {
      if ($(".navigation-menu").hasClass("active")) {
        $(".hamburger").toggleClass("open");
        $("body").toggleClass("overflow");
        $(".navigation-menu").removeClass("active");
        $(".navigation-menu .inner .menu02").css("transition-delay", "0s");
        $(".navigation-menu .bg-layers span").css("transition-delay", "0.3s");
      } else {
        $(".navigation-menu").addClass('active');
        $(".hamburger").toggleClass("open");
        $("body").toggleClass("overflow");
        $(".navigation-menu.active .inner .menu02").css("transition-delay", "0.45s");
        $(".navigation-menu .bg-layers span").css("transition-delay", "0s");
      }
    }); // fim hamburger
});

function slideEffect(){

  TweenMax.staggerFrom(".animation01", 1, {
      delay: 1.4, 
      opacity: 0, 
      y: 20, 
      ease: Expo.easeInOut
}, 0.2);

    TweenMax.staggerFrom(".animation02", 2, {
      delay: 2, 
      opacity: 0, 
      y: 20, 
      ease: Expo.easeInOut
}, 0.2);

  TweenMax.staggerFrom(".animation03", 1, {
      delay: .5,
      opacity:0,
      ease: Expo.esaeInOut
});

};

function init(){
    
    const loader = document.getElementsByClassName('transition');

    // reset position of the loading screen
    gsap.set(loader,
      {
        scaleX: 0, 
        rotation: 10, 
        xPercent: -5,
        yPercent: -50, 
        transformOrigin: 'left center', 
        autoAlpha: 1
    });

    function loaderIn() {
        // GSAP tween to stretch the loading screen across the whole screen
        return gsap.fromTo(loader, 
            {
                rotation: 10,
                scaleX: 0,
                xPercent: -5
            },
            { 
                duration: 0.8,
                xPercent: 0,
                scaleX: 1, 
                rotation: 0,
                ease: 'Power4.inOut', 
                transformOrigin: 'left center'
            });
    }

    function loaderAway() {
        // GSAP tween to hide the loading screen
        return gsap.to(loader, { 
            duration: 0.8, 
            scaleX: 0,
            xPercent: 0, 
            rotation: -10, 
            transformOrigin: 'right center', 
            ease: 'Power4.inOut',
        });


    };
        barba.init({
        transitions: [{
            async leave(data) {
                loaderIn();
        
            },
            enter(data) {
                loaderAway();
            },
        }]
    });
};

window.addEventListener('load', function(){
    slideEffect();
    init();
});

