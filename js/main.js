(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    

        // Subscribe button handler
        document.addEventListener('DOMContentLoaded', function () {
            var btn = document.getElementById('subscribe-btn');
            var input = document.getElementById('subscribe-email');
            var feedback = document.getElementById('subscribe-feedback');

            if (!btn || !input || !feedback) return;

            function showMessage(msg, isError) {
                feedback.textContent = msg;
                feedback.style.color = isError ? '#ffb3b3' : '#b3ffcf';
                if (!isError) {
                    setTimeout(function(){ feedback.textContent = ''; }, 4000);
                }
            }

            function isValidEmail(email) {
                // simple email regex
                return /^\S+@\S+\.\S+$/.test(email);
            }

            btn.addEventListener('click', function () {
                var email = input.value && input.value.trim();
                if (!email) {
                    showMessage('Please enter an email address.', true);
                    return;
                }
                if (!isValidEmail(email)) {
                    showMessage('Please enter a valid email address.', true);
                    return;
                }

                try {
                    var key = 'kutrrh_subscribers';
                    var list = JSON.parse(localStorage.getItem(key) || '[]');
                    if (list.indexOf(email) === -1) {
                        list.push(email);
                        localStorage.setItem(key, JSON.stringify(list));
                        showMessage('Thanks! You are subscribed.');
                        input.value = '';
                    } else {
                        showMessage('This email is already subscribed.');
                    }
                } catch (e) {
                    console.error('subscribe error', e);
                    showMessage('Subscription failed. Please try again later.', true);
                }
            });
        });
    // Initiate the wowjs
    new WOW().init();


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        margin: 0,
        stagePadding: 0,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
    });


    // Features Section
    $(".feature-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // Blogs Section
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        margin: 25,
        nav : false,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    // Features Section
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fas fa-chevron-left"></i>',
            '<i class="fas fa-chevron-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            }
        }
    });



   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

// Countdown Timer Script for Modern Circular Timer

(function() {
    const STORAGE_KEY = 'kutrrh_countdown_end';
    let countdownDate;

    // Check if end date is already in localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        countdownDate = new Date(saved);
    } else {
        countdownDate = new Date();
        countdownDate.setDate(countdownDate.getDate() + 40);
        localStorage.setItem(STORAGE_KEY, countdownDate.toISOString());
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate.getTime() - now;

        if (distance < 0) {
            document.getElementById("days").innerText = "00";
            document.getElementById("hours").innerText = "00";
            document.getElementById("minutes").innerText = "00";
            document.getElementById("seconds").innerText = "00";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("days").innerText = String(days).padStart(2, '0');
        document.getElementById("hours").innerText = String(hours).padStart(2, '0');
        document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
        document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
})();

// Owl Carousel speed and smoothness improvements
$(document).ready(function(){
  $('.owl-carousel').each(function(){
    $(this).owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 1200,
      smartSpeed: 700,
      animateOut: false,
      animateIn: false,
      items: 1
    });
  });
});



