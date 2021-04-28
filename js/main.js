window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('menu__box_visible');
    document.querySelector('#burger').classList.toggle('menu__btn');
    document.querySelector('#burger').classList.toggle('menu__btn-close');
    });
  document.querySelector('#burger').addEventListener('keypress', function () {
    document.querySelector('#menu').classList.toggle('menu__box_visible');
   document.querySelector('#burger').classList.toggle('menu__btn');
   document.querySelector('#burger').classList.toggle('menu__btn-close');
   });


  // slider
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 2000,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

  // If we need pagination
  pagination: {
   el: '.swiper-pagination',
   clickable: 'true',
  },
});

// tabs
document.querySelectorAll('.working__link').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function(event) {
    const path = event.currentTarget.dataset.path
    document.querySelectorAll('.working__link').forEach(function(rem) {
      rem.classList.remove('working__link_active')
    })
    tabsBtn.classList.add('working__link_active')
    document.querySelectorAll('.working__step').forEach(function(tabContent) {
        tabContent.classList.remove('working__step_active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('working__step_active')
  })
});

// accordion
$( function() {
  $( "#accordion" ).accordion({
    active: 'false',
    collapsible: 'true',
    heightStyle:  'content',
    icons: 'false',
  });
  });

});
