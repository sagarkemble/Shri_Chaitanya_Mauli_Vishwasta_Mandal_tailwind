
function showlinks() {
  const links = document.querySelector('.links');

  if (links.classList.contains('-translate-y-[500px]')) {

      links.classList.remove('-translate-y-[500px]');
      links.classList.add('translate-y-0');
      links.classList.add('opacity-100');
    } else {

      links.classList.remove('translate-y-0');
      links.classList.add('-translate-y-[500px]');
      links.classList.add('opacity-0');
  }
}





  function showsublink() {
    const sublink = document.querySelector('.sublink');
    
    if (sublink.style.maxHeight) {
      sublink.style.maxHeight = null; // Collapse if already expanded
    } else {
      sublink.style.maxHeight = sublink.scrollHeight + "px"; // Expand to full height
    }
  }
  function showsublink2() {
    const sublink = document.querySelector('.sublink');
    
    if (sublink.style.maxHeight) {
      sublink.style.maxHeight = null; // Collapse if already expanded
    } else {
      sublink.style.maxHeight = sublink.scrollHeight + "px"; // Expand to full height
    }
  }

  

  const swiper1 = new Swiper("#swiper-1", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows

  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });  

  const swiper2 = new Swiper("#swiper-2", {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      425:{
        slidesPerView:1.4,
      },
      480: {
        slidesPerView:1.4,
      },
      576:{
        slidesPerView:1.6
      },
      640: {
        slidesPerView: 1.8,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3.2,
        // spaceBetween: 50,
      },
      1200:{
        slidesPerView :3.4,
        // spaceBetween:10,
      },
      1400:{
        slidesPerView:3.6,
      },
      1600:{
        slidesPerView:4.2
        ,
      }

    },
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });  
  const swiper3 = new Swiper("#swiper-3", {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows

  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });  
  const swiper4 = new Swiper("#swiper-4", {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 20,
    breakpoints: {
      425:{
        slidesPerView:1.4,
      },
      480: {
        slidesPerView:1.4,
      },
      576:{
        slidesPerView:1.6
      },
      640: {
        slidesPerView: 1.8,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3.2,
        // spaceBetween: 50,
      },
      1200:{
        slidesPerView :3.4,
        // spaceBetween:10,
      },
      1400:{
        slidesPerView:3.6,
      },
      1600:{
        slidesPerView:4.2
        ,
      }

    },
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows

  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });  
  const swiper5 = new Swiper("#swiper-5", {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows

  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });  



