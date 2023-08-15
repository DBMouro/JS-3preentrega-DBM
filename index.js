const productosADonar = [
    {
        id: 1,
        nombre: "Alimento Excellent Maintenance Formula para perro cachorro todos los tamaños sabor mix en bolsa de 20 kg",
        Image: "../images/excellentpuppy.png",
        precio: 26000,
    },
    {
        id: 2,
        nombre: "Alimento Excellent Maintenance Formula para perro adulto todos los tamaños sabor mix en bolsa de 20 kg",
        Image: "../images/excellentadulto.png",
        precio: 20000,

    },
    {
        id: 3,
        nombre: "Collar De Perro Regulable Con Identificación Bordada 2 Cm",
        Image: "../images/CollarDePerro.png",
        precio: 2000,   
    },
    {
        id: 4,
        nombre: "Cama Para Perro Grande Colchoneta Antidesgarro",
        Image: "../images/camagrande.png",
        precio: 5000,
    },

    {
        id: 5,
        nombre: "Alimento Royal Canin Club Performance Adult para perro adulto todos los tamaños sabor mix en bolsa de 20 kg",
        Image: "../images/PerformanceAdult.png",
        precio: 16000,
    },
    {
        id: 6,
        nombre: "Old Prince Noveles Cordero Y Arroz Adulto X 18 Kg",
        Image: "../images/oldprince.png",
        precio: 15000,
    },
    {
        id: 7,
        nombre: "Abrigo Buzo De Peluche Corderito Para Perros",
        Image:"../images/abrigopeluche.png",
        precio: 6000,
    },
    {
        id: 8,
        nombre: "Collar Premium Perro Pro - Seguridad Identificación Bordado",
        Image:"../images/proseguridad.png",
        precio: 4000,
    },
]
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contenedor = document.querySelector("#contenedor-donaciones")
const donaciones = document.querySelector("#donaciones-total")
var donacionTotal = 0

productosADonar.forEach(p =>{
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
    <div class="row align-items-center justify-content-center d-flex">
        <div class="card mx-auto container align-items-center text-center justify-content-center col-12 col-md-6  col-xl-3">
            <div class="card__body text-center">
                <img class="card__img" src=${p.Image} alt="gatito en adopcion dulce">

                <p class="card__desc">${p.nombre}
                <ul><li>\$${p.precio}</li></ul>
                </p>

                <button class="card__btn badge  text-wrap" style="width: 7rem;" id="contenedor-${p.id}"></button>    
            </div>
        </div>
    </div>    
`
    
    
    const buttonAgregar = document.createElement("button");
    buttonAgregar.classList.add ("btn");
    buttonAgregar.innerText = "Agregar Donación";

    buttonAgregar.addEventListener("click",()=>{
        donacionTotal += p.precio
        carrito.push(p);
        localStorage.setItem("carrito",JSON.stringify(carrito));
        donaciones.innerHTML = `
        Total \$${donacionTotal}
        `
    })


    contenedor.append(div);
    const contenedorID = document.querySelector("#contenedor-" + p.id);
    contenedorID.appendChild(buttonAgregar);
})


