import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 12000, orders: 32 },
  { month: "Feb", sales: 18000, orders: 48 },
  { month: "Mar", sales: 22000, orders: 60 },
  { month: "Apr", sales: 28000, orders: 72 },
  { month: "May", sales: 35000, orders: 85 },
  { month: "Jun", sales: 40000, orders: 96 },
];

const categoryData = [
  { name: "Sofas", value: 35 },
  { name: "Beds", value: 25 },
  { name: "Chairs", value: 15 },
  { name: "Tables", value: 15 },
  { name: "Wardrobes", value: 10 },
];

const COLORS = [
  "#3B82F6",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

export default function AnalyticsChart() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Seller Analytics Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          Monitor your furniture store performance and sales.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-gray-500 text-sm">Total Revenue</h2>
          <p className="text-2xl font-bold text-green-600 mt-2">₹1,55,000</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-gray-500 text-sm">Total Orders</h2>
          <p className="text-2xl font-bold text-blue-600 mt-2">393</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-gray-500 text-sm">Products Sold</h2>
          <p className="text-2xl font-bold text-purple-600 mt-2">620</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-gray-500 text-sm">Customers</h2>
          <p className="text-2xl font-bold text-orange-500 mt-2">210</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Chart */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Monthly Sales
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#3B82F6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Orders Chart */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Monthly Orders
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" fill="#10B981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Pie Chart */}
      <div className="bg-white rounded-2xl shadow-md p-5 mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Product Category Sales
        </h2>

        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {categoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
