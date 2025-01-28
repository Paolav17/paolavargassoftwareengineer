const menu = document.querySelectorAll('.about__nav-list .about__link');
const contentSections = document.querySelectorAll('section');

menu.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Obtener el ID del contenido objetivo desde el atributo href
        const targetContenidoId = e.currentTarget.getAttribute('href').substring(1);

        // Buscar la sección objetivo
        const targetContenido = document.getElementById(targetContenidoId);

        if (targetContenido) {
            // Ocultar todas las secciones
            contentSections.forEach(section => {
                section.style.display = 'none';
            });

            // Mostrar la sección objetivo
            targetContenido.style.display = 'block';
        } else {
            console.error(`Sección con ID "${targetContenidoId}" no encontrada.`);
        }
    });
});
