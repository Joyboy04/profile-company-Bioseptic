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
  
