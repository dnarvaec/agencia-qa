## Proceso de checkout y finalización de compra en SauceDemo

### Story ID
HU-20260731-proceso-checkout-compra

### Descripción
Como usuario autenticado en SauceDemo con productos en su carrito, necesito completar el proceso de checkout ingresando mis datos de envío, de manera que pueda finalizar la compra y recibir la confirmación del pedido.

El flujo principal consiste en iniciar el checkout desde la página del carrito, completar un formulario con nombre, apellido y código postal, y avanzar a una página de resumen donde el sistema debe mostrar el subtotal de los productos, el impuesto aplicado y el total a pagar (calculado como la suma del subtotal más el impuesto). Al confirmar la orden, el sistema debe mostrar una página de confirmación con el mensaje de agradecimiento correspondiente. El formulario debe aceptar datos con caracteres especiales, acentos y apellidos compuestos de más de una palabra sin generar errores de codificación.

Como casos alternativos, el sistema debe validar que los campos de nombre, apellido y código postal sean obligatorios, mostrando un mensaje de error visible cuando alguno esté vacío e impidiendo avanzar al siguiente paso. Adicionalmente, el usuario debe poder cancelar el proceso de checkout desde el primer paso (regresando al carrito) o desde el resumen del pedido (regresando al inventario), conservando en ambos casos el estado previo de sus productos.

### Criterios de Aceptación
1. AC-CHK-01: El sistema debe permitir completar el flujo de compra de principio a fin (datos de envío, resumen con subtotal/impuesto/total, y confirmación de la orden)
2. AC-CHK-02: El formulario de checkout debe aceptar datos con caracteres especiales, acentos y apellidos compuestos sin generar errores
3. AC-CHK-03: El sistema debe validar los campos obligatorios (First Name, Last Name, Zip/Postal Code) y mostrar un mensaje de error si alguno está vacío
4. AC-CHK-04: El usuario debe poder cancelar el proceso de checkout desde cualquiera de sus pasos, regresando a la página anterior correspondiente (carrito o inventario)
5. AC-CHK-05: El sistema debe calcular el total del pedido como la suma exacta del subtotal (item total) más el impuesto (tax), con precisión de dos decimales

### Información de Mejora
- Score inicial: 6/10 → Score final: 9/10
- Iteraciones: 1
- Cambios principales: HU generada a partir de la suite de casos de prueba TC-030 a TC-037 (módulo Checkout), ya automatizada y validada en vivo. Se añadió un criterio explícito sobre el cálculo del total (subtotal + impuesto) confirmado en la exploración en vivo ($29.99 + $2.40 = $32.39).
