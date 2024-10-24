const days = document.querySelectorAll('.day');
const today = new Date();
const currentDate = today.getDate();
const currentMonth = today.getMonth(); // Octubre es 9 y Noviembre es 10
const currentYear = today.getFullYear();

// Recorrer los días y deshabilitar los que ya pasaron
days.forEach((day, index) => {
    const dayNumber = parseInt(day.textContent);
    const monthIndex = day.closest('.month').id === 'october' ? 21 : 31;

    // Verificar si la fecha ha pasado
    if (currentYear === today.getFullYear() && monthIndex === currentMonth && dayNumber < currentDate) {
        day.classList.add('disabled');
        day.style.cursor = 'not-allowed'; // Cambiar el cursor para indicar que está deshabilitado
    } else {
        day.addEventListener('mouseenter', () => {
            if (!day.classList.contains('disabled')) {
                day.style.backgroundColor = '#e0e0e0';
            }
        });

        day.addEventListener('mouseleave', () => {
            if (!day.classList.contains('disabled') && !day.classList.contains('selected')) {
                day.style.backgroundColor = '';
            }
        });

        day.addEventListener('click', () => {
            if (!day.classList.contains('disabled')) {
                days.forEach(d => d.classList.remove('selected'));
                day.classList.add('selected');
            }
        });
    }
});
