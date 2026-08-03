# Casos de Prueba — HU-SAUCEDEMO: Módulo Inventario

**Fecha de generación:** 2026-07-31T19:10:00Z

## Entorno

| Web |
|---|
| https://www.saucedemo.com/ |

## Credenciales

| Usuario | Rol | Contraseña |
|---|---|---|
| standard_user | standard | secret_sauce |
| performance_glitch_user | performance_glitch | secret_sauce |
| problem_user | problem | secret_sauce |
| error_user | error | secret_sauce |
| visual_user | visual | secret_sauce |
| locked_out_user | locked_out | secret_sauce |

## Resumen

| Total Web | Total API | Total Manual | Total |
|---|---|---|---|
| 13 | 0 | 0 | 13 |

## Casos de Prueba

### TC-009 — Verificar que el inventario muestra exactamente 6 productos

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar el conteo total de productos en el inventario |

**Descripción:** Valida que el catálogo de productos muestre la cantidad exacta de ítems disponibles en la tienda demo.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El usuario se encuentra en la página /inventory.html

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html mostrando el catálogo |
| 3 | Contar los elementos con clase '.inventory_item' en la página | N/A | El conteo de elementos '.inventory_item' es exactamente 6 |

**Post-condición:** El usuario permanece en /inventory.html

**Criterios de Aceptación cubiertos:** AC-INV-01

**Trazabilidad:**
- Criterio: const count = await inventoryPage.getItemCount(); expect(count).toBe(6);
- Origen: tests/inventory/inventory.spec.ts (confirmado en exploración en vivo: 6 productos reales listados)

**Notas de Automatización:** Selector: .inventory_item. Framework: Playwright + TypeScript.

---

### TC-010 — Verificar que todos los precios de productos son mayores a cero

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar la integridad de los precios mostrados en el inventario |

**Descripción:** Valida que ningún producto del catálogo tenga un precio igual o menor a cero.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El usuario se encuentra en la página /inventory.html

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Obtener el texto de todos los elementos '.inventory_item_price' y convertirlos a número | N/A | Todos los precios obtenidos son mayores a 0 (ej. $29.99, $9.99, $15.99, $49.99, $7.99, $15.99) |

**Post-condición:** El usuario permanece en /inventory.html

**Criterios de Aceptación cubiertos:** AC-INV-02

**Trazabilidad:**
- Criterio: prices.forEach((price) => expect(price).toBeGreaterThan(0));
- Origen: tests/inventory/inventory.spec.ts (precios confirmados en exploración en vivo)

**Notas de Automatización:** Selector: .inventory_item_price. Framework: Playwright + TypeScript.

---

### TC-011 — Ordenar productos de menor a mayor precio (Price low to high)

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar el ordenamiento ascendente por precio |

**Descripción:** Valida que al seleccionar la opción 'lohi' del combo de orden, los productos se reordenen ascendentemente por precio.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El usuario se encuentra en la página /inventory.html

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Seleccionar la opción 'lohi' (Price (low to high)) en el combo [data-test='product-sort-container'] | value: lohi | Los precios de los productos quedan ordenados de menor a mayor |

**Post-condición:** El listado de productos permanece ordenado ascendentemente por precio

**Criterios de Aceptación cubiertos:** AC-INV-03

**Trazabilidad:**
- Criterio: expect(prices).toEqual([...prices].sort((a, b) => a - b));
- Origen: tests/inventory/inventory.spec.ts — 'Ordenamiento de productos' (opción 'lohi' confirmada en exploración en vivo)

**Notas de Automatización:** Selector: [data-test='product-sort-container']. Framework: Playwright + TypeScript.

---

### TC-012 — Ordenar productos de mayor a menor precio (Price high to low)

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar el ordenamiento descendente por precio |

**Descripción:** Valida que al seleccionar la opción 'hilo' del combo de orden, los productos se reordenen descendentemente por precio.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El usuario se encuentra en la página /inventory.html

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Seleccionar la opción 'hilo' (Price (high to low)) en el combo [data-test='product-sort-container'] | value: hilo | Los precios de los productos quedan ordenados de mayor a menor |

**Post-condición:** El listado de productos permanece ordenado descendentemente por precio

**Criterios de Aceptación cubiertos:** AC-INV-03

**Trazabilidad:**
- Criterio: expect(prices).toEqual([...prices].sort((a, b) => b - a));
- Origen: tests/inventory/inventory.spec.ts — 'Ordenamiento de productos' (opción 'hilo' confirmada en exploración en vivo)

**Notas de Automatización:** Selector: [data-test='product-sort-container']. Framework: Playwright + TypeScript.

---

### TC-013 — Ordenar productos de A a Z por nombre

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | baja | standard | Confirmar el ordenamiento alfabético ascendente por nombre |

**Descripción:** Valida que al seleccionar la opción 'az' del combo de orden, los productos se reordenen alfabéticamente ascendente por nombre.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El usuario se encuentra en la página /inventory.html

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Seleccionar la opción 'az' (Name (A to Z)) en el combo [data-test='product-sort-container'] | value: az | Los nombres de los productos quedan ordenados alfabéticamente de A a Z |

**Post-condición:** El listado de productos permanece ordenado alfabéticamente ascendente

**Criterios de Aceptación cubiertos:** AC-INV-03

**Trazabilidad:**
- Criterio: expect(names).toEqual([...names].sort());
- Origen: tests/inventory/inventory.spec.ts — 'Ordenamiento de productos' (opción 'az' es la opción por defecto, confirmada en exploración en vivo)

**Notas de Automatización:** Selector: [data-test='product-sort-container']. Framework: Playwright + TypeScript.

---

### TC-014 — Ordenar productos de Z a A por nombre

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | baja | standard | Confirmar el ordenamiento alfabético descendente por nombre |

**Descripción:** Valida que al seleccionar la opción 'za' del combo de orden, los productos se reordenen alfabéticamente descendente por nombre.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El usuario se encuentra en la página /inventory.html

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Seleccionar la opción 'za' (Name (Z to A)) en el combo [data-test='product-sort-container'] | value: za | Los nombres de los productos quedan ordenados alfabéticamente de Z a A |

**Post-condición:** El listado de productos permanece ordenado alfabéticamente descendente

**Criterios de Aceptación cubiertos:** AC-INV-03

**Trazabilidad:**
- Criterio: expect(names).toEqual([...names].sort().reverse());
- Origen: tests/inventory/inventory.spec.ts — 'Ordenamiento de productos' (opción 'za' confirmada en exploración en vivo)

**Notas de Automatización:** Selector: [data-test='product-sort-container']. Framework: Playwright + TypeScript.

---

### TC-015 — Agregar 'Sauce Labs Backpack' al carrito desde el inventario

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar la funcionalidad de agregar/quitar producto individual desde el inventario |

**Descripción:** Valida que el producto Sauce Labs Backpack pueda agregarse y quitarse del carrito desde la vista de inventario, actualizando el contador.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en el botón 'Add to cart' del producto 'Sauce Labs Backpack' ([data-test='add-to-cart-sauce-labs-backpack']) | N/A | El contador del carrito (.shopping_cart_badge) muestra '1' |
| 4 | Hacer clic en el botón 'Remove' del mismo producto ([data-test='remove-sauce-labs-backpack']) | N/A | El contador del carrito desaparece (0 productos) |

**Post-condición:** El carrito queda vacío

**Criterios de Aceptación cubiertos:** AC-INV-04

**Trazabilidad:**
- Criterio: await inventoryPage.addItemToCartByName(product.name); await header.expectCartCount(1); await inventoryPage.removeItemFromCartByName(product.name); await header.expectCartCount(0);
- Origen: tests/inventory/inventory.spec.ts — 'Agregar productos al carrito' (selector [data-test='add-to-cart-sauce-labs-backpack'] confirmado en exploración en vivo)

**Notas de Automatización:** Selectores: [data-test='add-to-cart-sauce-labs-backpack'], [data-test='remove-sauce-labs-backpack'], .shopping_cart_badge. Framework: Playwright + TypeScript.

---

### TC-016 — Agregar 'Sauce Labs Bike Light' al carrito desde el inventario

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar la funcionalidad de agregar/quitar producto individual desde el inventario |

**Descripción:** Valida que el producto Sauce Labs Bike Light pueda agregarse y quitarse del carrito desde la vista de inventario, actualizando el contador.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en el botón 'Add to cart' del producto 'Sauce Labs Bike Light' ([data-test='add-to-cart-sauce-labs-bike-light']) | N/A | El contador del carrito muestra '1' |
| 4 | Hacer clic en el botón 'Remove' del mismo producto | N/A | El contador del carrito desaparece (0 productos) |

**Post-condición:** El carrito queda vacío

**Criterios de Aceptación cubiertos:** AC-INV-04

**Trazabilidad:**
- Criterio: await inventoryPage.addItemToCartByName(product.name); await header.expectCartCount(1);
- Origen: tests/inventory/inventory.spec.ts — 'Agregar productos al carrito'

**Notas de Automatización:** Selector: [data-test='add-to-cart-sauce-labs-bike-light']. Framework: Playwright + TypeScript.

---

### TC-017 — Agregar 'Sauce Labs Bolt T-Shirt' al carrito desde el inventario

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar la funcionalidad de agregar/quitar producto individual desde el inventario |

**Descripción:** Valida que el producto Sauce Labs Bolt T-Shirt pueda agregarse y quitarse del carrito desde la vista de inventario, actualizando el contador.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en el botón 'Add to cart' del producto 'Sauce Labs Bolt T-Shirt' ([data-test='add-to-cart-sauce-labs-bolt-t-shirt']) | N/A | El contador del carrito muestra '1' |
| 4 | Hacer clic en el botón 'Remove' del mismo producto | N/A | El contador del carrito desaparece (0 productos) |

**Post-condición:** El carrito queda vacío

**Criterios de Aceptación cubiertos:** AC-INV-04

**Trazabilidad:**
- Criterio: await inventoryPage.addItemToCartByName(product.name); await header.expectCartCount(1);
- Origen: tests/inventory/inventory.spec.ts — 'Agregar productos al carrito'

**Notas de Automatización:** Selector: [data-test='add-to-cart-sauce-labs-bolt-t-shirt']. Framework: Playwright + TypeScript.

---

### TC-018 — Agregar 'Sauce Labs Fleece Jacket' al carrito desde el inventario

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar la funcionalidad de agregar/quitar producto individual desde el inventario |

**Descripción:** Valida que el producto Sauce Labs Fleece Jacket (el más caro del catálogo) pueda agregarse y quitarse del carrito, actualizando el contador.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en el botón 'Add to cart' del producto 'Sauce Labs Fleece Jacket' ([data-test='add-to-cart-sauce-labs-fleece-jacket']) | N/A | El contador del carrito muestra '1' |
| 4 | Hacer clic en el botón 'Remove' del mismo producto | N/A | El contador del carrito desaparece (0 productos) |

**Post-condición:** El carrito queda vacío

**Criterios de Aceptación cubiertos:** AC-INV-04

**Trazabilidad:**
- Criterio: await inventoryPage.addItemToCartByName(product.name); await header.expectCartCount(1);
- Origen: tests/inventory/inventory.spec.ts — 'Agregar productos al carrito'

**Notas de Automatización:** Selector: [data-test='add-to-cart-sauce-labs-fleece-jacket']. Precio confirmado: $49.99. Framework: Playwright + TypeScript.

---

### TC-019 — Agregar 'Sauce Labs Onesie' al carrito desde el inventario

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar la funcionalidad de agregar/quitar producto individual desde el inventario |

**Descripción:** Valida que el producto Sauce Labs Onesie (el más barato del catálogo) pueda agregarse y quitarse del carrito, actualizando el contador.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en el botón 'Add to cart' del producto 'Sauce Labs Onesie' ([data-test='add-to-cart-sauce-labs-onesie']) | N/A | El contador del carrito muestra '1' |
| 4 | Hacer clic en el botón 'Remove' del mismo producto | N/A | El contador del carrito desaparece (0 productos) |

**Post-condición:** El carrito queda vacío

**Criterios de Aceptación cubiertos:** AC-INV-04

**Trazabilidad:**
- Criterio: await inventoryPage.addItemToCartByName(product.name); await header.expectCartCount(1);
- Origen: tests/inventory/inventory.spec.ts — 'Agregar productos al carrito'

**Notas de Automatización:** Selector: [data-test='add-to-cart-sauce-labs-onesie']. Precio confirmado: $7.99. Framework: Playwright + TypeScript.

---

### TC-020 — Agregar 'Test.allTheThings() T-Shirt (Red)' al carrito desde el inventario

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar la funcionalidad de agregar/quitar producto individual desde el inventario |

**Descripción:** Valida que el producto Test.allTheThings() T-Shirt (Red) pueda agregarse y quitarse del carrito, actualizando el contador.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en el botón 'Add to cart' del producto 'Test.allTheThings() T-Shirt (Red)' ([data-test='add-to-cart-test.allthethings()-t-shirt-(red)']) | N/A | El contador del carrito muestra '1' |
| 4 | Hacer clic en el botón 'Remove' del mismo producto | N/A | El contador del carrito desaparece (0 productos) |

**Post-condición:** El carrito queda vacío

**Criterios de Aceptación cubiertos:** AC-INV-04

**Trazabilidad:**
- Criterio: await inventoryPage.addItemToCartByName(product.name); await header.expectCartCount(1);
- Origen: tests/inventory/inventory.spec.ts — 'Agregar productos al carrito' (selector confirmado en exploración en vivo: add-to-cart-test.allthethings()-t-shirt-(red))

**Notas de Automatización:** Selector: [data-test='add-to-cart-test.allthethings()-t-shirt-(red)']. Framework: Playwright + TypeScript.

---

### TC-021 — Abrir el detalle de un producto y verificar su precio

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar la navegación a detalle de producto y la consistencia del precio mostrado |

**Descripción:** Valida que al hacer clic en el nombre de un producto se navegue a la página de detalle y se muestre el precio correcto.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El usuario se encuentra en /inventory.html

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en el enlace del nombre del producto 'Sauce Labs Backpack' (.inventory_item_name) | N/A | El sistema navega a /inventory-item.html?id=N y muestra el nombre 'Sauce Labs Backpack' en '.inventory_details_name' |
| 4 | Obtener el texto del precio en '.inventory_details_price' | N/A | El precio mostrado es exactamente '$29.99', coincidiendo con el precio del inventario |

**Post-condición:** El usuario permanece en la página de detalle del producto

**Criterios de Aceptación cubiertos:** AC-INV-05

**Trazabilidad:**
- Criterio: await productDetailPage.expectOnProductPage(firstProduct.name); const price = await productDetailPage.getProductPrice(); expect(price).toBe(firstProduct.expectedPrice);
- Origen: tests/inventory/inventory.spec.ts — 'Abrir detalle de producto y verificar precio' (confirmado en exploración en vivo: /inventory-item.html?id=4)

**Notas de Automatización:** Selectores: .inventory_item_name, .inventory_details_name, .inventory_details_price. Framework: Playwright + TypeScript.
