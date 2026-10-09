# Product Backlog inicial — OmniDist Tech

**Producto:** OmniDist Tech  
**Marco de trabajo:** Scrum  
**Base documental:** informe previo del Proyecto Integrador de OmniDist Tech.  
**Total inicial:** 15 historias · **82 Story Points (SP)**.

El backlog se presenta por prioridad, de P1 (más alta) a P15. Los estados describen el avance funcional revisado en el informe: mantener una historia en el backlog no significa que ya esté implementada.

## Backlog priorizado

| Prioridad | ID | Épica | Funcionalidad | SP | Estado actual | Dependencias principales |
|---|---|---|---|---:|---|---|
| P1 | HU-05 / F5 | Catálogo y descubrimiento | Mostrar imágenes reales de los productos | 3 | Implementada | Ninguna |
| P2 | HU-06 / F6 | Catálogo y descubrimiento | Consultar detalle de cada producto | 5 | Parcial | HU-05 |
| P3 | HU-07 / F7 | Catálogo y descubrimiento | Filtrar productos por características | 5 | Pendiente | HU-05 |
| P4 | HU-08 / F8 | Catálogo y descubrimiento | Ordenar por precio, popularidad o novedades | 3 | Pendiente | HU-05 |
| P5 | HU-09 / F9 | Carrito de compras | Guardar carrito en localStorage | 5 | Implementada | Catálogo de productos |
| P6 | HU-10 / F10 | Carrito de compras | Modificar cantidades de productos | 3 | Implementada | HU-09 |
| P7 | HU-11 / F11 | Carrito de compras | Mostrar precios y subtotal | 3 | Parcial | HU-09, HU-10 |
| P8 | HU-01 / F1 | Gestión de cuenta y preferencias | Registrar usuarios | 5 | Pendiente | Ninguna |
| P9 | HU-02 / F2 | Gestión de cuenta y preferencias | Iniciar y cerrar sesión | 3 | Parcial | HU-01 para cuentas de cliente |
| P10 | HU-12 / F12 | Pedidos y checkout | Registrar y consultar pedidos | 13 | Parcial / simulado | HU-02, HU-09, HU-11 |
| P11 | HU-13 / F13 | Pedidos y checkout | Registrar información de envío | 8 | Pendiente | HU-12; para la planificación refinada, HU-12A |
| P12 | HU-14 / F14 | Pedidos y checkout | Integrar métodos de pago | 13 | Pendiente | HU-12, HU-13; revisar el refinamiento HU-12A/HU-12B |
| P13 | HU-03 / F3 | Gestión de cuenta y preferencias | Gestionar el perfil del usuario | 5 | Pendiente | HU-01, HU-02 |
| P14 | HU-04 / F4 | Gestión de cuenta y preferencias | Guardar productos como favoritos | 5 | Pendiente | HU-01, HU-02 y catálogo |
| P15 | HU-15 / F15 | Ayuda y soporte | Preguntas frecuentes (FAQ) | 3 | Pendiente | Ninguna |

## Resumen por épica

| Épica | Historias | Total SP |
|---|---|---:|
| Gestión de cuenta y preferencias | HU-01 a HU-04 | 18 |
| Catálogo y descubrimiento de productos | HU-05 a HU-08 | 16 |
| Carrito de compras | HU-09 a HU-11 | 11 |
| Pedidos y checkout | HU-12 a HU-14 | 34 |
| Ayuda y soporte | HU-15 | 3 |
| **Total** | **15 historias** | **82** |

## Notas de gestión

- El detalle funcional y los criterios de aceptación de cada historia están en [user-stories.md](user-stories.md).
- La planificación propuesta divide HU-12 (13 SP) en HU-12A — Registrar pedido (8 SP) y HU-12B — Consultar pedidos (5 SP), sin cambiar el total estimado. El desglose se utiliza para planificar; el resumen del backlog conserva la historia HU-12 original para mantener la trazabilidad con el informe.
- Las dependencias refinadas y la propuesta de cinco Sprints se explican en [estimation-and-sprints.md](estimation-and-sprints.md).
- Las estimaciones son la base inicial del informe y deben ser validadas por el equipo. No se registran votos ficticios.
