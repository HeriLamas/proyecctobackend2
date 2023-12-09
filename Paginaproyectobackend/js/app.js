// La funcionalidad de tu proyecto

document.addEventListener('DOMContentLoaded', function () {
  const carouselContainer = document.getElementById('carousel-container');

  // Array de URLs de imágenes (reemplázalo con tus propias URLs)
  const images = [
      'assets/images/logoBlanco.png',
      'imagen2.jpg',
      'imagen3.jpg',
      // Agrega más imágenes según sea necesario
  ];

  // Función para cargar las imágenes en el carrusel
  function loadImages() {
      images.forEach(imageUrl => {
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          carouselContainer.appendChild(imgElement);
      });
  }

  // Llama a la función para cargar imágenes
  loadImages();

  // Función para cambiar las imágenes en el carrusel
  function nextImage() {
      const firstImage = carouselContainer.children[0];
      carouselContainer.style.transition = 'transform 0.5s ease-in-out';
      carouselContainer.style.transform = 'translateX(-' + firstImage.clientWidth + 'px)';
      setTimeout(() => {
          carouselContainer.style.transition = 'none';
          carouselContainer.style.transform = 'translateX(0)';
          carouselContainer.appendChild(firstImage);
      }, 500);
  }

  // Llama a la función nextImage cada 3 segundos (puedes ajustar este intervalo)
  setInterval(nextImage, 3000);
});
