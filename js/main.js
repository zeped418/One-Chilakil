// ============   LOAD  =============
let desayunos = [

    {
        nombre: "Chilaquiles con carne <img src='./src/img/luffy-eyes.png' alt='luffy' width='40px'>" ,
        precio: "65.00",
        texto: `
                Acompaña tus deliciosos chilaquiles con una de las siguientes opciones:
                <div>
                    <div class="carne">
                        <p>🥩 Bistec</p>
                        <p class= "gramos">100 g <p>
                    </div>                 

                    <div class="carne">
                        <p>🍖 Costilla</p>
                        <p class= "gramos">100 g <p>
                    </div>

                    <div class="carne">
                        <p>🐥 Pollo</p>
                        <p class= "gramos">100 g <p>
                    </div>

                    <div class="carne">
                        <p>🍳 Huevo</p>
                        <p class= "gramos">2 pz<p>
                    </div>

                </div>
        `,
        imagen: "./src/products/carne.jpg",
        alt: "prueba 2"
    },
    {
        nombre: "Chilaquiles Sencillos 👌",
        precio: "45.00",
        texto: " Deléitate con tortillas crujientes bañadas en una salsa exquisita, coronadas con queso y acompañadas de un toque fresco de crema, cilantro y cebolla.",
        imagen: "./src/products/sencillos.jpg",
        alt: "prueba 1"
    }

];

let bebidas = [
    {
        nombre: "Coca-cola 355 ml",
        precio: "20.00",
        texto: "Sumérgete en el sabor clásico que te revitaliza en cualquier momento y lugar.<br>¡Refresca tu sed hoy!",
        imagen: "./src/products/franky-super-coca.png",
        alt: "prueba 1"
    },

    {
        nombre: "Leche Hershey's",
        precio: "15.00",
        texto: "Disfruta del placer del chocolate con la Leche Hershey's. Su sabor intenso te envolverán en dulce deleite.",
        imagen: "./src/products/hersheys.png",
        alt: "prueba 2"
    },

    {
        nombre: "Agua Bonafont 1L",
        precio: "15.00",
        texto: "Refresca tu sed con la inigualable pureza de Agua Bonafont en su presentación de 1 litro. Hidratación para todos los guerreros.",
        imagen: "./src/products/bonafont.png",
        alt: "prueba 3"
    }
];

let snacks = [
    {
        nombre: "Cheetos",
        precio: "16.00",
        texto: "¡Siente el fuego con Cheetos Flaming Hot! Crujientes, picantes y adictivos. Perfectos para los amantes del sabor intenso.",
        imagen: "./src/products/cheetos.png",
        alt: "prueba 1"
    },

    {
        nombre: "KitKat",
        precio: "20.00",
        texto: "La pausa perfecta en tu día. Delicioso y crujiente, un placer irresistible en cada bocado. ¡Haz clutch a tu antojo!",
        imagen: "./src/products/kitkat.png",
        alt: "prueba 2"
    },

    {
        nombre: "Gomitas",
        precio: "20.00",
        texto: "Los panditas son los compañeros perfectos, como Zoro Roronoa. Dulzura y determinación en cada mordisco.",
        imagen: "./src/products/panditas.png",
        alt: "prueba 3"
    }
];

window.addEventListener("load", function (event) {
    event.preventDefault();

    // obtener el ancho de pantalla
    const ancho = document.documentElement.clientWidth;


    // ++++++++++++++++++ Carruseles de productos ++++++++++++++++++++++++

    let carruseles = this.document.querySelectorAll(".carousel-inner");

    let carousel_desayunos = document.getElementById('carousel-desayunos');

    let carousel_bebidas = document.getElementById('carousel-bebidas');

    let carousel_snacks = document.getElementById('carousel-snacks');

    // Recorrido por cada carrusel para agregar por tipo de productos los elementos de su arreglo correspondiente
    for (let j = 1; j < carruseles.length; j++) {

        let producto = [];
        let carousel_producto;

        if (j === 1) {
            producto = desayunos;
            carousel_producto = carousel_desayunos;
        } else if (j === 2) {
            producto = bebidas;
            carousel_producto = carousel_bebidas;
        } else if (j === 3) {
            producto = snacks;
            carousel_producto = carousel_snacks;
        }

        //Para cada tipo de producto se agregará en una card en html, tomando cada objeto de su arreglo correspondiente. El primer producto deberá tener la clase active 
        for (let i = 0; i < producto.length; i++) {
            if (i === 0) {
                carousel_producto.insertAdjacentHTML("afterbegin",
                    `
                <!-- ========== Slide 1 ========== -->
                <div class="carousel-item active">
                    <p class="contador-opciones">Opc. 1 de ${producto.length}</p>
                    <div class="card card-product mx-auto">
                        <div class="card-header">
                            ${producto[i].nombre}
                        </div>
                        <div class="img-producto-container">
                            <img src= ${producto[i].imagen} class="img-producto" alt=${producto[i].alt}>
                        </div>
                        <div class="card-body">
                            <p class="precio mt-3 mb-1 text-center">
                                $ ${producto[i].precio}
                            </p>
                            <p class="card-text mt-3 mb-3">
                                ${producto[i].texto}
                            </p>
                        </div>
                    </div>
                </div>
            `);
            } else {
                carousel_producto.insertAdjacentHTML("beforeend",
                    `
            <!-- ========== Slide ${i + 1} ========== -->
            <div class="carousel-item">
            <p class="contador-opciones">Opc. ${i + 1} de ${producto.length}</p>
                <div class="card card-product mx-auto">
                    <div class="card-header">
                        ${producto[i].nombre}
                    </div>
                    <div class="img-producto-container">
                        <img src= ${producto[i].imagen} class="img-producto" alt=${producto[i].alt}>
                    </div>
                        <div class="card-body">
                        <p class="precio mt-3 mb-1 text-center">
                            $ ${producto[i].precio}
                        </p>
                        <p class="card-text mt-3 mb-3">
                            ${producto[i].texto}
                        </p>
                    </div>
                </div>
            </div>
            `)
            };
        };
    }

    //Inserta la estructura de los botones de control de cad carrusel

    for (let i = 2; i < carruseles.length; i++) {
        carruseles[i].insertAdjacentHTML("afterend", `
        <!-- ========== Controls ${[i-1]} ========== -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${[i-1]}"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#carousel-${[i-1]}"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        `);
    }

    //Función para reutilizar código en cada producto
    function createProductCard(container, products, containerId) {
        let cols = products.length;
        if (cols >= 4) {
            cols = 4;
        }
    
        container.insertAdjacentHTML("afterbegin", `
            <div class="row row-cols-1 row-cols-md-${cols} container mx-auto justify-content-around" id="${containerId}">
            </div>
        `);
    
        const productContainer = document.getElementById(containerId);
        products.forEach((product) => {
            const productItemHTML = `
                <div class="col">
                    <div class="card card-desktop mx-auto mt-3 mb-3">
                        <div class="card-header">
                            ${product.nombre}
                        </div>
                        <div class="img-producto-container">
                            <img src="${product.imagen}" class="img-producto" alt="${product.alt}">
                        </div>
                        <div class="card-body">
                            <p class="precio mt-3 mb-1 text-center">
                                $ ${product.precio}
                            </p>
                            <p class="card-text mt-3 mb-3">
                                ${product.texto}
                            </p>
                        </div>
                    </div>
                </div>
            `;
    
            productContainer.insertAdjacentHTML("beforeend", productItemHTML);
        });
    }
    
    // Llama a la función para crear las cards de desayunos de escritorio
    createProductCard(
        document.getElementById('Desayunos-escritorio-container'),
        desayunos,
        'Desayunos-escritorio'
    );
    
    // Llama a la función para crear las cards de bebidas de escritorio
    createProductCard(
        document.getElementById('Bebidas-escritorio-container'),
        bebidas,
        'Bebidas-escritorio'
    );
    
    // Llama a la función para crear las cards de snacks de escritorio
    createProductCard(
        document.getElementById('Snacks-escritorio-container'),
        snacks,
        'Snacks-escritorio'
    );

    //Saludo de bienvenida en la página
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        title: '¡Hola, Bienvenid@! 😃'
    })

});

// Barra de navegación de móviles
const menu_button = document.getElementById('menu-button');

// Agregar event listeners para cerrar el menú al hacer clic en un elemento de navegación
const nav_link = document.querySelectorAll(".nav-link-mobile"); // Enlaces de navegación
nav_link.forEach(link => {
    link.addEventListener("click", () => {
        menu_button.click();
    });
});