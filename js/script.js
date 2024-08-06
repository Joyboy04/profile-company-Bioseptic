function openFullscreen(src) {
    window.open(src, '_blank'); // Open image in a new tab
}

let scrollPosition = 0;
let speed = 1; // Initial scroll speed

function calculateInitialScrollPosition(wrapper, totalWidth) {
    const wrapperWidth = wrapper.offsetWidth;
    return (totalWidth - wrapperWidth) / 2;
}

function adjustInitialPosition(wrapper) {
    const certificates = document.querySelectorAll('.certificate');
    const totalWidth = Array.from(certificates).reduce((total, cert) => {
        return total + cert.offsetWidth + parseFloat(getComputedStyle(cert).marginRight) + parseFloat(getComputedStyle(cert).marginLeft);
    }, 0);

    scrollPosition = calculateInitialScrollPosition(wrapper, totalWidth);
    wrapper.style.transition = 'none'; // Disable transition for initial positioning
    wrapper.style.transform = `translateX(${-scrollPosition}px)`;
}

function autoScroll(timestamp) {
    const wrapper = document.getElementById('scrolling-wrapper');
    const certificates = document.querySelectorAll('.certificate');
    const first = certificates[0];
    const totalWidth = Array.from(certificates).reduce((total, cert) => {
        return total + cert.offsetWidth + parseFloat(getComputedStyle(cert).marginRight) + parseFloat(getComputedStyle(cert).marginLeft);
    }, 0);

    scrollPosition += speed; // Scroll to the left

    wrapper.style.transform = `translateX(${-scrollPosition}px)`;

    if (Math.abs(scrollPosition) >= first.offsetWidth + parseFloat(getComputedStyle(first).marginRight)) {
        scrollPosition -= first.offsetWidth + parseFloat(getComputedStyle(first).marginRight);
        wrapper.style.transition = 'none';
        wrapper.appendChild(first);
        wrapper.style.transform = `translateX(${-scrollPosition}px)`;
        requestAnimationFrame(() => {
            wrapper.style.transition = 'transform 1s ease-in-out';
        });
    }

    // Reposition elements if they go out of the viewport
    if (Math.abs(scrollPosition) >= totalWidth) {
        scrollPosition = 0;
        wrapper.style.transform = `translateX(0px)`;
    }

    requestAnimationFrame(autoScroll);
}

// Start the scrolling effect
window.onload = () => {
    const wrapper = document.getElementById('scrolling-wrapper');
    adjustInitialPosition(wrapper); // Adjust the position to be centered initially

    requestAnimationFrame(autoScroll);
};

$(document).ready(function(){
    $('.nonloop-block-11').owlCarousel({
      center: true,
      items:1,
      loop:true,
      margin:10,
      autoplay: true,
      autoplayTimeout: 5000, // 5 seconds
      autoplayHoverPause: true,
      responsive:{
        600:{
          items:1
        }
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const scrollers = document.querySelectorAll(".scroller");
  
    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  
    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);
  
        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);
  
        // Clone the elements enough times to fill the container
        const numberOfDuplicates = 5; // Increase number of duplicates to extend scroll
        for (let i = 0; i < numberOfDuplicates; i++) {
          scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
          });
        }
      });
    }
  
    // Lightbox functionality
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const images = document.querySelectorAll(".scroller-image");
  
    images.forEach((image) => {
      image.addEventListener("click", function () {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
        pauseScrolling();
      });
    });
  
    const closeLightbox = document.querySelector(".lightbox-close");
    closeLightbox.addEventListener("click", function () {
      lightbox.style.display = "none";
      resumeScrolling();
    });
  
    // Close lightbox on clicking outside the image
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) {
        lightbox.style.display = "none";
        resumeScrolling();
      }
    });
  
    function pauseScrolling() {
      scrollers.forEach((scroller) => {
        scroller.querySelector(".scroller__inner").style.animationPlayState = "paused";
      });
    }
  
    function resumeScrolling() {
      scrollers.forEach((scroller) => {
        scroller.querySelector(".scroller__inner").style.animationPlayState = "running";
      });
    }
  });
  
  