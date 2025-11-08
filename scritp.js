// Base de datos de productos
const productos = [
    // Ojos
    {
        id: 1,
        nombre: "Tom Ford Eye Color Quad",
        descripcion: "Paleta de cuatro sombras de alta pigmentación",
        precio: 658.35,
        categoria: "ojos",
        icono: "👁️"
    },
    {
        id: 2,
        nombre: "Charlotte Tilbury Luxury Eye Palette",
        descripcion: "Sombras elegantes y fáciles de difuminar",
        precio: 381.15,
        categoria: "ojos",
        icono: "✨"
    },
    {
        id: 3,
        nombre: "Urban Decay Naked Palette",
        descripcion: "Paleta de tonos neutros versátil",
        precio: 346.5,
        categoria: "ojos",
        icono: "🎨"
    },
    {
        id: 4,
        nombre: "MAC Eye Shadow Palette",
        descripcion: "Sombras de alta calidad, muy usadas por maquilladores",
        precio: 277.2,
        categoria: "ojos",
        icono: "💄"
    },
    {
        id: 5,
        nombre: "e.l.f. Bite-Size Eyeshadow Palette",
        descripcion: "Mini paleta económica y práctica",
        precio: 55.44,
        categoria: "ojos",
        icono: "🌈"
    },
    {
        id: 6,
        nombre: "Maybelline Lash Sensational",
        descripcion: "Máscara de pestañas de efecto abanico",
        precio: 83.16,
        categoria: "ojos",
        icono: "👁️"
    },
    // Labios
    {
        id: 7,
        nombre: "Charlotte Tilbury Matte Revolution - Pillow Talk",
        descripcion: "Labial mate suave color nude rosado",
        precio: 235.62,
        categoria: "labios",
        icono: "💋"
    },
    {
        id: 8,
        nombre: "Dior Rouge Dior",
        descripcion: "Labial de lujo con varios acabados",
        precio: 277.2,
        categoria: "labios",
        icono: "💄"
    },
    {
        id: 9,
        nombre: "MAC Retro Matte Lipstick",
        descripcion: "Labial icónico de larga duración",
        precio: 138.6,
        categoria: "labios",
        icono: "💋"
    },
    {
        id: 10,
        nombre: "NYX Soft Matte Lip Cream",
        descripcion: "Labial líquido de acabado mate aterciopelado",
        precio: 55.44,
        categoria: "labios",
        icono: "💄"
    },
    {
        id: 11,
        nombre: "Maybelline SuperStay Matte Ink",
        descripcion: "Labial líquido de larga duración",
        precio: 69.3,
        categoria: "labios",
        icono: "💋"
    },
    // Rostro
    {
        id: 12,
        nombre: "NARS Radiant Creamy Concealer",
        descripcion: "Corrector de cobertura media a alta con acabado luminoso",
        precio: 242.55,
        categoria: "rostro",
        icono: "✨"
    },
    {
        id: 13,
        nombre: "Maybelline Fit Me Concealer",
        descripcion: "Corrector natural y económico",
        precio: 55.44,
        categoria: "rostro",
        icono: "💫"
    },
    {
        id: 14,
        nombre: "Estée Lauder Double Wear Foundation",
        descripcion: "Base de larga duración",
        precio: 311.85,
        categoria: "rostro",
        icono: "🌟"
    },
    {
        id: 15,
        nombre: "L'Oréal True Match Foundation",
        descripcion: "Base ligera con buen acabado natural",
        precio: 83.16,
        categoria: "rostro",
        icono: "✨"
    },
    {
        id: 16,
        nombre: "NARS Blush - Orgasm",
        descripcion: "Rubor icónico de tono durazno rosado",
        precio: 207.9,
        categoria: "rostro",
        icono: "🌸"
    },
    {
        id: 17,
        nombre: "Milani Baked Blush",
        descripcion: "Rubor luminoso y económico",
        precio: 69.3,
        categoria: "rostro",
        icono: "🌺"
    },
    {
        id: 18,
        nombre: "e.l.f. Blush",
        descripcion: "Rubor básico y accesible",
        precio: 34.65,
        categoria: "rostro",
        icono: "🌷"
    },
    // Sombras
    {
        id: 19,
        nombre: "Tom Ford / Natasha Denona Paleta",
        descripcion: "Sombras premium de alta calidad",
        precio: 554.4,
        categoria: "sombras",
        icono: "🎨"
    },
    {
        id: 20,
        nombre: "Too Faced Chocolate Bar",
        descripcion: "Paleta con tonos cálidos y neutros",
        precio: 311.85,
        categoria: "sombras",
        icono: "🍫"
    },
    {
        id: 21,
        nombre: "Wet n Wild - Rose in the Air",
        descripcion: "Paleta económica de buena pigmentación",
        precio: 69.3,
        categoria: "sombras",
        icono: "🌹"
    },
    // Perfumes
    {
        id: 22,
        nombre: "Jo Malone London - English Pear & Freesia",
        descripcion: "Fragancia fresca y elegante",
        precio: 831.6,
        categoria: "perfumes",
        icono: "🌸"
    },
    {
        id: 23,
        nombre: "Tom Ford Black Orchid",
        descripcion: "Perfume intenso y sofisticado",
        precio: 900.9,
        categoria: "perfumes",
        icono: "🖤"
    },
    {
        id: 24,
        nombre: "Marc Jacobs Daisy",
        descripcion: "Perfume floral suave y juvenil",
        precio: 623.7,
        categoria: "perfumes",
        icono: "🌼"
    },
    {
        id: 25,
        nombre: "Zara Perfume Collection",
        descripcion: "Perfumes accesibles inspirados en marcas de lujo",
        precio: 138.6,
        categoria: "perfumes",
        icono: "💐"
    }
];

// Carrito de compras
let carrito = [];

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos(productos);
    configurarFiltros();
    configurarCarrito();
    cargarCarritoDelLocalStorage();
});

// Mostrar productos en el grid
function mostrarProductos(productosAMostrar) {
    const grid = document.getElementById('productosGrid');
    grid.innerHTML = '';

    productosAMostrar.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.setAttribute('data-categoria', producto.categoria);
        
        card.innerHTML = `
            <div class="producto-imagen">${producto.icono}</div>
            <div class="producto-info">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <div class="producto-precio">Bs ${producto.precio.toFixed(2)}</div>
                <button class="btn-agregar" onclick="agregarAlCarrito(${producto.id})">
                    Agregar al Carrito
                </button>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Configurar filtros de categorías
function configurarFiltros() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Actualizar botón activo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const categoria = button.getAttribute('data-category');
            
            if (categoria === 'todos') {
                mostrarProductos(productos);
            } else {
                const productosFiltrados = productos.filter(p => p.categoria === categoria);
                mostrarProductos(productosFiltrados);
            }
        });
    });
}

// Agregar producto al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    const itemExistente = carrito.find(item => item.id === id);
    
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }
    
    actualizarCarrito();
    guardarCarritoEnLocalStorage();
    
    Swal.fire({
        title: '¡Agregado!',
        text: `${producto.nombre} fue agregado al carrito`,
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
    });
}

// Actualizar visualización del carrito
function actualizarCarrito() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    cartCount.textContent = totalItems;
    
    mostrarItemsCarrito();
}

// Mostrar items del carrito en el modal
function mostrarItemsCarrito() {
    const carritoItems = document.getElementById('carritoItems');
    const totalCarrito = document.getElementById('totalCarrito');
    
    if (carrito.length === 0) {
        carritoItems.innerHTML = '<div class="carrito-vacio"><p>Tu carrito está vacío</p></div>';
        totalCarrito.textContent = 'Bs 0.00';
        return;
    }
    
    carritoItems.innerHTML = '';
    let total = 0;
    
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'carrito-item';
        itemDiv.innerHTML = `
            <div class="carrito-item-info">
                <h4>${item.nombre}</h4>
                <div class="carrito-item-precio">Bs ${item.precio.toFixed(2)}</div>
            </div>
            <div class="carrito-item-cantidad">
                <button class="btn-cantidad" onclick="cambiarCantidad(${item.id}, -1)">-</button>
                <span>${item.cantidad}</span>
                <button class="btn-cantidad" onclick="cambiarCantidad(${item.id}, 1)">+</button>
            </div>
            <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})">Eliminar</button>
        `;
        
        carritoItems.appendChild(itemDiv);
    });
    
    totalCarrito.textContent = `Bs ${total.toFixed(2)}`;
}

// Cambiar cantidad de un producto
function cambiarCantidad(id, cambio) {
    const item = carrito.find(item => item.id === id);
    
    if (item) {
        item.cantidad += cambio;
        
        if (item.cantidad <= 0) {
            eliminarDelCarrito(id);
        } else {
            actualizarCarrito();
            guardarCarritoEnLocalStorage();
        }
    }
}

// Eliminar producto del carrito
function eliminarDelCarrito(id) {
    const producto = carrito.find(item => item.id === id);
    
    Swal.fire({
        title: '¿Estás seguro?',
        text: `¿Deseas eliminar ${producto.nombre} del carrito?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e91e63',
        cancelButtonColor: '#9e9e9e',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = carrito.filter(item => item.id !== id);
            actualizarCarrito();
            guardarCarritoEnLocalStorage();
            
            Swal.fire({
                title: 'Eliminado',
                text: 'El producto ha sido eliminado del carrito',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
}

// Configurar modal del carrito
function configurarCarrito() {
    const modal = document.getElementById('carritoModal');
    const cartBtn = document.querySelector('.cart-btn');
    const closeBtn = document.querySelector('.close');
    const vaciarBtn = document.getElementById('vaciarCarrito');
    const comprarBtn = document.getElementById('realizarCompra');
    
    cartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        mostrarItemsCarrito();
    });
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    vaciarBtn.addEventListener('click', vaciarCarrito);
    comprarBtn.addEventListener('click', realizarPedidoWhatsApp);
}

// Vaciar carrito
function vaciarCarrito() {
    if (carrito.length === 0) {
        Swal.fire({
            title: 'Carrito vacío',
            text: 'No hay productos en el carrito',
            icon: 'info'
        });
        return;
    }
    
    Swal.fire({
        title: '¿Vaciar carrito?',
        text: 'Se eliminarán todos los productos del carrito',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#e91e63',
        cancelButtonColor: '#9e9e9e',
        confirmButtonText: 'Sí, vaciar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = [];
            actualizarCarrito();
            guardarCarritoEnLocalStorage();
            
            Swal.fire({
                title: 'Carrito vaciado',
                text: 'Todos los productos fueron eliminados',
                icon: 'success',
                timer: 1500,
                showConfirmButton: false
            });
        }
    });
}

// Realizar pedido por WhatsApp
function realizarPedidoWhatsApp() {
    if (carrito.length === 0) {
        Swal.fire({
            title: 'Carrito vacío',
            text: 'Agrega productos antes de realizar el pedido',
            icon: 'warning'
        });
        return;
    }
    
    let mensaje = '¡Hola! Me gustaría realizar el siguiente pedido:\n\n';
    let total = 0;
    
    carrito.forEach(item => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        mensaje += `• ${item.nombre}\n`;
        mensaje += `  Cantidad: ${item.cantidad}\n`;
        mensaje += `  Precio unitario: Bs ${item.precio.toFixed(2)}\n`;
        mensaje += `  Subtotal: Bs ${subtotal.toFixed(2)}\n\n`;
    });
    
    mensaje += `*TOTAL: Bs ${total.toFixed(2)}*\n\n`;
    mensaje += '¿Podrían confirmar la disponibilidad y el método de entrega?';
    
    // Reemplaza este número con tu número de WhatsApp (código de país + número sin espacios ni símbolos)
    const numeroWhatsApp = '59168946827'; // Ejemplo: Bolivia
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
    
    Swal.fire({
        title: '¿Realizar pedido?',
        text: 'Se abrirá WhatsApp para completar tu pedido',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#25d366',
        cancelButtonColor: '#9e9e9e',
        confirmButtonText: 'Sí, continuar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            window.open(urlWhatsApp, '_blank');
            
            Swal.fire({
                title: '¡Gracias por tu pedido!',
                text: 'Te redirigimos a WhatsApp para completar la compra',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
            });
        }
    });
}

// Guardar carrito en localStorage
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carritoGlamour', JSON.stringify(carrito));
}

// Cargar carrito desde localStorage
function cargarCarritoDelLocalStorage() {
    const carritoGuardado = localStorage.getItem('carritoGlamour');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarrito();
    }
}