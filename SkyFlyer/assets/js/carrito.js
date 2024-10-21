function borrarCarrito(){
    let productosAñadidos = document.getElementById("container-carrito");
    let contenedorBTN = document.getElementById("contenedorBotones");
    let mensajeVacio = document.getElementById("mensaje");

    if(localStorage.getItem("productosAñadidos") == null){
        productosAñadidos.style.display = "none";
        contenedorBTN.style.display = "none";
    }
    else{
        let cont = 0;
        let listaAñadidos = [];
        function cartas(){
            listaAñadidos = JSON.parse(localStorage.getItem("productosAñadidos"));

            let carta= "";
            const contenedorprodAñadidos = document.getElementById("productosAñadidos");
            listaAñadidos.forEach((producto, index) =>{
                carta += `<div class="card" id="producto${index}" style="width: 18rem;">`;
                    carta += `<div class="card-body">`;
                        carta += `<h5 class="card-title">${producto.nombre}</h5>`;
                        carta += `<p class="card-text">$${producto.precio}</p>`;
                        carta += `<p class="card-text2">Stock: ${producto.stock}</p>`;
                    carta += `</div>`;
                carta += `</div>`;

                cont = index;
            });
            
            contenedorprodAñadidos.innerHTML = carta;
        }

        document.onload = cartas();
        mensajeVacio.style.display = "none";
        productosAñadidos.style.display = "block";
        contenedorBTN.style.display = "block";
    }
}

borrarCarrito();



function borrarCarritoBTN(){
    let productosAñadidos = document.getElementById("container-carrito");
    let contenedorBTN = document.getElementById("contenedorBotones");
    let mensajeVacio = document.getElementById("mensaje");

    mensajeVacio.style.display = "block";
    productosAñadidos.style.display = "none";
    contenedorBTN.style.display = "none";
}



let botonF = document.getElementById("botonFinalizar");
let botonV = document.getElementById("botonVaciar");

botonF.onclick = (e) =>{
    e.preventDefault();
    Swal.fire({
        title: '¡GRACIAS POR SU COMPRA!',
    });
    
    localStorage.removeItem("productosAñadidos");

    borrarCarritoBTN()    
}

botonV.onclick = (e) =>{
    e.preventDefault()

    localStorage.removeItem("productosAñadidos");

    borrarCarritoBTN()
}



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
