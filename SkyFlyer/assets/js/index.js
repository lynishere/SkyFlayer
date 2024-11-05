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





// para ir haci otra pagina:
document.getElementById("Buscar").addEventListener("click"), function(){
window.location.href="./pages/EFecha.html"
}




