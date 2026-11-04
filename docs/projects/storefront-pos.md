# Storefront POS

**Commercial product** | Web and desktop software for retailers in Nicaragua

Storefront connects the checkout counter with the rest of a retail business: sales, stock, purchasing, customers, money, and reporting. I develop the product across its web application, desktop POS, backend services, and integrations.

<figure className="product-shot">
  <a href="/img/storefront/dashboard-20261005.webp" target="_blank" rel="noreferrer"><img src="/img/storefront/dashboard-20261005.webp" alt="Storefront sales dashboard showing sales trends, top products, and payment summaries" /></a>
  <figcaption>Sales dashboard. Screenshot from the current Storefront website, October 2026. Open the image to view it at full size.</figcaption>
</figure>

## One Connected Retail Operation

- **Sales and cash registers**: Record sales and payments, review transaction history, process returns, and manage cashier sessions.
- **Inventory and warehouses**: Organize products and price lists, track stock by warehouse, and handle transfers, counts, and losses.
- **Purchasing and suppliers**: Record purchases and connect incoming merchandise with inventory and supplier balances.
- **Customers and balances**: Maintain customer records and follow up on accounts receivable and payable.
- **Money and accounting**: Manage money accounts, record income and expenses, and review accounting information.
- **Reporting and access**: Review business results from a browser and organize staff permissions, registers, warehouses, and branches. Available capacity depends on the subscription plan.

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
