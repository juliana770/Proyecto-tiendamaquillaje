# 💄 Glamour Store - Tienda de Maquillaje y Perfumes

![Version](https://img.shields.io/badge/version-1.0.0-pink)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Tienda en línea moderna y responsive para la venta de productos de maquillaje y perfumes de alta gama. Incluye catálogo completo, carrito de compras con persistencia y sistema de pedidos integrado con WhatsApp.

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Instalación](#-instalación)
- [Configuración](#-configuración)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Requerimientos Funcionales](#-requerimientos-funcionales)
- [Requerimientos No Funcionales](#-requerimientos-no-funcionales)
- [Uso](#-uso)
- [Capturas de Pantalla](#-capturas-de-pantalla)
- [Licencia](#-licencia)

## ✨ Características

- 🛍️ **Catálogo de Productos**: 25 productos organizados en 5 categorías
- 🔍 **Sistema de Filtros**: Filtrado dinámico por categorías
- 🛒 **Carrito de Compras**: Gestión completa del carrito con persistencia
- 💾 **LocalStorage**: Los productos se mantienen al recargar la página
- 📱 **Diseño Responsive**: Adaptable a todos los dispositivos
- 🎨 **Interfaz Moderna**: Diseño elegante con gradientes y animaciones
- 🚨 **SweetAlert2**: Alertas interactivas y atractivas
- 📲 **Integración WhatsApp**: Pedidos directos por WhatsApp Business
- ➕➖ **Control de Cantidad**: Incrementar/decrementar productos
- 🗑️ **Eliminar Productos**: Con confirmación de seguridad

## 🛠️ Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con Flexbox y Grid
- **JavaScript (Vanilla)**: Lógica de negocio sin frameworks
- **Font Awesome 6.0**: Iconografía
- **SweetAlert2**: Alertas personalizadas
- **WhatsApp Business API**: Integración de mensajería

## 📁 Estructura del Proyecto

```
glamour-store/
│
├── index.html          # Estructura principal HTML
├── styles.css          # Estilos y diseño responsive
├── script.js           # Lógica de negocio JavaScript
└── README.md           # Documentación del proyecto
```

### Descripción de Archivos

#### `index.html`
- Header con logo y navegación
- Sección hero con banner principal
- Filtros de categorías
- Grid de productos (generado dinámicamente)
- Modal del carrito de compras
- Footer con redes sociales

#### `styles.css`
- Variables CSS para colores y estilos
- Sistema de grid responsive
- Animaciones y transiciones
- Media queries para móviles y tablets
- Estilos para modal y alertas

#### `script.js`
- Base de datos de productos (25 productos)
- Funciones de carrito de compras
- Sistema de filtrado por categorías
- Integración con localStorage
- Generación de mensajes para WhatsApp
- Manejo de eventos y interacciones

## 📊 Requerimientos Funcionales

### RF-01: Visualización de Productos
**Descripción**: El sistema debe mostrar un catálogo de productos con información detallada.

**Criterios de Aceptación**:
- ✅ Mostrar 25 productos de maquillaje y perfumes
- ✅ Cada producto debe mostrar: nombre, descripción, precio e ícono
- ✅ Los precios deben estar en bolivianos (Bs)
- ✅ Los productos deben organizarse en un grid responsive

**Prioridad**: Alta

---

### RF-02: Sistema de Filtrado
**Descripción**: Permitir filtrar productos por categorías específicas.

**Criterios de Aceptación**:
- ✅ Filtros disponibles: Todos, Ojos, Labios, Rostro, Sombras, Perfumes
- ✅ Al seleccionar un filtro, mostrar solo productos de esa categoría
- ✅ Indicar visualmente el filtro activo
- ✅ El filtro "Todos" debe mostrar el catálogo completo

**Prioridad**: Alta

---

### RF-03: Agregar al Carrito
**Descripción**: Los usuarios deben poder agregar productos al carrito de compras.

**Criterios de Aceptación**:
- ✅ Botón "Agregar al Carrito" en cada producto
- ✅ Mostrar alerta de confirmación con SweetAlert2
- ✅ Actualizar contador del carrito en tiempo real
- ✅ Si el producto ya existe, incrementar cantidad

**Prioridad**: Alta

---

### RF-04: Gestión del Carrito
**Descripción**: Permitir visualizar y modificar los productos en el carrito.

**Criterios de Aceptación**:
- ✅ Ver lista completa de productos agregados
- ✅ Mostrar cantidad, precio unitario y subtotal
- ✅ Incrementar/decrementar cantidad con botones +/-
- ✅ Eliminar productos individuales con confirmación
- ✅ Vaciar carrito completo con confirmación
- ✅ Calcular y mostrar total en tiempo real

**Prioridad**: Alta

---

### RF-05: Persistencia de Datos
**Descripción**: El carrito debe mantener los productos al recargar la página.

**Criterios de Aceptación**:
- ✅ Guardar carrito en localStorage
- ✅ Recuperar carrito al cargar la página
- ✅ Mantener cantidades y productos seleccionados
- ✅ Sincronizar contador del carrito

**Prioridad**: Media

---

### RF-06: Integración con WhatsApp
**Descripción**: Generar pedido y enviarlo por WhatsApp Business.

**Criterios de Aceptación**:
- ✅ Botón "Realizar Pedido por WhatsApp"
- ✅ Generar mensaje formateado con productos, cantidades y total
- ✅ Abrir WhatsApp en nueva pestaña con mensaje prellenado
- ✅ Validar que el carrito no esté vacío
- ✅ Mostrar confirmación antes de enviar

**Prioridad**: Alta

---

### RF-07: Alertas y Notificaciones
**Descripción**: Informar al usuario sobre acciones realizadas.

**Criterios de Aceptación**:
- ✅ Alerta al agregar producto
- ✅ Confirmación al eliminar producto
- ✅ Confirmación al vaciar carrito
- ✅ Alerta si el carrito está vacío al comprar
- ✅ Confirmación al realizar pedido por WhatsApp
- ✅ Usar SweetAlert2 para todas las alertas

**Prioridad**: Media

---

### RF-08: Modal de Carrito
**Descripción**: Mostrar carrito en modal interactivo.

**Criterios de Aceptación**:
- ✅ Abrir modal al hacer clic en ícono del carrito
- ✅ Cerrar modal con botón X o clic fuera
- ✅ Mostrar mensaje si el carrito está vacío
- ✅ Scroll interno si hay muchos productos

**Prioridad**: Media

---

## 🔧 Requerimientos No Funcionales

### RNF-01: Rendimiento
**Descripción**: La aplicación debe cargar y responder rápidamente.

**Métricas**:
- ✅ Tiempo de carga inicial: < 2 segundos
- ✅ Tiempo de respuesta a interacciones: < 100ms
- ✅ Renderizado de productos: < 500ms
- ✅ Sin uso de librerías pesadas (solo CDN necesarios)

**Prioridad**: Alta

---

### RNF-02: Usabilidad
**Descripción**: Interfaz intuitiva y fácil de usar.

**Criterios**:
- ✅ Diseño minimalista y limpio
- ✅ Contraste adecuado de colores (WCAG AA)
- ✅ Botones con estados hover claramente visibles
- ✅ Iconos descriptivos (Font Awesome)
- ✅ Mensajes claros y concisos
- ✅ Flujo de compra en máximo 3 pasos

**Prioridad**: Alta

---


---

### RNF-04: Compatibilidad
**Descripción**: Funcionar en navegadores modernos.

**Navegadores Soportados**:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

**Prioridad**: Media

---

### RNF-05: Mantenibilidad
**Descripción**: Código limpio y fácil de mantener.

**Criterios**:
- ✅ Separación de archivos HTML, CSS, JS
- ✅ Variables CSS para colores y estilos
- ✅ Funciones modulares y reutilizables
- ✅ Comentarios en código complejo
- ✅ Nombres de variables descriptivos
- ✅ Estructura de datos clara (array de objetos)

**Prioridad**: Media

---

### RNF-06: Seguridad
**Descripción**: Protección básica de datos del usuario.

**Medidas**:
- ✅ Uso de localStorage (datos locales, no sensibles)
- ✅ No se almacenan datos de pago
- ✅ Validación de datos antes de procesar
- ✅ Sanitización de mensajes para WhatsApp
- ✅ HTTPS recomendado en producción

**Prioridad**: Media

---

### RNF-07: Escalabilidad
**Descripción**: Capacidad de agregar más productos fácilmente.

**Criterios**:
- ✅ Sistema de productos basado en array
- ✅ Fácil adición de nuevas categorías
- ✅ Grid que se ajusta automáticamente
- ✅ Sistema de filtrado dinámico
- ✅ Sin límite de productos en el código

**Prioridad**: Baja

---

### RNF-08: Accesibilidad
**Descripción**: Accesible para usuarios con discapacidades.

**Criterios**:
- ✅ Etiquetas semánticas HTML5
- ✅ Contraste de colores adecuado
- ✅ Tamaños de fuente legibles (mínimo 14px)
- ✅ Botones con áreas de clic suficientes (44x44px mínimo)
- ✅ Navegación por teclado funcional

**Prioridad**: Media

---

## 🚀 Uso

### Para Usuarios Finales

1. **Navegar por productos**: Usa los filtros de categorías para encontrar lo que buscas
2. **Agregar al carrito**: Haz clic en "Agregar al Carrito" en el producto deseado
3. **Ver carrito**: Haz clic en el ícono del carrito en el header
4. **Modificar cantidad**: Usa los botones + y - en el modal del carrito
5. **Realizar pedido**: Haz clic en "Realizar Pedido por WhatsApp"
6. **Completar en WhatsApp**: Confirma tu pedido directamente en WhatsApp

### Para Desarrolladores

```javascript
// Agregar nuevo producto
productos.push({
    id: 26,
    nombre: "Nuevo Producto",
    descripcion: "Descripción del producto",
    precio: 150.00,
    categoria: "categoria",
    icono: "🎨"
});

// Modificar precio
productos[0].precio = 700.00;

// Agregar nueva categoría
// 1. Agregar productos con la nueva categoría
// 2. Agregar botón de filtro en HTML
// 3. El sistema detectará automáticamente la categoría
```
## 📝 Licencia

Este proyecto está bajo la Licencia MIT.


## 📞 Contacto

- **Proyecto**: Glamour Store
- **Email**: contacto@glamourstore.com
- **WhatsApp**: +591 7123 4567

---

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐

Hecho con 💄 y ☕ por el equipo de Glamour Store