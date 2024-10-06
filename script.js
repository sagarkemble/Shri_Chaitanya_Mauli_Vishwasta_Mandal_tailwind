// function showlinks(){
//     const links=document.querySelector('.links');
//     const hamburger=document.querySelector('.hamburger');
//     const crossicon=document.querySelector('.crossicon');
//     links.style.display='initial';
//     hamburger.style.display='none';
//     crossicon.style.display='initial';
//     inks.classList.add('animate-slidedown');
//   };
//   function hidelinks(){
//     const links=document.querySelector('.links');
//     const hamburger=document.querySelector('.hamburger');
//     const crossicon=document.querySelector('.crossicon');
//     links.style.display='none';
//     hamburger.style.display='initial';
//     crossicon.style.display='none';

//   };
function showlinks() {
  const links = document.querySelector('.links');
  const hamburger = document.querySelector('.hamburger');
  const crossicon = document.querySelector('.crossicon');
  
  if (links.style.maxHeight) {
      links.style.maxHeight = null; // Collapse if already expanded
  } else {
      links.style.maxHeight = links.scrollHeight + "px"; // Expand to full height
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
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 20,
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


