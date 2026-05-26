import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const productSalesData = [
  { date: "1 Jul", grossMargin: 30, revenue: 40 },
  { date: "2 Jul", grossMargin: 25, revenue: 46 },
  { date: "3 Jul", grossMargin: 18, revenue: 60 },
  { date: "4 Jul", grossMargin: 50, revenue: 55 },
  { date: "5 Jul", grossMargin: 45, revenue: 50 },
  { date: "6 Jul", grossMargin: 40, revenue: 60 },
  { date: "7 Jul", grossMargin: 55, revenue: 65 },
];

const salesCategoryData = [
  { name: "Living room", value: 25, color: "#6a4c93" },
  { name: "Kids", value: 17, color: "#82ca9d" },
  { name: "Office", value: 13, color: "#8884d8" },
  { name: "Bedroom", value: 12, color: "#8dd1e1" },
];

const salesCountries = [
  { name: "Poland", percent: 19 },
  { name: "Austria", percent: 15 },
  { name: "Spain", percent: 13 },
  { name: "Germany", percent: 10 },
];

 function SellerDashboard() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`dashboard-container ${darkMode ? "dark" : ""}`}
      style={{
        display: "flex",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: 240,
          background: darkMode ? "#1e1e1e" : "#f4f6f8",
          padding: 20,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div style={{ fontWeight: "bold", fontSize: 22, marginBottom: 30 }}>
            Shop_Now
          </div>

          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {[
                "Dashboard",
                "Marketplace",
                "Orders",
                "Tracking",
                "Customers",
                "Settings",
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    padding: "10px 0",
                    cursor: "pointer",
                    fontWeight: item === "Dashboard" ? "bold" : "normal",
                    color: item === "Dashboard" ? "#00796b" : "#555",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </nav>

          <div style={{ marginTop: 20 }}>
            <label>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />{" "}
              Dark mode
            </label>
          </div>
        </div>

        <div>
          <div style={{ fontWeight: "bold" }}>Harper Nelson</div>
          <div style={{ fontSize: 12, color: "#888" }}>Admin Manager</div>
        </div>
      </aside>

      {/* Main */}
      <main
        style={{
          flex: 1,
          padding: 30,
          background: darkMode ? "#2c2c2c" : "#fff",
          color: darkMode ? "#fff" : "#000",
          overflowY: "auto",
        }}
      >
        <h1>Dashboard</h1>

        {/* Stats */}
        <section style={{ display: "flex", gap: 15, marginBottom: 30 }}>
          {[
            { title: "Customers", value: "567,899", change: 2.5 },
            { title: "Revenue", value: "$3,465M", change: 0.5 },
            { title: "Orders", value: "1,136M", change: -0.2 },
            { title: "Returns", value: "1,789", change: 0.12 },
          ].map((stat) => (
            <div
              key={stat.title}
              style={{
                flex: 1,
                padding: 15,
                borderRadius: 8,
                border: `1px solid ${darkMode ? "#444" : "#ddd"}`,
                background: darkMode ? "#3a3a3a" : "#fafafa",
              }}
            >
              <div>{stat.title}</div>
              <h3>{stat.value}</h3>
              <span
                style={{
                  color: stat.change >= 0 ? "green" : "red",
                }}
              >
                {stat.change > 0 ? "▲" : "▼"} {Math.abs(stat.change)}%
              </span>
            </div>
          ))}
        </section>

        {/* Bar Chart */}
        <section
          style={{
            background: darkMode ? "#3a3a3a" : "#fafafa",
            padding: 20,
            borderRadius: 8,
            marginBottom: 30,
          }}
        >
          <h2>Product Sales</h2>

          <BarChart width={800} height={250} data={productSalesData}>
            <XAxis dataKey="date" stroke={darkMode ? "#fff" : "#000"} />
            <YAxis stroke={darkMode ? "#fff" : "#000"} />
            <Tooltip />
            <Legend />
            <Bar dataKey="grossMargin" fill="#00796b" />
            <Bar dataKey="revenue" fill="#ffbb28" />
          </BarChart>
        </section>

        {/* Pie + Countries */}
        <section style={{ display: "flex", gap: 20 }}>
          <div style={{ flex: 1 }}>
            <h3>Category Sales</h3>

            <PieChart width={300} height={250}>
              <Pie
                data={salesCategoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {salesCategoryData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </div>

          <div style={{ flex: 1 }}>
            <h3>Countries</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {salesCountries.map((c) => (
                <li
                  key={c.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <span>{c.name}</span>
                  <span>{c.percent}%</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
export default SellerDashboard;