const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  
  function firstPageAnim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10%', 
        opacity: 0,
        duration: 1.5,
        ease: Expo.InOut
    })
    
    .to(".boundingelem", {
        y: 0,
        ease: Expo.InOut,
        duration: 2,
        stagger: 0.2,
        delay: -1,
    });

    tl.from("#herofooter", {
        y: 0, 
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.InOut
    })
}

var timeout;

function circlechaptakaro() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev); 
    
    xprev = dets.clientX;
    xprev = dets.clientY;

    circleMouseFollower(xscale, yscale);
    
    timeout = setTimeout(function () {
        const circle = document.querySelector("#minicircle").style.transform = `translate(${dets.clientX - 10}px, ${dets.clientY - 10}px) scale(1, 1)`;
    }, 100);
    });
}

circlechaptakaro();

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        const circle = document.querySelector("#minicircle").style.transform = `translate(${dets.clientX - 10}px, ${dets.clientY - 10}px) scale(${xscale}, ${yscale})`;
        
    });
}

circleMouseFollower(1, 1); 
firstPageAnim();


document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffort = 0;

    elem.addEventListener("mouseleave", function (dets) {
        
       gsap.to(elem.querySelector("img"), {
           opacity: 0,
           ease: Power3,
           duration: 0.5,
       });
       });

    elem.addEventListener("mousemove", function (dets) {
     var diff = dets.clientY - elem.getBoundingClientRect().top;
     diffort = dets.clientX - rotate;
     rotate = dets.clientX;
     
    gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: details.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffort * 0.5),
    });
    });
});