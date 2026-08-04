## Gestión del carrito de compras en SauceDemo

### Story ID
1

### Descripción
Como usuario autenticado en SauceDemo, necesito gestionar los productos que deseo comprar a través de un carrito de compras, de manera que pueda revisar, modificar y confirmar mi selección antes de proceder al pago.

El flujo principal consiste en agregar uno o varios productos desde el inventario y visualizarlos en la página del carrito, donde el sistema debe mostrar el nombre, precio y cantidad de cada ítem agregado, permitiendo validar que la información coincide exactamente con la mostrada en el catálogo. El sistema debe soportar la adición de múltiples productos simultáneamente, incluyendo los casos límite de precio, es decir, el producto con el precio más alto y el producto con el precio más bajo del catálogo vigente.

Como casos alternativos, el usuario debe poder eliminar productos individuales del carrito, dejándolo vacío si era el único ítem presente, y el contador de productos en el encabezado debe actualizarse en tiempo real ante cada adición o eliminación. Finalmente, el usuario debe poder regresar al inventario desde el carrito mediante la opción 'Continue Shopping' sin perder los productos ya agregados.

### Criterios de Aceptación
1. AC-CART-01: El sistema debe permitir agregar uno o varios productos al carrito y reflejarlos correctamente en la vista del carrito
2. AC-CART-02: El sistema debe permitir agregar correctamente al carrito el producto de mayor precio y el producto de menor precio del catálogo, mostrando su nombre y precio exactos en la vista del carrito
3. AC-CART-03: El usuario debe poder eliminar un producto del carrito, dejándolo vacío si era el único ítem
4. AC-CART-04: El contador del carrito debe actualizarse de forma inmediata y sin necesidad de recargar la página, ante cada adición o eliminación de productos
5. AC-CART-05: El usuario debe poder regresar al inventario desde el carrito mediante la opción 'Continue Shopping'
6. AC-CART-06: El precio y la cantidad de cada producto en el carrito deben coincidir exactamente con los valores del inventario

### Información de Mejora
- Score inicial: 8/10
- Score final: 9/10
- Iteraciones: 1
- Cambios principales: Se precisó el criterio AC-CART-02 (qué significa "manejar correctamente" los productos límite de precio) y AC-CART-04 (qué implica actualización "en tiempo real"), eliminando ambigüedad sin alterar el alcance original.
