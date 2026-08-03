# Casos de Prueba — HU-SAUCEDEMO: Módulo Carrito

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
| 8 | 0 | 0 | 8 |

## Casos de Prueba

### TC-022 — Agregar un solo producto al carrito y verificar en la página del carrito

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar la persistencia del producto agregado al navegar a la vista del carrito |

**Descripción:** Valida que al agregar un producto desde el inventario, este aparezca correctamente reflejado en la página del carrito.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' del producto 'Sauce Labs Backpack' | N/A | El contador del carrito muestra '1' |
| 4 | Hacer clic en el ícono del carrito (.shopping_cart_link) | N/A | El sistema navega a /cart.html |
| 5 | Verificar la presencia del ítem 'Sauce Labs Backpack' en la lista (.cart_item) | N/A | El producto 'Sauce Labs Backpack' está visible en el carrito y el conteo total de ítems es 1 |

**Post-condición:** El carrito contiene 1 producto: Sauce Labs Backpack

**Criterios de Aceptación cubiertos:** AC-CART-01

**Trazabilidad:**
- Criterio: await header.expectCartCount(scenario.products.length); await header.openCart(); await cartPage.expectItemInCart(product); await cartPage.expectCartCount(scenario.products.length);
- Origen: tests/cart/cart.spec.ts — 'Agregar productos al carrito' (escenario: Agregar un solo producto al carrito)

**Notas de Automatización:** Selectores: .shopping_cart_link, .cart_item. Framework: Playwright + TypeScript. Dato fuente: data/products.json → cartScenarios[0].

---

### TC-023 — Agregar múltiples productos al carrito y verificarlos

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar que el carrito soporta múltiples productos simultáneamente |

**Descripción:** Valida que al agregar tres productos distintos desde el inventario, los tres aparezcan correctamente en la página del carrito.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de 'Sauce Labs Backpack', 'Sauce Labs Bike Light' y 'Sauce Labs Bolt T-Shirt' consecutivamente | productos: [Sauce Labs Backpack, Sauce Labs Bike Light, Sauce Labs Bolt T-Shirt] | El contador del carrito muestra '3' |
| 4 | Hacer clic en el ícono del carrito | N/A | El sistema navega a /cart.html mostrando los 3 productos |
| 5 | Verificar que cada uno de los 3 productos esté presente en la lista del carrito | N/A | Los 3 productos son visibles y el conteo total de ítems del carrito es 3 |

**Post-condición:** El carrito contiene 3 productos

**Criterios de Aceptación cubiertos:** AC-CART-01

**Trazabilidad:**
- Criterio: await header.expectCartCount(scenario.products.length); ...for (const product of scenario.products) { await cartPage.expectItemInCart(product); }
- Origen: tests/cart/cart.spec.ts — 'Agregar productos al carrito' (escenario: Agregar múltiples productos al carrito)

**Notas de Automatización:** Selectores: .shopping_cart_badge, .cart_item. Framework: Playwright + TypeScript. Dato fuente: data/products.json → cartScenarios[1].

---

### TC-024 — Agregar el producto más caro (Sauce Labs Fleece Jacket) al carrito

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar el manejo correcto del producto de mayor valor monetario |

**Descripción:** Valida el caso límite superior de precio: agregar el producto más caro del catálogo ($49.99) y confirmar su presencia en el carrito.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' del producto 'Sauce Labs Fleece Jacket' | N/A | El contador del carrito muestra '1' |
| 4 | Hacer clic en el ícono del carrito y verificar el producto en la lista | N/A | El producto 'Sauce Labs Fleece Jacket' ($49.99) está visible en el carrito |

**Post-condición:** El carrito contiene 1 producto: Sauce Labs Fleece Jacket

**Criterios de Aceptación cubiertos:** AC-CART-02

**Trazabilidad:**
- Criterio: scenario: 'Agregar el producto más caro al carrito', products: ['Sauce Labs Fleece Jacket']
- Origen: tests/cart/cart.spec.ts — 'Agregar productos al carrito' (data/products.json → cartScenarios[2])

**Notas de Automatización:** Framework: Playwright + TypeScript. Precio confirmado en exploración en vivo: $49.99 (el más alto del catálogo).

---

### TC-025 — Agregar el producto más barato (Sauce Labs Onesie) al carrito

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar el manejo correcto del producto de menor valor monetario |

**Descripción:** Valida el caso límite inferior de precio: agregar el producto más barato del catálogo ($7.99) y confirmar su presencia en el carrito.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' del producto 'Sauce Labs Onesie' | N/A | El contador del carrito muestra '1' |
| 4 | Hacer clic en el ícono del carrito y verificar el producto en la lista | N/A | El producto 'Sauce Labs Onesie' ($7.99) está visible en el carrito |

**Post-condición:** El carrito contiene 1 producto: Sauce Labs Onesie

**Criterios de Aceptación cubiertos:** AC-CART-02

**Trazabilidad:**
- Criterio: scenario: 'Agregar el producto más barato al carrito', products: ['Sauce Labs Onesie']
- Origen: tests/cart/cart.spec.ts — 'Agregar productos al carrito' (data/products.json → cartScenarios[3])

**Notas de Automatización:** Framework: Playwright + TypeScript. Precio confirmado en exploración en vivo: $7.99 (el más bajo del catálogo).

---

### TC-026 — Eliminar un producto del carrito

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar la funcionalidad de eliminación de productos desde el carrito |

**Descripción:** Valida que un producto pueda eliminarse desde la página del carrito y que este quede vacío correctamente.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' del producto 'Sauce Labs Backpack' | N/A | El contador del carrito muestra '1' |
| 4 | Hacer clic en el ícono del carrito | N/A | El sistema navega a /cart.html mostrando el producto |
| 5 | Hacer clic en el botón 'Remove' ([data-test='remove-sauce-labs-backpack']) del producto en el carrito | N/A | El producto desaparece de la lista del carrito (.cart_item con conteo 0) y el contador del header se oculta |

**Post-condición:** El carrito queda vacío

**Criterios de Aceptación cubiertos:** AC-CART-03

**Trazabilidad:**
- Criterio: await cartPage.removeItemByName('Sauce Labs Backpack'); await cartPage.expectCartEmpty(); await header.expectCartCount(0);
- Origen: tests/cart/cart.spec.ts — 'Eliminar un producto del carrito'

**Notas de Automatización:** Selector: [data-test='remove-sauce-labs-backpack']. Framework: Playwright + TypeScript.

---

### TC-027 — El contador del carrito se actualiza correctamente al agregar y quitar productos

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar la consistencia del contador del carrito ante múltiples operaciones |

**Descripción:** Valida que el badge del contador del carrito refleje en tiempo real las adiciones y eliminaciones sucesivas de productos.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de 'Sauce Labs Backpack' | N/A | El contador del carrito muestra '1' |
| 4 | Hacer clic en 'Add to cart' de 'Sauce Labs Bike Light' | N/A | El contador del carrito muestra '2' |
| 5 | Hacer clic en 'Remove' de 'Sauce Labs Backpack' | N/A | El contador del carrito muestra '1' |
| 6 | Hacer clic en 'Remove' de 'Sauce Labs Bike Light' | N/A | El contador del carrito desaparece (0 productos) |

**Post-condición:** El carrito queda vacío

**Criterios de Aceptación cubiertos:** AC-CART-04

**Trazabilidad:**
- Criterio: await header.expectCartCount(1); ... await header.expectCartCount(2); ... await header.expectCartCount(1); ... await header.expectCartCount(0);
- Origen: tests/cart/cart.spec.ts — 'El contador del carrito se actualiza correctamente al agregar y quitar'

**Notas de Automatización:** Selector: .shopping_cart_badge. Framework: Playwright + TypeScript.

---

### TC-028 — Continuar comprando desde el carrito regresa al inventario

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar la navegación de retorno desde el carrito hacia el catálogo |

**Descripción:** Valida que el botón 'Continue Shopping' en la página del carrito redirija correctamente al inventario de productos.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito contiene al menos 1 producto

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de 'Sauce Labs Onesie' | N/A | El contador del carrito muestra '1' |
| 4 | Hacer clic en el ícono del carrito | N/A | El sistema navega a /cart.html |
| 5 | Hacer clic en el botón 'Continue Shopping' ([data-test='continue-shopping']) | N/A | El sistema navega de regreso a /inventory.html mostrando el título 'Products' |

**Post-condición:** El usuario se encuentra en /inventory.html con el producto aún en el carrito

**Criterios de Aceptación cubiertos:** AC-CART-05

**Trazabilidad:**
- Criterio: await cartPage.continueShopping(); await inventoryPage.expectOnInventoryPage();
- Origen: tests/cart/cart.spec.ts — 'Continuar comprando desde el carrito regresa al inventario'

**Notas de Automatización:** Selector: [data-test='continue-shopping']. Framework: Playwright + TypeScript.

---

### TC-029 — El precio total en el carrito coincide con el precio del producto agregado

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar la integridad del precio y cantidad reflejados en el carrito |

**Descripción:** Valida que el precio y la cantidad mostrados en la página del carrito coincidan exactamente con los del inventario para un producto agregado.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de 'Sauce Labs Backpack' | N/A | El contador del carrito muestra '1' |
| 4 | Hacer clic en el ícono del carrito | N/A | El sistema navega a /cart.html |
| 5 | Obtener el detalle del ítem (nombre, precio, cantidad) desde '.cart_item' | N/A | El arreglo de ítems tiene longitud 1, con precio exactamente $29.99 y cantidad 1 |

**Post-condición:** El carrito contiene 1 producto con datos consistentes

**Criterios de Aceptación cubiertos:** AC-CART-06

**Trazabilidad:**
- Criterio: expect(items).toHaveLength(1); expect(items[0].price).toBe(29.99); expect(items[0].quantity).toBe(1);
- Origen: tests/cart/cart.spec.ts — 'El precio total en el carrito coincide con el precio del producto' (precio $29.99 confirmado en exploración en vivo)

**Notas de Automatización:** Selectores: .cart_item, .inventory_item_name, .inventory_item_price, .cart_quantity. Framework: Playwright + TypeScript.
