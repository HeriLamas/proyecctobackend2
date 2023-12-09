document.addEventListener('DOMContentLoaded', function () {
    const carouselContainer = document.getElementById('carousel-container');

    // Array de nombres de archivo de imágenes
    const imageNames = [
        'pc2.jpeg',
        'pc3.webp',
        'pc4.jpeg',
        'pc5.jpeg'
        // Agrega más nombres de archivo según sea necesario
    ];

    // Función para cargar las imágenes en el carrusel
    function loadImages() {
        imageNames.forEach(imageName => {
            const imgElement = document.createElement('img');
            imgElement.src = 'assets/images/' + imageName; // Ruta completa de la imagen
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

