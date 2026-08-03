# Casos de Prueba — HU-SAUCEDEMO: Módulo Checkout

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

### TC-030 — Flujo completo de compra con datos válidos estándar

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar que el flujo E2E de checkout se completa exitosamente con datos estándar |

**Descripción:** Valida el flujo end-to-end completo de compra: agregar producto, checkout con datos válidos, resumen de orden y confirmación final.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito contiene el producto 'Sauce Labs Backpack'

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de 'Sauce Labs Backpack' y luego en el ícono del carrito | N/A | El sistema navega a /cart.html mostrando el producto |
| 4 | Hacer clic en el botón 'Checkout' ([data-test='checkout']) | N/A | El sistema navega a /checkout-step-one.html |
| 5 | Completar First Name='John', Last Name='Doe', Zip Code='12345' y hacer clic en 'Continue' | firstName: John, lastName: Doe, zipCode: 12345 | El sistema navega a /checkout-step-two.html mostrando el resumen del pedido |
| 6 | Verificar los valores de Item total, Tax y Total en el resumen | N/A | Item total > 0, Tax > 0, y Total = Item total + Tax (con margen de redondeo). Ejemplo real: Item total $29.99, Tax $2.40, Total $32.39 |
| 7 | Hacer clic en el botón 'Finish' ([data-test='finish']) | N/A | El sistema navega a /checkout-complete.html mostrando el encabezado 'Thank you for your order!' |

**Post-condición:** El pedido se completa exitosamente y el carrito queda vacío

**Criterios de Aceptación cubiertos:** AC-CHK-01

**Trazabilidad:**
- Criterio: expect(total).toBeCloseTo(itemTotal + tax, 2); await checkoutOverviewPage.finishOrder(); await checkoutCompletePage.expectOrderComplete();
- Origen: tests/checkout/checkout-e2e.spec.ts — 'Flujo completo de compra' → 'Datos válidos estándar' (totales confirmados en exploración en vivo: $29.99 + $2.40 = $32.39)

**Notas de Automatización:** Selectores: [data-test='checkout'], [data-test='continue'], [data-test='finish'], .complete-header. Framework: Playwright + TypeScript. Dato fuente: data/checkout.json → validInfo[0].

---

### TC-031 — Flujo completo de compra con datos válidos y caracteres especiales

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar que el checkout admite caracteres especiales/acentuados sin fallar |

**Descripción:** Valida el flujo E2E de checkout usando datos con acentos y caracteres especiales en nombre y apellido (María García).

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito contiene el producto 'Sauce Labs Backpack'

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de 'Sauce Labs Backpack' y luego en el ícono del carrito | N/A | El sistema navega a /cart.html mostrando el producto |
| 4 | Hacer clic en el botón 'Checkout' | N/A | El sistema navega a /checkout-step-one.html |
| 5 | Completar First Name='María', Last Name='García', Zip Code='28001' y hacer clic en 'Continue' | firstName: María, lastName: García, zipCode: 28001 | El sistema navega a /checkout-step-two.html mostrando el resumen del pedido sin errores de codificación |
| 6 | Verificar los valores de Item total, Tax y Total | N/A | Item total > 0, Tax > 0, y Total = Item total + Tax |
| 7 | Hacer clic en el botón 'Finish' | N/A | El sistema navega a /checkout-complete.html mostrando 'Thank you for your order!' |

**Post-condición:** El pedido se completa exitosamente

**Criterios de Aceptación cubiertos:** AC-CHK-01, AC-CHK-02

**Trazabilidad:**
- Criterio: description: 'Datos válidos con caracteres especiales', firstName: 'María', lastName: 'García'
- Origen: tests/checkout/checkout-e2e.spec.ts — 'Flujo completo de compra' (data/checkout.json → validInfo[1])

**Notas de Automatización:** Framework: Playwright + TypeScript. Valida soporte UTF-8 en campos de formulario.

---

### TC-032 — Flujo completo de compra con apellido compuesto

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar que el checkout admite apellidos compuestos y códigos postales de distinta longitud |

**Descripción:** Valida el flujo E2E de checkout usando un apellido compuesto de dos palabras (López Martínez) y un código postal más largo.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito contiene el producto 'Sauce Labs Backpack'

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de 'Sauce Labs Backpack' y luego en el ícono del carrito | N/A | El sistema navega a /cart.html mostrando el producto |
| 4 | Hacer clic en el botón 'Checkout' | N/A | El sistema navega a /checkout-step-one.html |
| 5 | Completar First Name='Carlos', Last Name='López Martínez', Zip Code='050001' y hacer clic en 'Continue' | firstName: Carlos, lastName: López Martínez, zipCode: 050001 | El sistema navega a /checkout-step-two.html mostrando el resumen del pedido |
| 6 | Verificar los valores de Item total, Tax y Total | N/A | Item total > 0, Tax > 0, y Total = Item total + Tax |
| 7 | Hacer clic en el botón 'Finish' | N/A | El sistema navega a /checkout-complete.html mostrando 'Thank you for your order!' |

**Post-condición:** El pedido se completa exitosamente

**Criterios de Aceptación cubiertos:** AC-CHK-01, AC-CHK-02

**Trazabilidad:**
- Criterio: description: 'Datos válidos con apellido compuesto', lastName: 'López Martínez', zipCode: '050001'
- Origen: tests/checkout/checkout-e2e.spec.ts — 'Flujo completo de compra' (data/checkout.json → validInfo[2])

**Notas de Automatización:** Framework: Playwright + TypeScript. Valida apellidos con espacios y códigos postales de 6 dígitos.

---

### TC-033 — Error de validación en checkout: nombre vacío

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar la validación obligatoria del campo First Name |

**Descripción:** Valida que el sistema impida avanzar en el checkout y muestre un error cuando el campo First Name está vacío.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito contiene el producto 'Sauce Labs Backpack'
- El usuario se encuentra en /checkout-step-one.html

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de 'Sauce Labs Backpack', luego en el carrito y en 'Checkout' | N/A | El sistema navega a /checkout-step-one.html |
| 4 | Dejar First Name vacío, completar Last Name='Doe' y Zip Code='12345', luego hacer clic en 'Continue' | firstName: '', lastName: Doe, zipCode: 12345 | El sistema muestra un mensaje de error en [data-test='error'] y no avanza a checkout-step-two.html |

**Post-condición:** El usuario permanece en /checkout-step-one.html

**Criterios de Aceptación cubiertos:** AC-CHK-03

**Trazabilidad:**
- Criterio: const error = await checkoutInfoPage.getErrorMessage(); expect(error.length).toBeGreaterThan(0);
- Origen: tests/checkout/checkout-e2e.spec.ts — 'Validación de campos obligatorios' → 'Error: Nombre vacío'

**Notas de Automatización:** Selector: [data-test='error']. Framework: Playwright + TypeScript. Dato fuente: data/checkout.json → invalidInfo[0].

---

### TC-034 — Error de validación en checkout: apellido vacío

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar la validación obligatoria del campo Last Name |

**Descripción:** Valida que el sistema impida avanzar en el checkout y muestre un error cuando el campo Last Name está vacío.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito contiene el producto 'Sauce Labs Backpack'
- El usuario se encuentra en /checkout-step-one.html

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de 'Sauce Labs Backpack', luego en el carrito y en 'Checkout' | N/A | El sistema navega a /checkout-step-one.html |
| 4 | Completar First Name='John', dejar Last Name vacío y Zip Code='12345', luego hacer clic en 'Continue' | firstName: John, lastName: '', zipCode: 12345 | El sistema muestra un mensaje de error en [data-test='error'] y no avanza a checkout-step-two.html |

**Post-condición:** El usuario permanece en /checkout-step-one.html

**Criterios de Aceptación cubiertos:** AC-CHK-03

**Trazabilidad:**
- Criterio: const error = await checkoutInfoPage.getErrorMessage(); expect(error.length).toBeGreaterThan(0);
- Origen: tests/checkout/checkout-e2e.spec.ts — 'Validación de campos obligatorios' → 'Error: Apellido vacío'

**Notas de Automatización:** Selector: [data-test='error']. Framework: Playwright + TypeScript. Dato fuente: data/checkout.json → invalidInfo[1].

---

### TC-035 — Error de validación en checkout: código postal vacío

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar la validación obligatoria del campo Zip/Postal Code |

**Descripción:** Valida que el sistema impida avanzar en el checkout y muestre un error cuando el campo Zip/Postal Code está vacío.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito contiene el producto 'Sauce Labs Backpack'
- El usuario se encuentra en /checkout-step-one.html

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de 'Sauce Labs Backpack', luego en el carrito y en 'Checkout' | N/A | El sistema navega a /checkout-step-one.html |
| 4 | Completar First Name='John', Last Name='Doe' y dejar Zip Code vacío, luego hacer clic en 'Continue' | firstName: John, lastName: Doe, zipCode: '' | El sistema muestra un mensaje de error en [data-test='error'] y no avanza a checkout-step-two.html |

**Post-condición:** El usuario permanece en /checkout-step-one.html

**Criterios de Aceptación cubiertos:** AC-CHK-03

**Trazabilidad:**
- Criterio: const error = await checkoutInfoPage.getErrorMessage(); expect(error.length).toBeGreaterThan(0);
- Origen: tests/checkout/checkout-e2e.spec.ts — 'Validación de campos obligatorios' → 'Error: Código postal vacío'

**Notas de Automatización:** Selector: [data-test='error']. Framework: Playwright + TypeScript. Dato fuente: data/checkout.json → invalidInfo[2].

---

### TC-036 — Cancelar el checkout desde el paso 1 regresa al carrito

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar la navegación de cancelación desde el primer paso del checkout |

**Descripción:** Valida que el botón 'Cancel' en checkout-step-one.html redirija correctamente a la página del carrito conservando el producto.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito contiene el producto 'Sauce Labs Backpack'
- El usuario se encuentra en /checkout-step-one.html

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de 'Sauce Labs Backpack', luego en el carrito y en 'Checkout' | N/A | El sistema navega a /checkout-step-one.html |
| 4 | Hacer clic en el botón 'Cancel' ([data-test='cancel']) | N/A | El sistema navega de regreso a /cart.html y el producto 'Sauce Labs Backpack' sigue presente (conteo = 1) |

**Post-condición:** El carrito conserva el producto agregado

**Criterios de Aceptación cubiertos:** AC-CHK-04

**Trazabilidad:**
- Criterio: await checkoutInfoPage.cancel(); await cartPage.expectCartCount(1);
- Origen: tests/checkout/checkout-e2e.spec.ts — 'Cancelar el checkout regresa al carrito'

**Notas de Automatización:** Selector: [data-test='cancel']. Framework: Playwright + TypeScript.

---

### TC-037 — Cancelar en el resumen del checkout regresa al inventario

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | standard | Confirmar la navegación de cancelación desde el segundo paso (resumen) del checkout |

**Descripción:** Valida que el botón 'Cancel' en checkout-step-two.html redirija correctamente al inventario de productos.

**Precondiciones:**
- Usuario standard_user / secret_sauce autenticado
- El carrito contiene el producto 'Sauce Labs Backpack'
- El usuario se encuentra en /checkout-step-two.html

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en 'Add to cart' de 'Sauce Labs Backpack', luego en el carrito, en 'Checkout' y completar los datos válidos (John/Doe/12345), hacer clic en 'Continue' | firstName: John, lastName: Doe, zipCode: 12345 | El sistema navega a /checkout-step-two.html mostrando el resumen del pedido |
| 4 | Hacer clic en el botón 'Cancel' ([data-test='cancel']) | N/A | El sistema navega de regreso a /inventory.html mostrando el título 'Products' |

**Post-condición:** El usuario se encuentra en /inventory.html

**Criterios de Aceptación cubiertos:** AC-CHK-04

**Trazabilidad:**
- Criterio: await checkoutOverviewPage.cancel(); await inventoryPage.expectOnInventoryPage();
- Origen: tests/checkout/checkout-e2e.spec.ts — 'Cancelar en el resumen regresa al inventario'

**Notas de Automatización:** Selector: [data-test='cancel']. Framework: Playwright + TypeScript.
