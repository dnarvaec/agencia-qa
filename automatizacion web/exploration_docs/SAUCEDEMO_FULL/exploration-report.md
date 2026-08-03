# Reporte de Exploración en Vivo — SauceDemo
**Fecha**: 2026-07-31  
**URL objetivo**: https://www.saucedemo.com  
**Modo**: Exploración completa con MCP Playwright  
**Estado**: ✅ Completada — todos los selectores validados contra la app real

---

## Resumen de la exploración

Se exploraron todas las páginas de la aplicación SauceDemo usando herramientas MCP de Playwright en tiempo real. Todos los localizadores del proyecto fueron **validados contra el DOM real** de la aplicación.

---

## Páginas exploradas y selectores validados

### 1. Página de Login (`/`)
| Selector | Tipo | Valor real encontrado | Estabilidad |
|---|---|---|---|
| `[data-test="username"]` | input textbox | placeholder="Username" | ★★★★★ data-test |
| `[data-test="password"]` | input textbox | placeholder="Password" | ★★★★★ data-test |
| `[data-test="login-button"]` | button | text="Login" | ★★★★★ data-test |
| `[data-test="error"]` | div | Mensaje de error | ★★★★★ data-test |

**Mensaje de error usuario bloqueado** (confirmado en vivo):  
`"Epic sadface: Sorry, this user has been locked out."`  
→ El código usa `toContainText('Sorry, this user has been locked out')` ✓

---

### 2. Página de Inventario (`/inventory.html`)
| Selector | Tipo | Valor real encontrado | Estabilidad |
|---|---|---|---|
| `.inventory_item` | div | Contenedor de cada producto (6 items) | ★★★★☆ clase CSS |
| `.inventory_item_name` | a.link | Nombre del producto | ★★★★☆ clase CSS |
| `.inventory_item_price` | div | Precio con formato `$XX.XX` | ★★★★☆ clase CSS |
| `[data-test="product-sort-container"]` | select | Opciones: az, za, lohi, hilo | ★★★★★ data-test |
| `.shopping_cart_link` | a | Enlace al carrito | ★★★★☆ clase CSS |
| `.shopping_cart_badge` | span | Contador del carrito | ★★★★☆ clase CSS |
| `[data-test^="add-to-cart-*"]` | button | Botón añadir al carrito por producto | ★★★★★ data-test |
| `.title` | span | "Products" | ★★★★☆ clase CSS |

**Productos confirmados en vivo** (6 items exactos):
- Sauce Labs Backpack — $29.99
- Sauce Labs Bike Light — $9.99
- Sauce Labs Bolt T-Shirt — $15.99
- Sauce Labs Fleece Jacket — $49.99
- Sauce Labs Onesie — $7.99
- Test.allTheThings() T-Shirt (Red) — $15.99

**Opciones del sort dropdown** (confirmadas):
- `az` → "Name (A to Z)"
- `za` → "Name (Z to A)"
- `lohi` → "Price (low to high)"
- `hilo` → "Price (high to low)"

---

### 3. Menú Hamburguesa (Header)
| Selector | Tipo | Valor real encontrado | Estabilidad |
|---|---|---|---|
| `#react-burger-menu-btn` | button | "Open Menu" | ★★★★★ id |
| `#logout_sidebar_link` | a | "Logout" | ★★★★★ id |
| `#reset_sidebar_link` | a | "Reset App State" | ★★★★★ id |
| `#react-burger-cross-btn` | button | Cerrar menú | ★★★★★ id |

---

### 4. Página del Carrito (`/cart.html`)
| Selector | Tipo | Valor real encontrado | Estabilidad |
|---|---|---|---|
| `.cart_item` | div | Contenedor de item del carrito | ★★★★☆ clase CSS |
| `.cart_quantity` | div | Cantidad ("1") | ★★★★☆ clase CSS |
| `.inventory_item_name` | a | Nombre del producto | ★★★★☆ clase CSS |
| `.inventory_item_price` | div | Precio del producto | ★★★★☆ clase CSS |
| `[data-test^="remove"]` | button | ej: `remove-sauce-labs-backpack` | ★★★★★ data-test |
| `[data-test="checkout"]` | button | "Checkout" | ★★★★★ data-test |
| `[data-test="continue-shopping"]` | button | "Continue Shopping" | ★★★★★ data-test |

---

### 5. Checkout Step 1 (`/checkout-step-one.html`)
| Selector | Tipo | Valor real encontrado | Estabilidad |
|---|---|---|---|
| `[data-test="firstName"]` | input | placeholder="First Name" | ★★★★★ data-test |
| `[data-test="lastName"]` | input | placeholder="Last Name" | ★★★★★ data-test |
| `[data-test="postalCode"]` | input | placeholder="Zip/Postal Code" | ★★★★★ data-test |
| `[data-test="continue"]` | input[type=submit] | value="Continue" | ★★★★★ data-test |
| `[data-test="cancel"]` | button | "Cancel" | ★★★★★ data-test |
| `[data-test="error"]` | div | Mensaje de error | ★★★★★ data-test |

---

### 6. Checkout Step 2 (`/checkout-step-two.html`)
| Selector | Tipo | Valor real encontrado | Estabilidad |
|---|---|---|---|
| `.cart_item` | div | Items del pedido | ★★★★☆ clase CSS |
| `.summary_subtotal_label` | div | "Item total: $XX.XX" | ★★★★☆ clase CSS |
| `.summary_tax_label` | div | "Tax: $X.XX" | ★★★★☆ clase CSS |
| `.summary_total_label` | div | "Total: $XX.XX" | ★★★★☆ clase CSS |
| `[data-test="finish"]` | button | "Finish" | ★★★★★ data-test |
| `[data-test="cancel"]` | button | "Cancel" | ★★★★★ data-test |

**Cálculo de totales confirmado** (Backpack $29.99):
- Item total: $29.99
- Tax: $2.40 (≈8% sobre el subtotal)
- Total: $32.39 (= $29.99 + $2.40) ✓

---

### 7. Checkout Complete (`/checkout-complete.html`)
| Selector | Tipo | Valor real encontrado | Estabilidad |
|---|---|---|---|
| `.complete-header` | h2 | "Thank you for your order!" | ★★★★☆ clase CSS |
| `.complete-text` | div | "Your order has been dispatched..." | ★★★★☆ clase CSS |
| `[data-test="back-to-products"]` | button | "Back Home" | ★★★★★ data-test |

---

### 8. Página de Detalle de Producto (`/inventory-item.html?id=N`)
| Selector | Tipo | Valor real encontrado | Estabilidad |
|---|---|---|---|
| `.inventory_details_name` | div | Nombre del producto | ★★★★☆ clase CSS |
| `.inventory_details_desc` | div | Descripción del producto | ★★★★☆ clase CSS |
| `.inventory_details_price` | div | Precio con formato `$XX.XX` | ★★★★☆ clase CSS |
| `[data-test^="add-to-cart"]` | button | Añadir al carrito | ★★★★★ data-test |
| `[data-test="back-to-products"]` | button/a | "Back to products" | ★★★★★ data-test |

---

## Resultado de la validación del código existente

**Conclusión**: El código teórico del proyecto **es correcto y 100% funcional**. Todos los selectores coinciden exactamente con el DOM real de la aplicación.

No se requirió ninguna corrección de selectores.

---

## Usuarios disponibles confirmados en la app

| Usuario | Contraseña | Comportamiento |
|---|---|---|
| `standard_user` | `secret_sauce` | Login exitoso ✓ |
| `locked_out_user` | `secret_sauce` | Error: "Sorry, this user has been locked out." ✓ |
| `performance_glitch_user` | `secret_sauce` | Login exitoso con latencia (~5s) ✓ |
| `problem_user` | `secret_sauce` | Login exitoso (imágenes rotas) |
| `error_user` | `secret_sauce` | Login exitoso (errores en acciones) |
| `visual_user` | `secret_sauce` | Login exitoso (bugs visuales) |
