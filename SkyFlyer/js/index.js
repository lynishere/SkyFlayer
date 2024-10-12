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
