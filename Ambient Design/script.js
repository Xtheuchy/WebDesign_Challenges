const swiper = new Swiper('.swiper', {
    loop: true, // Hace que el slider sea infinito
    autoplay: {
      delay: 3000, // Cambia automáticamente cada 3 segundos
      disableOnInteraction: false, // No detiene el autoplay al interactuar
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Permite hacer clic en los puntos
    },
    speed: 500, // Velocidad de la transición entre slides
  });
  