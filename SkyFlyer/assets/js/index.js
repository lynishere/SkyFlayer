 // Obtener los elementos de origen y destino
const origenSelect = document.querySelector('#origen select');
const destinoSelect = document.querySelector('#destino select');

// Función para actualizar las opciones de destino
function updateOptions(selectedOption, targetSelect) {
    // Restaurar todas las opciones en el select de destino
    [...targetSelect.options].forEach(option => {
        option.hidden = false;
    });

    // Ocultar la opción seleccionada en origen del select de destino y viceversa
    if (selectedOption) {
        const optionToHide = [...targetSelect.options].find(option => option.value === selectedOption.value);
        if (optionToHide) {
            optionToHide.hidden = true;
        }
    }
}

// Escuchar cambios en origen
origenSelect.addEventListener('change', (e) => {
    updateOptions(e.target.selectedOptions[0], destinoSelect);
});

// Escuchar cambios en destino
destinoSelect.addEventListener('change', (e) => {
    updateOptions(e.target.selectedOptions[0], origenSelect);
});