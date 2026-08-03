# Casos de Prueba — HU-SAUCEDEMO: Módulo Login

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

### TC-001 — Login exitoso con usuario estándar

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar que el sistema permite el acceso al inventario tras un login válido |

**Descripción:** Valida que un usuario con credenciales válidas (standard_user) pueda autenticarse correctamente y acceder al catálogo de productos.

**Precondiciones:**
- El usuario standard_user / secret_sauce existe y está activo en https://www.saucedemo.com/
- El navegador no tiene sesión previa iniciada

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login con los campos Username y Password |
| 2 | Completar el campo Username con 'standard_user' y el campo Password con 'secret_sauce', luego hacer clic en el botón Login | username: standard_user, password: secret_sauce | El sistema autentica al usuario y navega a la URL /inventory.html mostrando el catálogo de productos |

**Post-condición:** El usuario permanece autenticado en la página de inventario

**Criterios de Aceptación cubiertos:** AC-LOGIN-01

**Trazabilidad:**
- Criterio: test('Usuario estándar con acceso completo', ...) => await loginPage.login(user.username, user.password); await loginPage.expectLoginSuccess();
- Origen: tests/login/login.spec.ts — describe 'Login exitoso' (validado también por exploración en vivo MCP Playwright el 31/07/2026)

**Notas de Automatización:** Selectores: [data-test='username'], [data-test='password'], [data-test='login-button']. URL esperada: /inventory.html. Framework: Playwright + TypeScript (Page Object Model). Test automatizado y pasando (1.7s).

---

### TC-002 — Login exitoso con usuario de latencia simulada (performance_glitch_user)

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | performance_glitch | Confirmar que el login es exitoso incluso cuando el sistema presenta latencia simulada |

**Descripción:** Valida que el usuario performance_glitch_user, que simula latencia en la UI, pueda autenticarse correctamente a pesar del retraso.

**Precondiciones:**
- El usuario performance_glitch_user / secret_sauce existe y está activo en https://www.saucedemo.com/
- El navegador no tiene sesión previa iniciada

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login con los campos Username y Password |
| 2 | Completar el campo Username con 'performance_glitch_user' y el campo Password con 'secret_sauce', luego hacer clic en el botón Login | username: performance_glitch_user, password: secret_sauce | El sistema autentica al usuario (con latencia perceptible ~5s) y navega a /inventory.html |

**Post-condición:** El usuario permanece autenticado en la página de inventario

**Criterios de Aceptación cubiertos:** AC-LOGIN-01, AC-LOGIN-02

**Trazabilidad:**
- Criterio: test('Usuario con latencia simulada en la UI', ...) => await loginPage.login(user.username, user.password); await loginPage.expectLoginSuccess();
- Origen: tests/login/login.spec.ts — describe 'Login exitoso'

**Notas de Automatización:** Mismo flujo que TC-001 con usuario distinto. Tiempo de ejecución observado: ~6.7s-7.1s por la latencia simulada. Framework: Playwright + TypeScript.

---

### TC-003 — Rechazo de login para usuario bloqueado (locked_out_user)

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | locked_out | Confirmar que locked_out_user no puede iniciar sesión y se muestra el mensaje de error esperado |

**Descripción:** Valida que el sistema rechace el acceso de un usuario bloqueado y muestre el mensaje de error correspondiente.

**Precondiciones:**
- El usuario locked_out_user / secret_sauce existe pero está bloqueado en https://www.saucedemo.com/

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar el campo Username con 'locked_out_user' y el campo Password con 'secret_sauce', luego hacer clic en el botón Login | username: locked_out_user, password: secret_sauce | El sistema muestra el mensaje de error '[data-test="error"]' con el texto 'Epic sadface: Sorry, this user has been locked out.' y permanece en la URL '/' |

**Post-condición:** El usuario no accede al inventario y permanece en la página de login

**Criterios de Aceptación cubiertos:** AC-LOGIN-03

**Trazabilidad:**
- Criterio: await loginPage.expectLoginError('Sorry, this user has been locked out');
- Origen: tests/login/login.spec.ts — describe 'Usuario bloqueado' (confirmado en exploración en vivo: texto exacto 'Epic sadface: Sorry, this user has been locked out.')

**Notas de Automatización:** Selector: [data-test='error']. Framework: Playwright + TypeScript. Mensaje de error validado byte a byte contra el DOM real.

---

### TC-004 — Rechazo de login con credenciales completamente incorrectas

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | N/A | Confirmar que se muestra un error de credenciales inválidas |

**Descripción:** Valida que el sistema rechace el acceso cuando se ingresan un usuario y contraseña que no existen.

**Precondiciones:**
- El usuario 'usuario_inexistente' no existe en el sistema

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar el campo Username con 'usuario_inexistente' y el campo Password con 'clave_incorrecta', luego hacer clic en el botón Login | username: usuario_inexistente, password: clave_incorrecta | Se muestra el elemento de error [data-test='error'] visible |

**Post-condición:** El usuario permanece en la página de login

**Criterios de Aceptación cubiertos:** AC-LOGIN-04

**Trazabilidad:**
- Criterio: expect(await loginPage.isErrorVisible()).toBe(true);
- Origen: tests/login/login.spec.ts — describe 'Credenciales inválidas'

**Notas de Automatización:** Selector: [data-test='error']. Framework: Playwright + TypeScript. Dato fuente: data/users.json → invalid[0].

---

### TC-005 — Rechazo de login con ambos campos vacíos

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | N/A | Confirmar la validación de campos obligatorios en el login |

**Descripción:** Valida que el sistema no permita el acceso cuando Username y Password se envían vacíos.

**Precondiciones:**
- El usuario no ha ingresado ningún valor en los campos

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Dejar los campos Username y Password vacíos y hacer clic en el botón Login | username: '', password: '' | Se muestra el elemento de error [data-test='error'] visible |

**Post-condición:** El usuario permanece en la página de login

**Criterios de Aceptación cubiertos:** AC-LOGIN-04

**Trazabilidad:**
- Criterio: expect(await loginPage.isErrorVisible()).toBe(true);
- Origen: tests/login/login.spec.ts — describe 'Credenciales inválidas'

**Notas de Automatización:** Selector: [data-test='error']. Framework: Playwright + TypeScript. Dato fuente: data/users.json → invalid[1].

---

### TC-006 — Rechazo de login con contraseña vacía y usuario válido

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | N/A | Confirmar la validación de campo Password obligatorio |

**Descripción:** Valida que el sistema no permita el acceso cuando el Password está vacío aunque el Username sea válido.

**Precondiciones:**
- El usuario standard_user existe y es válido

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y dejar Password vacío, luego hacer clic en el botón Login | username: standard_user, password: '' | Se muestra el elemento de error [data-test='error'] visible |

**Post-condición:** El usuario permanece en la página de login

**Criterios de Aceptación cubiertos:** AC-LOGIN-04

**Trazabilidad:**
- Criterio: expect(await loginPage.isErrorVisible()).toBe(true);
- Origen: tests/login/login.spec.ts — describe 'Credenciales inválidas'

**Notas de Automatización:** Selector: [data-test='error']. Framework: Playwright + TypeScript. Dato fuente: data/users.json → invalid[2].

---

### TC-007 — Rechazo de login con usuario vacío y contraseña válida

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | media | N/A | Confirmar la validación de campo Username obligatorio |

**Descripción:** Valida que el sistema no permita el acceso cuando el Username está vacío aunque el Password sea válido.

**Precondiciones:**
- La contraseña secret_sauce es válida para usuarios existentes

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Dejar Username vacío y completar Password con 'secret_sauce', luego hacer clic en el botón Login | username: '', password: secret_sauce | Se muestra el elemento de error [data-test='error'] visible |

**Post-condición:** El usuario permanece en la página de login

**Criterios de Aceptación cubiertos:** AC-LOGIN-04

**Trazabilidad:**
- Criterio: expect(await loginPage.isErrorVisible()).toBe(true);
- Origen: tests/login/login.spec.ts — describe 'Credenciales inválidas'

**Notas de Automatización:** Selector: [data-test='error']. Framework: Playwright + TypeScript. Dato fuente: data/users.json → invalid[3].

---

### TC-008 — Logout después de iniciar sesión

| Tipo | Prioridad | Rol | Objetivo |
|---|---|---|---|
| web | alta | standard | Confirmar que el flujo de logout finaliza la sesión correctamente |

**Descripción:** Valida que un usuario autenticado pueda cerrar sesión desde el menú lateral y sea redirigido a la página de login.

**Precondiciones:**
- El usuario standard_user / secret_sauce existe y es válido
- El usuario aún no ha iniciado sesión

**Pasos:**

| # | Acción | Datos | Resultado Esperado |
|---|---|---|---|
| 1 | Navegar a https://www.saucedemo.com/ | N/A | Se muestra la página de login |
| 2 | Completar Username con 'standard_user' y Password con 'secret_sauce', luego hacer clic en Login | username: standard_user, password: secret_sauce | El sistema navega a /inventory.html |
| 3 | Hacer clic en el botón de menú hamburguesa (#react-burger-menu-btn) | N/A | Se despliega el menú lateral con las opciones All Items, About, Logout, Reset App State |
| 4 | Hacer clic en el enlace Logout (#logout_sidebar_link) | N/A | El sistema cierra la sesión y navega a la URL '/' |

**Post-condición:** La sesión del usuario finaliza y no puede acceder a páginas protegidas sin volver a autenticarse

**Criterios de Aceptación cubiertos:** AC-LOGIN-05

**Trazabilidad:**
- Criterio: await header.logout(); await expect(page).toHaveURL('/');
- Origen: tests/login/login.spec.ts — 'Logout después de iniciar sesión' (menú validado en exploración en vivo: #react-burger-menu-btn, #logout_sidebar_link)

**Notas de Automatización:** Selectores: #react-burger-menu-btn, #logout_sidebar_link. Framework: Playwright + TypeScript.
