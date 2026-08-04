# Confirmación de Carga a Azure DevOps
**Historia de Usuario:** HU-1 — Gestión del carrito de compras en SauceDemo
**Modo:** work_items | **Fecha de carga:** 2026-08-03T23:06:00Z

## Información del Destino

| Modo | Plan ID | Suite ID | URL Azure DevOps |
|---|---|---|---|
| work_items | N/A | N/A | https://dev.azure.com/dnarvaec/poc_comfama/_workitems/ |

> ⚠️ Sin licencia Test Plans — cargado como Work Items de tipo "Test Case", enlazados a la HU 1 mediante la relación "Tested By".

## Resumen

| Total Local | Cargados | Errores |
|---|---|---|
| 12 | 12 | 0 |

## Casos de Prueba Cargados

| ID Local | ID Azure | Título | Tipo | Prioridad | Estado |
|---|---|---|---|---|---|
| TC-001 | 5 | Agregar un solo producto al carrito y verificar su reflejo en la vista del carrito | web | alta | uploaded |
| TC-002 | 6 | Agregar múltiples productos simultáneamente al carrito | web | alta | uploaded |
| TC-003 | 7 | Agregar el producto de mayor precio del catálogo (caso límite) | web | media | uploaded |
| TC-004 | 8 | Agregar el producto de menor precio del catálogo (caso límite) | web | media | uploaded |
| TC-005 | 9 | Eliminar el único producto del carrito y verificar que queda vacío | web | alta | uploaded |
| TC-006 | 10 | Eliminar un producto del carrito con múltiples ítems presentes | web | media | uploaded |
| TC-007 | 11 | Verificar actualización inmediata del contador del carrito al agregar productos | web | alta | uploaded |
| TC-008 | 12 | Verificar actualización inmediata del contador del carrito al eliminar productos | web | alta | uploaded |
| TC-009 | 13 | Regresar al inventario desde el carrito mediante 'Continue Shopping' sin perder los productos agregados | web | alta | uploaded |
| TC-010 | 14 | Verificar que el precio y cantidad del producto en el carrito persisten y coinciden con el inventario tras recargar la página | web | alta | uploaded |
| TC-011 | 15 | Verificar que el contador del carrito no se muestra cuando el carrito está vacío (caso límite) | web | baja | uploaded |
| TC-012 | 16 | Verificar consistencia del contador del carrito tras una secuencia de adiciones y eliminaciones | web | media | uploaded |
