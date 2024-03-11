'use strict'

$(document).ready(function () {

    // init Isotope
    var $grid = $('.item_details').isotope({
      // options
    });
    // filter items on button click
    $('.item_manue').on('click', 'li', function () {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({
        filter: filterValue
      });
    });


    $('.toure_slider').owlCarousel({
      loop: true,     
      margin: 20,      
      nav: true,
      dots: true,
      navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsive: {
          0: {
              items: 1
          },
          576: {
            items: 2
        },
          768: {
              items: 3
          },
          1000: {
              items: 4
          },
          1200: {
              items: 4
          }
      }
      
    });
    







  
  });




  
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
          current = start,
          range = end - start,
          increment = end > start ? 1 : -1,
          step = Math.abs(Math.floor(duration / range)),
          timer = setInterval(() => {
              current += increment;
              obj.textContent = current;
              if (current == end) {
                  clearInterval(timer);
              }
          }, step);

  }
  counter("count1", 0, 30, 3000);
  counter("count2", 0, 1000, 2500);
  counter("count3", 0, 100, 3000);
  counter("count4", 0, 1100, 3000);
});