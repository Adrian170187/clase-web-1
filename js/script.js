document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionar los elementos clave del DOM
    const carouselSlide = document.querySelector('.carousel-slide');
    const images = document.querySelectorAll('.carousel-slide img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Validación: Asegurarse de que el carrusel existe y tiene imágenes
    if (images.length === 0 || !carouselSlide) {
        console.error("No se pudieron encontrar el carrusel o las imágenes. Revisa el HTML.");
        return;
    }

    // 2. Variables de Control
    let counter = 0;
    
    // Obtener el ancho de una sola imagen. Esto es seguro dentro de DOMContentLoaded.
    const size = images[0].clientWidth; 

    // Posicionar el carrusel para mostrar la primera imagen.
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    // 3. Event Listeners para los Botones

    // Botón Siguiente (Next)
    nextBtn.addEventListener('click', () => {
        // Detener si es la última imagen
        if (counter >= images.length - 1) return;
        
        counter++;
        
        // Aplicar la transición y el desplazamiento
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    // Botón Anterior (Prev)
    prevBtn.addEventListener('click', () => {
        // Detener si es la primera imagen
        if (counter <= 0) return;
        
        counter--;
        
        // Aplicar la transición y el desplazamiento
        carouselSlide.style.transition = 'transform 0.5s ease-in-out';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });
});