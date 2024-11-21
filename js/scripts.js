document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Me pondré en contacto pronto.');
    this.reset(); // limpiar formulario despues de enviar

});

// botón de menú y la lista de navegación
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// evento de clic al botón para mostrar/ocultar el menú
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
