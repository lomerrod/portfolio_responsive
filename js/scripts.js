document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por tu mensaje. Me pondré en contacto pronto.');
    this.reset(); // Limpiar formulario después de enviar
});