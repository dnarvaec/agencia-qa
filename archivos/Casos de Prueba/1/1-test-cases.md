# Casos de Prueba — HU-1: Gestión del carrito de compras en SauceDemo

**Fecha de generación:** 2026-08-03T00:00:00Z

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
| 12 | 0 | 0 | 12 |

## Casos de Prueba

### TC-001 — Agregar un solo producto al carrito y verificar su reflejo en la vista del carrito

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar que el sistema permite agregar un producto al carrito y lo muestra correctamente en /cart.html |

**Descripción:** Valida que al agregar un único producto desde el inventario, este se refleje correctamente en la página del carrito con nombre, precio y cantidad exactos.

**Precondiciones:**
- Usuario standard_user / secret_sauce válido para autenticación en https://www.saucedemo.com/
- El carrito de compras está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login con los campos Username y Password |
| 2 | Completar el campo Username con 'standard_user' y el campo Password con 'secret_sauce', luego hacer clic en el botón Login | username: standard_user, password: secret_sauce | El sistema autentica al usuario y navega a /inventory.html mostrando el catálogo de 6 productos |
| 3 | Hacer clic en el botón 'Add to cart' del producto Sauce Labs Backpack | Selector: [data-test='add-to-cart-sauce-labs-backpack'] | El botón cambia a 'Remove' y el contador del carrito (.shopping_cart_badge) muestra '1' |
| 4 | Hacer clic en el ícono del carrito | Selector: .shopping_cart_link | El sistema navega a /cart.html mostrando la página del carrito |
| 5 | Verificar el contenido del ítem en el carrito | Selectores: .cart_item, .inventory_item_name, .inventory_item_price, .cart_quantity | Se muestra exactamente 1 ítem: nombre 'Sauce Labs Backpack', precio '$29.99', cantidad '1' |

**Post-condición:** El carrito contiene 1 producto (Sauce Labs Backpack)

**Criterios de Aceptación cubiertos:** AC-CART-01

**Trazabilidad:**
- Criterio: El sistema debe permitir agregar uno o varios productos al carrito y reflejarlos correctamente en la vista del carrito
- Origen: Criterio AC-CART-01 de la HU 1 — sección: Gestión del carrito de compras en SauceDemo

**Notas de Automatización:** Selectores: [data-test='add-to-cart-sauce-labs-backpack'], .shopping_cart_link, .cart_item, .inventory_item_name, .inventory_item_price, .cart_quantity. URL esperada: /cart.html. Framework: Playwright + TypeScript (Page Object Model)

---

### TC-002 — Agregar múltiples productos simultáneamente al carrito

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar que al agregar 3 productos distintos, los 3 aparecen en /cart.html con su nombre y precio correctos |

**Descripción:** Valida que el sistema soporta la adición de varios productos a la vez y que todos se reflejan correctamente en el carrito.

**Precondiciones:**
- Usuario standard_user / secret_sauce válido para autenticación en https://www.saucedemo.com/
- El carrito de compras está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username 'standard_user' y Password 'secret_sauce', clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de Sauce Labs Backpack, Sauce Labs Bike Light y Sauce Labs Bolt T-Shirt | Selectores: [data-test='add-to-cart-sauce-labs-backpack'], [data-test='add-to-cart-sauce-labs-bike-light'], [data-test='add-to-cart-sauce-labs-bolt-t-shirt'] | El contador del carrito (.shopping_cart_badge) muestra '3' tras cada adición sucesiva (1, 2, 3) |
| 4 | Hacer clic en el ícono del carrito | Selector: .shopping_cart_link | El sistema navega a /cart.html |
| 5 | Verificar los 3 ítems listados en el carrito | Selectores: .cart_item, .inventory_item_name, .inventory_item_price | Se muestran exactamente 3 ítems: 'Sauce Labs Backpack' ($29.99), 'Sauce Labs Bike Light' ($9.99) y 'Sauce Labs Bolt T-Shirt' ($15.99), cada uno con cantidad '1' |

**Post-condición:** El carrito contiene 3 productos

**Criterios de Aceptación cubiertos:** AC-CART-01

**Trazabilidad:**
- Criterio: El sistema debe soportar la adición de múltiples productos simultáneamente
- Origen: Criterio AC-CART-01 de la HU 1 — sección: Gestión del carrito de compras en SauceDemo

**Notas de Automatización:** Selectores: [data-test^='add-to-cart-'], .shopping_cart_badge, .cart_item, .inventory_item_name, .inventory_item_price. URL esperada: /cart.html. Framework: Playwright + TypeScript (Page Object Model)

---

### TC-003 — Agregar el producto de mayor precio del catálogo (caso límite)

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar que el producto con el precio más alto se agrega y se muestra con nombre y precio exactos en el carrito |

**Descripción:** Valida el caso límite de precio superior: el producto más caro del catálogo (Sauce Labs Fleece Jacket, $49.99) se agrega correctamente al carrito.

**Precondiciones:**
- Usuario standard_user / secret_sauce válido para autenticación en https://www.saucedemo.com/
- El carrito de compras está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username 'standard_user' y Password 'secret_sauce', clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html mostrando el catálogo de 6 productos |
| 3 | Hacer clic en 'Add to cart' del producto Sauce Labs Fleece Jacket (precio más alto del catálogo) | Selector: [data-test='add-to-cart-sauce-labs-fleece-jacket'] | El botón cambia a 'Remove' y el contador del carrito muestra '1' |
| 4 | Hacer clic en el ícono del carrito | Selector: .shopping_cart_link | El sistema navega a /cart.html |
| 5 | Verificar el nombre y precio del ítem en el carrito | Selectores: .inventory_item_name, .inventory_item_price | Se muestra 'Sauce Labs Fleece Jacket' con precio '$49.99', idéntico al mostrado en el inventario |

**Post-condición:** El carrito contiene el producto de mayor precio del catálogo

**Criterios de Aceptación cubiertos:** AC-CART-02

**Trazabilidad:**
- Criterio: El sistema debe permitir agregar correctamente al carrito el producto de mayor precio y el producto de menor precio del catálogo, mostrando su nombre y precio exactos en la vista del carrito
- Origen: Criterio AC-CART-02 de la HU 1 — sección: Gestión del carrito de compras en SauceDemo

**Notas de Automatización:** Selectores: [data-test='add-to-cart-sauce-labs-fleece-jacket'], .inventory_item_name, .inventory_item_price. Precio de referencia validado en exploración en vivo: $49.99. URL esperada: /cart.html. Framework: Playwright + TypeScript (Page Object Model)

---

### TC-004 — Agregar el producto de menor precio del catálogo (caso límite)

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar que el producto con el precio más bajo se agrega y se muestra con nombre y precio exactos en el carrito |

**Descripción:** Valida el caso límite de precio inferior: el producto más barato del catálogo (Sauce Labs Onesie, $7.99) se agrega correctamente al carrito.

**Precondiciones:**
- Usuario standard_user / secret_sauce válido para autenticación en https://www.saucedemo.com/
- El carrito de compras está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username 'standard_user' y Password 'secret_sauce', clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html mostrando el catálogo de 6 productos |
| 3 | Hacer clic en 'Add to cart' del producto Sauce Labs Onesie (precio más bajo del catálogo) | Selector: [data-test='add-to-cart-sauce-labs-onesie'] | El botón cambia a 'Remove' y el contador del carrito muestra '1' |
| 4 | Hacer clic en el ícono del carrito | Selector: .shopping_cart_link | El sistema navega a /cart.html |
| 5 | Verificar el nombre y precio del ítem en el carrito | Selectores: .inventory_item_name, .inventory_item_price | Se muestra 'Sauce Labs Onesie' con precio '$7.99', idéntico al mostrado en el inventario |

**Post-condición:** El carrito contiene el producto de menor precio del catálogo

**Criterios de Aceptación cubiertos:** AC-CART-02

**Trazabilidad:**
- Criterio: El sistema debe permitir agregar correctamente al carrito el producto de mayor precio y el producto de menor precio del catálogo, mostrando su nombre y precio exactos en la vista del carrito
- Origen: Criterio AC-CART-02 de la HU 1 — sección: Gestión del carrito de compras en SauceDemo

**Notas de Automatización:** Selectores: [data-test='add-to-cart-sauce-labs-onesie'], .inventory_item_name, .inventory_item_price. Precio de referencia validado en exploración en vivo: $7.99. URL esperada: /cart.html. Framework: Playwright + TypeScript (Page Object Model)

---

### TC-005 — Eliminar el único producto del carrito y verificar que queda vacío

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar que el carrito queda vacío tras eliminar su único producto |

**Descripción:** Valida que al eliminar un producto que es el único ítem del carrito, este queda completamente vacío.

**Precondiciones:**
- Usuario standard_user / secret_sauce válido para autenticación en https://www.saucedemo.com/
- El carrito contiene exactamente 1 producto (Sauce Labs Backpack) antes de ejecutar la eliminación

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username 'standard_user' y Password 'secret_sauce', clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' del producto Sauce Labs Backpack | Selector: [data-test='add-to-cart-sauce-labs-backpack'] | El contador del carrito muestra '1' |
| 4 | Hacer clic en el ícono del carrito | Selector: .shopping_cart_link | El sistema navega a /cart.html mostrando 1 ítem |
| 5 | Hacer clic en el botón 'Remove' del producto Sauce Labs Backpack | Selector: [data-test='remove-sauce-labs-backpack'] | El ítem desaparece de la lista del carrito |
| 6 | Verificar el estado del carrito y el contador | Selectores: .cart_item, .shopping_cart_badge | No se muestra ningún .cart_item en la página y el contador del carrito (.shopping_cart_badge) desaparece del encabezado (0 productos) |

**Post-condición:** El carrito queda vacío

**Criterios de Aceptación cubiertos:** AC-CART-03

**Trazabilidad:**
- Criterio: El usuario debe poder eliminar un producto del carrito, dejándolo vacío si era el único ítem
- Origen: Criterio AC-CART-03 de la HU 1 — sección: Gestión del carrito de compras en SauceDemo

**Notas de Automatización:** Selectores: [data-test='remove-sauce-labs-backpack'], .cart_item, .shopping_cart_badge. URL esperada: /cart.html. Framework: Playwright + TypeScript (Page Object Model)

---

### TC-006 — Eliminar un producto del carrito con múltiples ítems presentes

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar que la eliminación de un ítem no afecta a los demás productos del carrito |

**Descripción:** Valida que al eliminar un producto específico de un carrito con varios ítems, solo ese producto se elimina y los demás permanecen intactos.

**Precondiciones:**
- Usuario standard_user / secret_sauce válido para autenticación en https://www.saucedemo.com/
- El carrito contiene 2 productos (Sauce Labs Backpack y Sauce Labs Bike Light) antes de ejecutar la eliminación

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username 'standard_user' y Password 'secret_sauce', clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de Sauce Labs Backpack y Sauce Labs Bike Light | Selectores: [data-test='add-to-cart-sauce-labs-backpack'], [data-test='add-to-cart-sauce-labs-bike-light'] | El contador del carrito muestra '2' |
| 4 | Hacer clic en el ícono del carrito | Selector: .shopping_cart_link | El sistema navega a /cart.html mostrando 2 ítems |
| 5 | Hacer clic en el botón 'Remove' del producto Sauce Labs Bike Light | Selector: [data-test='remove-sauce-labs-bike-light'] | El ítem 'Sauce Labs Bike Light' desaparece de la lista |
| 6 | Verificar el contenido restante del carrito y el contador | Selectores: .cart_item, .inventory_item_name, .shopping_cart_badge | Se muestra únicamente 1 ítem, 'Sauce Labs Backpack' ($29.99), y el contador del carrito muestra '1' |

**Post-condición:** El carrito contiene únicamente Sauce Labs Backpack

**Criterios de Aceptación cubiertos:** AC-CART-03

**Trazabilidad:**
- Criterio: El usuario debe poder eliminar un producto del carrito, dejándolo vacío si era el único ítem
- Origen: Criterio AC-CART-03 de la HU 1 — sección: Gestión del carrito de compras en SauceDemo

**Notas de Automatización:** Selectores: [data-test='remove-sauce-labs-bike-light'], .cart_item, .inventory_item_name, .shopping_cart_badge. URL esperada: /cart.html. Framework: Playwright + TypeScript (Page Object Model)

---

### TC-007 — Verificar actualización inmediata del contador del carrito al agregar productos

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar que el badge del carrito refleja el conteo correcto tras cada clic en 'Add to cart', sin necesidad de recargar |

**Descripción:** Valida que el contador del carrito en el encabezado se actualiza de forma inmediata y sin recargar la página ante cada adición de producto.

**Precondiciones:**
- Usuario standard_user / secret_sauce válido para autenticación en https://www.saucedemo.com/
- El carrito de compras está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username 'standard_user' y Password 'secret_sauce', clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html. No se muestra el badge del carrito (0 productos) |
| 3 | Hacer clic en 'Add to cart' de Sauce Labs Backpack, sin recargar la página | Selector: [data-test='add-to-cart-sauce-labs-backpack'] | El .shopping_cart_badge aparece inmediatamente mostrando '1', sin recarga de página |
| 4 | Hacer clic en 'Add to cart' de Sauce Labs Bike Light, sin recargar la página | Selector: [data-test='add-to-cart-sauce-labs-bike-light'] | El .shopping_cart_badge se actualiza inmediatamente a '2', sin recarga de página |

**Post-condición:** El carrito contiene 2 productos y el contador muestra '2'

**Criterios de Aceptación cubiertos:** AC-CART-04

**Trazabilidad:**
- Criterio: El contador del carrito debe actualizarse de forma inmediata y sin necesidad de recargar la página, ante cada adición o eliminación de productos
- Origen: Criterio AC-CART-04 de la HU 1 — sección: Gestión del carrito de compras en SauceDemo

**Notas de Automatización:** Selectores: [data-test^='add-to-cart-'], .shopping_cart_badge. Validar ausencia de evento de navegación (page.waitForNavigation no debe dispararse). Framework: Playwright + TypeScript (Page Object Model)

---

### TC-008 — Verificar actualización inmediata del contador del carrito al eliminar productos

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar que el badge del carrito decrementa correctamente tras cada eliminación, sin necesidad de recargar |

**Descripción:** Valida que el contador del carrito en el encabezado se actualiza de forma inmediata y sin recargar la página ante cada eliminación de producto, tanto desde el inventario como desde el carrito.

**Precondiciones:**
- Usuario standard_user / secret_sauce válido para autenticación en https://www.saucedemo.com/
- El carrito contiene 2 productos (Sauce Labs Backpack y Sauce Labs Bike Light) antes de ejecutar las eliminaciones

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username 'standard_user' y Password 'secret_sauce', clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de Sauce Labs Backpack y Sauce Labs Bike Light | Selectores: [data-test='add-to-cart-sauce-labs-backpack'], [data-test='add-to-cart-sauce-labs-bike-light'] | El .shopping_cart_badge muestra '2' |
| 4 | Hacer clic en el botón 'Remove' del producto Sauce Labs Backpack desde la página de inventario, sin recargar | Selector: [data-test='remove-sauce-labs-backpack'] | El .shopping_cart_badge se actualiza inmediatamente a '1', sin recarga de página |
| 5 | Hacer clic en el ícono del carrito | Selector: .shopping_cart_link | El sistema navega a /cart.html mostrando 1 ítem (Sauce Labs Bike Light) |
| 6 | Hacer clic en el botón 'Remove' del producto Sauce Labs Bike Light desde /cart.html, sin recargar | Selector: [data-test='remove-sauce-labs-bike-light'] | El .shopping_cart_badge desaparece del encabezado (0 productos), sin recarga de página |

**Post-condición:** El carrito queda vacío

**Criterios de Aceptación cubiertos:** AC-CART-04

**Trazabilidad:**
- Criterio: El contador del carrito debe actualizarse de forma inmediata y sin necesidad de recargar la página, ante cada adición o eliminación de productos
- Origen: Criterio AC-CART-04 de la HU 1 — sección: Gestión del carrito de compras en SauceDemo

**Notas de Automatización:** Selectores: [data-test^='remove-'], .shopping_cart_badge, .shopping_cart_link. Framework: Playwright + TypeScript (Page Object Model)

---

### TC-009 — Regresar al inventario desde el carrito mediante 'Continue Shopping' sin perder los productos agregados

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar que la navegación de regreso al inventario no elimina los productos ya agregados al carrito |

**Descripción:** Valida que el botón 'Continue Shopping' de la página del carrito navega de regreso al inventario y que los productos previamente agregados se mantienen en el carrito.

**Precondiciones:**
- Usuario standard_user / secret_sauce válido para autenticación en https://www.saucedemo.com/
- El carrito contiene 1 producto (Sauce Labs Backpack) antes de navegar al carrito

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username 'standard_user' y Password 'secret_sauce', clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' del producto Sauce Labs Backpack | Selector: [data-test='add-to-cart-sauce-labs-backpack'] | El contador del carrito muestra '1' |
| 4 | Hacer clic en el ícono del carrito | Selector: .shopping_cart_link | El sistema navega a /cart.html mostrando 1 ítem |
| 5 | Hacer clic en el botón 'Continue Shopping' | Selector: [data-test='continue-shopping'] | El sistema navega de regreso a /inventory.html |
| 6 | Verificar el contador del carrito y el estado de los botones 'Add to cart' / 'Remove' en el inventario | Selectores: .shopping_cart_badge, [data-test='remove-sauce-labs-backpack'] | El .shopping_cart_badge sigue mostrando '1' y el botón del producto Sauce Labs Backpack muestra 'Remove', confirmando que el producto no se perdió |

**Post-condición:** El carrito conserva el producto agregado y el usuario se encuentra en /inventory.html

**Criterios de Aceptación cubiertos:** AC-CART-05

**Trazabilidad:**
- Criterio: El usuario debe poder regresar al inventario desde el carrito mediante la opción 'Continue Shopping'
- Origen: Criterio AC-CART-05 de la HU 1 — sección: Gestión del carrito de compras en SauceDemo

**Notas de Automatización:** Selector: [data-test='continue-shopping']. URL esperada tras el clic: /inventory.html. Framework: Playwright + TypeScript (Page Object Model)

---

### TC-010 — Verificar que el precio y cantidad del producto en el carrito persisten y coinciden con el inventario tras recargar la página

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar la persistencia y exactitud de los datos del producto en el carrito tras un refresco de página |

**Descripción:** Valida que el precio y la cantidad de un producto agregado al carrito coinciden exactamente con los valores mostrados en el inventario, y que dicho estado persiste al recargar la página del carrito.

**Precondiciones:**
- Usuario standard_user / secret_sauce válido para autenticación en https://www.saucedemo.com/
- El carrito de compras está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username 'standard_user' y Password 'secret_sauce', clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Registrar el precio mostrado en el inventario para Sauce Labs Backpack | Selector: .inventory_item_price | El precio mostrado es '$29.99' |
| 4 | Hacer clic en 'Add to cart' del producto Sauce Labs Backpack | Selector: [data-test='add-to-cart-sauce-labs-backpack'] | El contador del carrito muestra '1' |
| 5 | Hacer clic en el ícono del carrito | Selector: .shopping_cart_link | El sistema navega a /cart.html mostrando el ítem con precio '$29.99' y cantidad '1' |
| 6 | Recargar la página del carrito (F5 / page.reload) | N/A | La página /cart.html se recarga y el ítem persiste sin cambios |
| 7 | Verificar nuevamente el nombre, precio y cantidad del ítem tras la recarga | Selectores: .inventory_item_name, .inventory_item_price, .cart_quantity | Se muestra 'Sauce Labs Backpack', precio '$29.99' y cantidad '1', exactamente igual a los valores del inventario registrados en el paso 3 |

**Post-condición:** El carrito conserva el producto con precio y cantidad correctos tras la recarga

**Criterios de Aceptación cubiertos:** AC-CART-06

**Trazabilidad:**
- Criterio: El precio y la cantidad de cada producto en el carrito deben coincidir exactamente con los valores del inventario
- Origen: Criterio AC-CART-06 de la HU 1 — sección: Gestión del carrito de compras en SauceDemo

**Notas de Automatización:** Selectores: .inventory_item_price (inventario), .inventory_item_name, .inventory_item_price, .cart_quantity (carrito). Precio de referencia validado en exploración en vivo: $29.99. Framework: Playwright + TypeScript (Page Object Model)

---

### TC-011 — Verificar que el contador del carrito no se muestra cuando el carrito está vacío (caso límite)

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | baja | standard | Confirmar que el .shopping_cart_badge está ausente cuando la cantidad de productos en el carrito es 0 |

**Descripción:** Valida el caso límite de valor cero: cuando el carrito no contiene productos, el badge del contador no debe mostrarse en el encabezado.

**Precondiciones:**
- Usuario standard_user / secret_sauce válido para autenticación en https://www.saucedemo.com/
- El carrito de compras está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username 'standard_user' y Password 'secret_sauce', clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Verificar la presencia del badge del carrito en el encabezado sin haber agregado productos | Selector: .shopping_cart_badge | El elemento .shopping_cart_badge no está presente / no es visible en el encabezado |
| 4 | Hacer clic en el ícono del carrito | Selector: .shopping_cart_link | El sistema navega a /cart.html mostrando la lista de ítems vacía (0 .cart_item) |

**Post-condición:** El carrito permanece vacío

**Criterios de Aceptación cubiertos:** AC-CART-04

**Trazabilidad:**
- Criterio: El contador del carrito debe actualizarse de forma inmediata y sin necesidad de recargar la página, ante cada adición o eliminación de productos
- Origen: Criterio AC-CART-04 de la HU 1 — sección: Gestión del carrito de compras en SauceDemo

**Notas de Automatización:** Selectores: .shopping_cart_badge (verificar ausencia con expect(...).not.toBeVisible()), .cart_item. Framework: Playwright + TypeScript (Page Object Model)

---

### TC-012 — Verificar consistencia del contador del carrito tras una secuencia de adiciones y eliminaciones

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar que el badge del carrito mantiene el conteo correcto en un escenario de múltiples operaciones consecutivas |

**Descripción:** Valida que el contador del carrito refleja correctamente el conteo neto de productos tras una secuencia combinada de adiciones y eliminaciones sobre múltiples productos.

**Precondiciones:**
- Usuario standard_user / secret_sauce válido para autenticación en https://www.saucedemo.com/
- El carrito de compras está vacío al iniciar el caso

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username 'standard_user' y Password 'secret_sauce', clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Agregar Sauce Labs Backpack, Sauce Labs Bike Light y Sauce Labs Bolt T-Shirt | Selectores: [data-test='add-to-cart-sauce-labs-backpack'], [data-test='add-to-cart-sauce-labs-bike-light'], [data-test='add-to-cart-sauce-labs-bolt-t-shirt'] | El .shopping_cart_badge muestra '3' |
| 4 | Eliminar Sauce Labs Bike Light desde el inventario | Selector: [data-test='remove-sauce-labs-bike-light'] | El .shopping_cart_badge se actualiza a '2' |
| 5 | Agregar Sauce Labs Fleece Jacket | Selector: [data-test='add-to-cart-sauce-labs-fleece-jacket'] | El .shopping_cart_badge se actualiza a '3' |
| 6 | Hacer clic en el ícono del carrito y verificar los ítems finales | Selector: .shopping_cart_link, .cart_item, .inventory_item_name | Se muestran exactamente 3 ítems en /cart.html: 'Sauce Labs Backpack', 'Sauce Labs Bolt T-Shirt' y 'Sauce Labs Fleece Jacket', coincidiendo con el valor final del contador |

**Post-condición:** El carrito contiene 3 productos: Sauce Labs Backpack, Sauce Labs Bolt T-Shirt y Sauce Labs Fleece Jacket

**Criterios de Aceptación cubiertos:** AC-CART-04

**Trazabilidad:**
- Criterio: El contador del carrito debe actualizarse de forma inmediata y sin necesidad de recargar la página, ante cada adición o eliminación de productos
- Origen: Criterio AC-CART-04 de la HU 1 — sección: Gestión del carrito de compras en SauceDemo

**Notas de Automatización:** Selectores: [data-test^='add-to-cart-'], [data-test^='remove-'], .shopping_cart_badge, .cart_item, .inventory_item_name. Framework: Playwright + TypeScript (Page Object Model)
