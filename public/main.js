$(document).ready(function () {


  setTimeout(function () {
    $('body').addClass('loaded');
    document.getElementById("heading").style.display = "none";
    


      setTimeout(function () {
        var textWrapper = document.querySelector('.ml11 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|[\w.!'"])/g, "<span class='letter' id='lett'>$&</span>");



    anime.timeline({ loop: true })
      .add({
        targets: '.ml15 .word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 1200,
        delay: (el, i) => 800 * i
      })
      .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
      })
      .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width],
        easing: "easeOutExpo",
        duration: 700,
        delay: 1000
      })
      .add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 20 * (i + 1)
      })
      .add({
        targets: '.ml11',
        opacity: 0,
        duration: 3000,
        easing: "easeOutExpo",
        delay: 1000
      })

      .add({
        targets: '.ml15',
        opacity: 0,
        duration: 500,
        easing: "easeOutExpo",
        delay: 000
      });
  
      }, 100);

    setTimeout(function () {
      document.getElementById("loader-wrapper").style.display = "none";

    }, 1500);
  }, 3500);



});
const aTags = document.getElementsByTagName("a");

for (let i = 0; i < aTags.length; i++) {
  aTags[i].addEventListener("click", function () {
    const activeLinks = document.querySelector('a.active');

    activeLinks.classList.remove("active");
    this.classList.add("active");
  });
}
var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  pagination: ".swiper-pagination",
  grabCursor: true,
  speed: 1000,
  paginationClickable: true,
  parallax: true,
  autoplay: false,
  effect: "slide",
  mousewheelControl: 1
});


const title = document.querySelector("#service_head");

window.addEventListener("scroll", titleScale);

function titleScale() {
  var wScrollY = window.scrollY;
  var scrollYMathMin = Math.min(3, 1 + 0.0045 * (this.scrollY - 2200));

  if (wScrollY >= 2200) {
    console.log(wScrollY, scrollYMathMin)
    title.style.cssText = `
    transform: scale(${scrollYMathMin <= 0 ? scrollYMathMin = 0 : scrollYMathMin});
    `
    wScrollY >= 2370 ? title.style.opacity = 0 : title.style.opacity = 1;

    // document.body.style.backgroundImage = "url('background1.jpg')";
  }
  else {
    // document.body.style.backgroundImage = "url('background.jpg')";
  }



}




// Wrap every letter in a span
$('.flip .letters').each(function () {
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

// Using anime.js library
var mirror = anime.timeline({
  loop: true,
  duration: 4100
})

mirror
  .add({
    targets: '.letter',
    rotateY: [0, -90],
    easing: "easeInCubic",
    duration: 2000
  })
  .add({
    targets: '.flip',
    scaleX: [-1, 1],
    easing: "easeInCubic",
    duration: 1
  })
  .add({
    targets: '.letter',
    rotateY: [-90, 0],
    easing: "easeOutCubic",
    duration: 2000
  })




var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 75 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



