// src/seller/utils/exportInvoice.js

import {
  formatCurrency,
} from "./calculateRevenue";

/* ==========================================
   GENERATE INVOICE DATA (OBJECT)
========================================== */

export const generateInvoiceData =
  (order) => {
    if (!order) return null;

    return {
      invoiceNo:
        `INV-${order._id || order.id}`,

      orderId:
        order._id || order.id,

      customerName:
        order.customerName ||
        order.customer ||
        "Unknown Customer",

      customerPhone:
        order.phone || "N/A",

      customerEmail:
        order.email || "N/A",

      address:
        order.address ||
        "Not Provided",

      date:
        new Date(
          order.createdAt ||
            Date.now()
        ).toLocaleDateString(
          "en-IN"
        ),

      paymentMethod:
        order.paymentMethod ||
        "Cash",

      paymentStatus:
        order.paymentStatus ||
        "Pending",

      items:
        order.products || [],

      subtotal:
        order.subtotal ||
        order.totalPrice ||
        0,

      shipping:
        order.shipping || 0,

      discount:
        order.discount || 0,

      total:
        order.totalPrice || 0,
    };
  };

/* ==========================================
   CREATE INVOICE HTML
========================================== */

export const generateInvoiceHTML =
  (order) => {
    const invoice =
      generateInvoiceData(
        order
      );

    if (!invoice)
      return "";

    return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Invoice ${invoice.invoiceNo}</title>

  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 30px;
      color: #333;
    }

    .header {
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #f59e0b;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }

    .title {
      font-size: 24px;
      font-weight: bold;
      color: #f59e0b;
    }

    .section {
      margin-bottom: 20px;
    }

    .box {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 8px;
      margin-top: 5px;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 15px;
    }

    table th, table td {
      border: 1px solid #ddd;
      padding: 10px;
      text-align: left;
    }

    table th {
      background: #f3f4f6;
    }

    .total {
      text-align: right;
      font-size: 18px;
      font-weight: bold;
      margin-top: 20px;
      color: #16a34a;
    }

    .status {
      padding: 5px 10px;
      border-radius: 20px;
      display: inline-block;
      font-size: 12px;
      font-weight: bold;
    }

    .paid {
      background: #dcfce7;
      color: #166534;
    }

    .pending {
      background: #fef9c3;
      color: #854d0e;
    }
  </style>
</head>

<body>

  <div class="header">
    <div>
      <div class="title">Furniture Store Invoice</div>
      <p>Invoice No: ${invoice.invoiceNo}</p>
    </div>

    <div>
      <p><strong>Date:</strong> ${invoice.date}</p>
      <p>
        <span class="status ${
          invoice.paymentStatus === "Paid"
            ? "paid"
            : "pending"
        }">
          ${invoice.paymentStatus}
        </span>
      </p>
    </div>
  </div>

  <div class="section">
    <h3>Customer Details</h3>
    <div class="box">
      <p><strong>Name:</strong> ${
        invoice.customerName
      }</p>
      <p><strong>Phone:</strong> ${
        invoice.customerPhone
      }</p>
      <p><strong>Email:</strong> ${
        invoice.customerEmail
      }</p>
      <p><strong>Address:</strong> ${
        invoice.address
      }</p>
    </div>
  </div>

  <div class="section">
    <h3>Order Items</h3>

    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>

      <tbody>
        ${invoice.items
          .map(
            (item) => `
          <tr>
            <td>${
              item.name
            }</td>
            <td>${
              item.quantity || 1
            }</td>
            <td>${formatCurrency(
              item.price || 0
            )}</td>
            <td>${formatCurrency(
              (item.price || 0) *
                (item.quantity ||
                  1)
            )}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>

    <div class="total">
      Grand Total: ${formatCurrency(
        invoice.total
      )}
    </div>
  </div>

</body>
</html>
    `;
  };

/* ==========================================
   DOWNLOAD INVOICE
========================================== */

export const downloadInvoice =
  (order) => {
    const html =
      generateInvoiceHTML(
        order
      );

    const blob = new Blob(
      [html],
      {
        type: "text/html",
      }
    );

    const url =
      URL.createObjectURL(
        blob
      );

    const link =
      document.createElement(
        "a"
      );

    link.href = url;

    link.download = `invoice-${order._id ||
      order.id}.html`;

    document.body.appendChild(
      link
    );

    link.click();

    document.body.removeChild(
      link
    );

    URL.revokeObjectURL(url);
  };