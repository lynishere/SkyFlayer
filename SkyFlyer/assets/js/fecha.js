let indiceCarrusel = 0;
    const maxSeleccionadas = 2;
    let fechasSeleccionadas = [];

    function moverCarrusel(direccion) {
            const items = document.querySelectorAll('.carousel-item');
            items[indiceCarrusel].style.display = 'none';
            indiceCarrusel = (indiceCarrusel + direccion + items.length) % items.length;
            items[indiceCarrusel].style.display = 'block';
    }

    function generarCalendario(meses, opciones = {}) { 
        const {
            primerDiaSemana = 'L',
            idioma = 'es'
        } = opciones;

        const diasSemanaES = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
        const diasSemanaEN = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
        const diasSemana = idioma === 'es' ? diasSemanaES : diasSemanaEN;

        meses.forEach((mes, index) => {
            const { año, mes: numeroMes } = mes;
            const contenedorId = `calendario${index + 1}`;
            const contenedor = document.getElementById(contenedorId);

            if (!contenedor) return;

            contenedor.innerHTML = '';
            const primerDia = new Date(año, numeroMes - 1, 1).getDay();
            const ultimoDia = new Date(año, numeroMes, 0).getDate();

            let calendarioHTML = `
                <table>
                    <thead>
                        <tr>
                            ${diasSemana.map(dia => `<th>${dia}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>`;

            let contador = (primerDia - (primerDiaSemana === 'D' ? 0 : 1) + 7) % 7;
            for (let i = 0; i < contador; i++) {
                calendarioHTML += `<td></td>`;
            }

            for (let i = 1; i <= ultimoDia; i++) {
                const fecha = new Date(año, numeroMes - 1, i);
                calendarioHTML += `<td data-fecha="${fecha.toISOString()}">
                    <button onclick="seleccionarFecha('${fecha.toISOString()}', this)">${i}</button>
                </td>`;
                contador++;
                if (contador % 7 === 0) {
                    calendarioHTML += '</tr><tr>';
                }
            }

            while (contador % 7 !== 0) {
                calendarioHTML += '<td></td>';
                contador++;
            }

            calendarioHTML += '</tr></tbody></table>';
            contenedor.innerHTML = calendarioHTML;
        });
    }

    function seleccionarFecha(fecha, boton) {
        const index = fechasSeleccionadas.indexOf(fecha);

        if (index === -1 && fechasSeleccionadas.length < maxSeleccionadas) {
            fechasSeleccionadas.push(fecha);
            boton.classList.add('seleccionado');
            agregarBotonEliminar(boton);
        } else if (index !== -1) {
            fechasSeleccionadas.splice(index, 1);
            boton.classList.remove('seleccionado');
            boton.querySelector('.boton-eliminar').remove();
        }

        if (fechasSeleccionadas.length < 1) {
            alert('Debes seleccionar al menos una fecha.');
        }

        console.log('Fechas seleccionadas:', fechasSeleccionadas);
    }

    function agregarBotonEliminar(boton) {
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'x';
        botonEliminar.classList.add('boton-eliminar');
        botonEliminar.onclick = (e) => {
            e.stopPropagation();
            seleccionarFecha(boton.parentElement.dataset.fecha, boton);
        };
        boton.appendChild(botonEliminar);
    }

    const meses = [
        { año: 2024, mes: 10 },
        { año: 2024, mes: 11 },
        { año: 2024, mes: 12 },
        { año: 2025, mes: 1 }
    ];
    generarCalendario(meses, { idioma: 'es' });