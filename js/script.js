document.addEventListener('DOMContentLoaded', () => {
    // --- Lluvia de Corazones (Mantenido) ---
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 4 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';

        const container = document.querySelector('.hearts-container');
        if (container) {
            container.appendChild(heart);
        } else {
            document.body.appendChild(heart);
        }

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
    setInterval(createHeart, 400);

    // --- Lluvia de Fotos ---
    const photoContainer = document.querySelector('.falling-photos-container');

    // Lista de todas las imágenes disponibles
    const imageList = [
        'carrusel1.jpeg', 'carrusel2.jpeg', 'carrusel3.jpeg', 'carrusel4.jpeg',
        'carrusel5.jpeg', 'carrusel6.jpeg', 'carrusel7.jpeg', 'carrusel8.jpeg',
        'carrusel9.jpeg', 'carrusel10.jpeg', 'carrusel11.jpeg', 'carrusel12.jpeg',
        'carrusel13.jpeg',
        'WhatsApp Image 2026-01-04 at 16.02.35 (1).jpeg',
        'WhatsApp Image 2026-01-04 at 16.02.35 (2).jpeg',
        'WhatsApp Image 2026-01-04 at 16.02.36 (1).jpeg',
        'WhatsApp Image 2026-01-04 at 16.02.36 (2).jpeg',
        'WhatsApp Image 2026-01-04 at 16.02.36.jpeg'
    ];

    function createFallingPhoto() {
        if (!photoContainer) return;

        const photo = document.createElement('img');
        photo.classList.add('falling-photo');

        // Seleccionar una imagen al azar de la lista
        const randomImage = imageList[Math.floor(Math.random() * imageList.length)];
        photo.src = `imagenes_romanticas/${randomImage}`;
        photo.alt = "Recuerdo romántico";

        // Posición horizontal aleatoria
        photo.style.left = Math.random() * 90 + 'vw'; // Evitar que se salga demasiado por la derecha

        // Duración de la caída aleatoria (más lento que los corazones para que se vean bien)
        const duration = Math.random() * 10 + 10; // Entre 10 y 20 segundos
        photo.style.animationName = 'fallDown';
        photo.style.animationDuration = duration + 's';
        photo.style.animationTimingFunction = 'linear';

        // Tamaño aleatorio
        const width = Math.random() * 100 + 100; // Entre 100px y 200px
        photo.style.width = width + 'px';

        photoContainer.appendChild(photo);

        // Eliminar después de que termine la animación
        setTimeout(() => {
            photo.remove();
        }, duration * 1000);
    }

    // Crear una foto nueva cada cierto tiempo
    if (photoContainer) {
        setInterval(createFallingPhoto, 2000); // Una foto cada 2 segundos
    }
});