# Storefront POS

**Commercial product** | Web and desktop software for retailers in Nicaragua

Storefront connects the checkout counter with the rest of a retail business: sales, stock, purchasing, customers, money, and reporting. I develop the product across its web application, desktop POS, backend services, and integrations.

<figure className="product-shot">
  <a href="/img/storefront/dashboard-20261005.webp" target="_blank" rel="noreferrer"><img src="/img/storefront/dashboard-20261005.webp" alt="Storefront sales dashboard showing sales trends, top products, and payment summaries" /></a>
  <figcaption>Sales dashboard. Screenshot from the current Storefront website, October 2026. Open the image to view it at full size.</figcaption>
</figure>

## Modules and What They Do

Storefront organizes retail operations into 12 modules. Feature availability and capacity depend on the subscription plan and enabled add-ons.

<div className="module-grid">
<section><h3>Point of sale</h3><p>Manage checkout devices, cash registers, cashier sessions, and receipt settings.</p></section>
<section><h3>Sales</h3><p>Review sales and returns, track payment status, and follow up on customer balances.</p></section>
<section><h3>Inventory</h3><p>Manage products, categories, price lists, and stock across warehouses, including transfers, counts, and losses.</p></section>
<section><h3>Purchasing</h3><p>Organize suppliers, record purchases, and track accounts payable.</p></section>
<section><h3>BAC Credomatic</h3><p>Manage BAC terminals, card sales, refunds, bank points, and terminal closures.</p></section>
<section><h3>Customers</h3><p>Maintain customer contacts and review their outstanding balances.</p></section>
<section><h3>Finance</h3><p>Manage money accounts, income, expenses, and loans.</p></section>
<section><h3>Marketing</h3><p>Configure customer loyalty programs and gift cards.</p></section>
<section><h3>Accounting</h3><p>Organize accounts, journal entries, and financial statements.</p></section>
<section><h3>Security</h3><p>Manage team members, invitations, and access permissions.</p></section>
<section><h3>Audit</h3><p>Review record changes, who made them, and previous versions.</p></section>
<section><h3>Settings</h3><p>Configure the organization, branches, and connected applications.</p></section>
</div>

## Desktop Checkout

The Electron app provides a dedicated checkout workspace for the counter, with payment selection, sale totals, and customer loyalty controls. It also connects with thermal receipt printers.

<figure className="product-shot">
  <a href="/img/storefront/desktop-checkout.jpg" target="_blank" rel="noreferrer"><img src="/img/storefront/desktop-checkout.jpg" alt="Storefront Electron desktop checkout with payment methods, demo customer, loyalty points, and sale totals" loading="lazy" /></a>
  <figcaption>Actual desktop application screenshot using a demo customer. Open the image to view the checkout at full size.</figcaption>
</figure>

## Web Sales Workspace

<figure className="product-shot">
  <a href="/img/storefront/venta-20261005.webp" target="_blank" rel="noreferrer"><img src="/img/storefront/venta-20261005.webp" alt="Storefront sale entry screen with customer details, products, quantities, and total" loading="lazy" /></a>
  <figcaption>The sales workflow brings customers, products, and totals together in one screen.</figcaption>
</figure>

## My Engineering Work

The product spans the browser, the checkout computer, and the backend. My work includes building user interfaces, implementing retail business rules, integrating payment terminals, and connecting physical hardware with the application.

- **Web application**: React and TypeScript with Vite, TanStack Router, TanStack Query, and shared UI components.
- **Desktop POS**: An Electron application with React, plus thermal receipt printing through ESC/POS and USB or system printer transports.
- **Payments**: BAC Credomatic integration for terminal payment workflows, including sales and refunds.
- **Backend and data**: Hono running on Bun, tRPC APIs, PostgreSQL with Drizzle, and Redis for shared application state and messaging.
- **Authentication and architecture**: Better Auth and a Bun/Turborepo monorepo with separate business services for sales, stock, purchasing, payments, accounting, and other domains.

<figure className="product-shot">
  <a href="/img/storefront/bodega-20261005.webp" target="_blank" rel="noreferrer"><img src="/img/storefront/bodega-20261005.webp" alt="Storefront warehouse stock view showing product quantities by warehouse" loading="lazy" /></a>
  <figcaption>Warehouse stock visibility connects inventory management with daily store operations.</figcaption>
</figure>

## Explore Storefront

Visit [storefrontpos.com](https://storefrontpos.com) for the product overview, current plans, and a demo, or [open the application](https://app.storefrontpos.com).

The source code is private. For a technical walkthrough of my work, [get in touch by email](mailto:dfrn2003@gmail.com).
