// src/utils/generateInvoice.js

/**
 * =========================================
 * GENERATE INVOICE UTILITY
 * =========================================
 * Creates invoice object for orders
 * =========================================
 */

import formatPrice from "./formatPrice";

// ================= GENERATE INVOICE =================
const generateInvoice = ({
  customer,
  products,
  paymentMethod = "Cash On Delivery",
  shippingAddress,
}) => {

  // ================= DATE =================
  const invoiceDate =
    new Date().toLocaleDateString(
      "en-IN"
    );

  // ================= INVOICE ID =================
  const invoiceId = `INV-${Date.now()}`;

  // ================= CALCULATE TOTAL =================
  const subtotal =
    products.reduce(
      (acc, item) =>
        acc +
        item.price *
          item.quantity,
      0
    );

  const shippingCharge = 0;

  const tax =
    subtotal * 0.18;

  const total =
    subtotal +
    tax +
    shippingCharge;

  // ================= FORMATTED PRODUCTS =================
  const formattedProducts =
    products.map(
      (item) => ({
        id: item.id,

        name: item.name,

        quantity:
          item.quantity,

        price:
          formatPrice(
            item.price
          ),

        total:
          formatPrice(
            item.price *
              item.quantity
          ),
      })
    );

  // ================= FINAL INVOICE =================
  const invoice = {
    invoiceId,

    invoiceDate,

    customer,

    shippingAddress,

    paymentMethod,

    products:
      formattedProducts,

    summary: {
      subtotal:
        formatPrice(
          subtotal
        ),

      tax:
        formatPrice(tax),

      shipping:
        formatPrice(
          shippingCharge
        ),

      total:
        formatPrice(total),
    },
  };

  return invoice;
};

export default generateInvoice;