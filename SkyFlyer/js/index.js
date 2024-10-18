const botonLogin = document.getElementById("botonLogin");
const botonCerrar = document.getElementById("botonCerrarSesion");

function AdminActivo(){
    let AdminActivo = localStorage.getItem("Administrador");
    if(AdminActivo == "ACTIVO"){
        botonLogin.style.display = "none";
        botonCerrar.style.display = "block";
    }
}
AdminActivo();





let btnCerrarSesion = document.getElementById("botonCerrarSesion");

btnCerrarSesion.onclick = (e) =>{
    e.preventDefault()
    botonCerrar.style.display = "none";
    botonLogin.style.display = "block";
    localStorage.setItem("usuarioInicioSesion", true);
};


// para ir haci otra pagina:
document.getElementById("Buscar").addEventListener("click"), function(){
window.location.href="./pages/EFecha.html"
}




//OPCIONES PARA EL PASAJERO
let adultCount = 1;
let childCount = 0;
let infantCount = 0;

function toggleDropdown() {
    const dropdown = document.getElementById('dropdown-passenger');
    dropdown.classList.toggle('dropdown-active');
}

function increment(type) {
    if (type === 'adult') {
        adultCount++;
    } else if (type === 'child') {
        childCount++;
    } else if (type === 'infant') {
        infantCount++;
    }
    updatePassengerDisplay();
}

function decrement(type) {
    if (type === 'adult' && adultCount > 1) {
        adultCount--;
    } else if (type === 'child' && childCount > 0) {
        childCount--;
    } else if (type === 'infant' && infantCount > 0) {
        infantCount--;
    }
    updatePassengerDisplay();
}

function updatePassengerDisplay() {
    document.getElementById('adult-count').textContent = adultCount;
    document.getElementById('child-count').textContent = childCount;
    document.getElementById('infant-count').textContent = infantCount;

    let passengerText = `${adultCount} Adulto`;
    if (childCount > 0) {
        passengerText += `, ${childCount} Niño`;
    }
    if (infantCount > 0) {
        passengerText += `, ${infantCount} Bebé`;
    }
    document.getElementById('passenger-text').textContent = passengerText;
}

function applyPassengerSelection() {
    toggleDropdown();
}
