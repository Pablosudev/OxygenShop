document.addEventListener('DOMContentLoaded', function (){
const swiper = new Swiper('.swiper', {
    
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
   
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });
})