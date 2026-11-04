# Storefront POS

**Producto comercial en producción** | Utilizado por clientes reales en Nicaragua

Storefront es un sistema en producción que comercios reales de Nicaragua usan para gestionar su negocio. Conecta el punto de venta con inventario, compras, clientes, finanzas y reportes. Desarrollo el producto en su aplicación web, el POS de escritorio, los servicios backend y las integraciones.

## Conocé Storefront

Visitá [storefrontpos.com](https://storefrontpos.com) para conocer el producto, los planes y solicitar una demo, o [abrí la aplicación](https://app.storefrontpos.com).

El código fuente es privado. Para una explicación técnica de mi trabajo, [contactame](/es/#contact).

<figure className="product-shot"><a href="/img/storefront/dashboard-20261005.webp" target="_blank" rel="noreferrer"><img src="/img/storefront/dashboard-20261005.webp" alt="Panel de ventas de Storefront con evolución de ventas, productos destacados y medios de pago" /></a><figcaption>Panel de ventas del sitio actual de Storefront, octubre de 2026. Abrí la imagen para verla en tamaño completo.</figcaption></figure>

## Módulos y funciones

Storefront organiza la operación del comercio en 12 módulos. La disponibilidad de funciones y la capacidad dependen del plan y de los complementos habilitados.

<div className="module-grid">
<section><h3>Punto de venta</h3><p>Administrá dispositivos, cajas, turnos de cajeros y configuración de recibos.</p></section>
<section><h3>Ventas</h3><p>Consultá ventas y devoluciones, revisá pagos y da seguimiento a los saldos de clientes.</p></section>
<section><h3>Inventario</h3><p>Gestioná productos, categorías, listas de precios y existencias por bodega, con transferencias, conteos y bajas.</p></section>
<section><h3>Compras</h3><p>Organizá proveedores, registrá compras y controlá cuentas por pagar.</p></section>
<section><h3>BAC Credomatic</h3><p>Administrá terminales BAC, ventas con tarjeta, reembolsos, puntos bancarios y cierres de terminal.</p></section>
<section><h3>Clientes</h3><p>Mantené los contactos de tus clientes y consultá sus saldos pendientes.</p></section>
<section><h3>Finanzas</h3><p>Gestioná cuentas de dinero, ingresos, gastos y préstamos.</p></section>
<section><h3>Marketing</h3><p>Configurá programas de lealtad y tarjetas de regalo para tus clientes.</p></section>
<section><h3>Contabilidad</h3><p>Organizá cuentas, asientos contables y estados financieros.</p></section>
<section><h3>Seguridad</h3><p>Administrá miembros del equipo, invitaciones y permisos de acceso.</p></section>
<section><h3>Auditoría</h3><p>Revisá cambios en los registros, sus responsables y versiones anteriores.</p></section>
<section><h3>Configuración</h3><p>Configurá la organización, sucursales y aplicaciones conectadas.</p></section>
</div>

## Punto de venta de escritorio

La aplicación con Electron ofrece un espacio de trabajo para el mostrador, con selección de pagos, totales y controles de lealtad. También se conecta con impresoras térmicas de recibos.

<figure className="product-shot"><a href="/img/storefront/desktop-grid.webp" target="_blank" rel="noreferrer"><img src="/img/storefront/desktop-grid.webp" alt="Cuadrícula de productos del POS de escritorio con fotos, precios, existencias y la venta actual" loading="lazy" /></a><figcaption>Cuadrícula de productos del POS de escritorio. Abrí la imagen para verla en tamaño completo.</figcaption></figure>

## Reportes de ventas

<figure className="product-shot"><a href="/img/storefront/dashboard-20261005.webp" target="_blank" rel="noreferrer"><img src="/img/storefront/dashboard-20261005.webp" alt="Panel con gráficos de ventas y desempeño de productos" loading="lazy" /></a><figcaption>Las tendencias de ventas, los productos destacados y los medios de pago permiten analizar el desempeño del comercio.</figcaption></figure>

## Mi trabajo de ingeniería

El producto abarca el navegador, la computadora del mostrador y el backend. Mi trabajo incluye interfaces de usuario, reglas de negocio, integración de terminales de pago y conexión con dispositivos físicos.

- **Aplicación web**: React y TypeScript con Vite, TanStack Router, TanStack Query y componentes de interfaz compartidos.
- **POS de escritorio**: Electron y React, con impresión térmica mediante ESC/POS y conexiones USB o impresoras del sistema.
- **Pagos**: Integración con BAC Credomatic para ventas y reembolsos desde terminales.
- **Backend y datos**: Hono sobre Bun, APIs con tRPC, PostgreSQL con Drizzle y Redis para estado compartido y mensajería.
- **Autenticación y arquitectura**: Better Auth y un monorepo Bun/Turborepo con servicios de negocio separados para ventas, inventario, compras, pagos, contabilidad y otras áreas.

<figure className="product-shot"><a href="/img/storefront/bodega-20261005.webp" target="_blank" rel="noreferrer"><img src="/img/storefront/bodega-20261005.webp" alt="Existencias de productos por bodega en Storefront" loading="lazy" /></a><figcaption>Las existencias por bodega conectan el control de inventario con la operación diaria.</figcaption></figure>
