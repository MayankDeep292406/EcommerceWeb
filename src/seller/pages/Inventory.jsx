import React, { useState } from "react";

const Inventory = () => {
  const [products] = useState([
    {
      name: "Modern Fabric Sofa",
      sku: "FSF1001",
      category: "Sofas",
      price: 24999,
      stock: 25,
      status: "In Stock",
    },
    {
      name: "King Size Wooden Bed",
      sku: "FSB2002",
      category: "Beds",
      price: 32999,
      stock: 12,
      status: "In Stock",
    },
    {
      name: "Dining Table Set (6 Seater)",
      sku: "FDT3003",
      category: "Tables",
      price: 18999,
      stock: 5,
      status: "Low Stock",
    },
    {
      name: "3 Door Wardrobe",
      sku: "FWR4004",
      category: "Storage",
      price: 15499,
      stock: 0,
      status: "Out of Stock",
    },
    {
      name: "Ergonomic Office Chair",
      sku: "FCH5005",
      category: "Chairs",
      price: 8999,
      stock: 30,
      status: "In Stock",
    },
    {
      name: "Wooden Coffee Table",
      sku: "FCT6006",
      category: "Tables",
      price: 6499,
      stock: 8,
      status: "Low Stock",
    },
  ]);

  const totalProducts = products.length;
  const inStock = products.filter((p) => p.status === "In Stock").length;
  const lowStock = products.filter((p) => p.status === "Low Stock").length;
  const outOfStock = products.filter((p) => p.status === "Out of Stock").length;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Product Inventory</h2>

      {/* Inventory Stats */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div><strong>Total Products:</strong> {totalProducts}</div>
        <div><strong>In Stock:</strong> {inStock}</div>
        <div><strong>Low Stock:</strong> {lowStock}</div>
        <div><strong>Out of Stock:</strong> {outOfStock}</div>
      </div>

      {/* Product Table */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: "2px solid #ccc", padding: "8px" }}>
              Product
            </th>
            <th style={{ borderBottom: "2px solid #ccc", padding: "8px" }}>
              Category
            </th>
            <th style={{ borderBottom: "2px solid #ccc", padding: "8px" }}>
              Price
            </th>
            <th style={{ borderBottom: "2px solid #ccc", padding: "8px" }}>
              Stock
            </th>
            <th style={{ borderBottom: "2px solid #ccc", padding: "8px" }}>
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={index}>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>
                {p.name} <br />
                <small>SKU: {p.sku}</small>
              </td>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>
                {p.category}
              </td>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>
                ₹{p.price.toLocaleString()}
              </td>
              <td style={{ borderBottom: "1px solid #eee", padding: "8px" }}>
                {p.stock}
              </td>
              <td
                style={{
                  borderBottom: "1px solid #eee",
                  padding: "8px",
                  color:
                    p.status === "Low Stock"
                      ? "orange"
                      : p.status === "Out of Stock"
                      ? "red"
                      : "green",
                }}
              >
                {p.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
