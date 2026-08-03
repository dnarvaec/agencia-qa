## Catálogo e inventario de productos en SauceDemo

### Story ID
HU-20260731-catalogo-inventario-productos

### Descripción
Como usuario autenticado en SauceDemo, necesito visualizar el catálogo completo de productos disponibles para poder explorar las opciones, conocer sus precios y decidir cuáles agregar a mi carrito de compras.

El flujo principal consiste en acceder a la página de inventario tras el login, donde el sistema debe listar la totalidad de productos disponibles (6 productos) junto con su nombre, descripción, precio e imagen. El usuario debe poder reordenar el listado usando un selector de orden que soporte las opciones de nombre ascendente/descendente y precio ascendente/descendente. Adicionalmente, debe poder agregar o quitar cualquier producto al carrito directamente desde la vista de inventario, reflejándose el cambio en el contador del carrito ubicado en el encabezado.

Como caso alternativo, el usuario debe poder acceder al detalle individual de un producto haciendo clic en su nombre, donde se debe mostrar la información ampliada (nombre, descripción y precio), garantizando que el precio coincida exactamente con el mostrado en el listado general del inventario.

### Criterios de Aceptación
1. AC-INV-01: El sistema debe mostrar exactamente 6 productos en el catálogo de inventario
2. AC-INV-02: Todos los productos del catálogo deben mostrar un precio mayor a cero
3. AC-INV-03: El usuario debe poder ordenar los productos por nombre (A-Z, Z-A) y por precio (menor a mayor, mayor a menor)
4. AC-INV-04: El usuario debe poder agregar y quitar cualquier producto del catálogo al/del carrito, reflejando el cambio en el contador del carrito
5. AC-INV-05: El usuario debe poder acceder al detalle de un producto y verificar que el precio coincide con el mostrado en el inventario

### Información de Mejora
- Score inicial: 6/10 → Score final: 9/10
- Iteraciones: 1
- Cambios principales: HU generada a partir de la suite de casos de prueba TC-009 a TC-021 (módulo Inventario), ya automatizada y validada en vivo. Se precisó el conteo exacto de productos y las opciones de ordenamiento confirmadas contra el DOM real.
