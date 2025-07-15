import React from 'react';

const Admin = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <p className="text-gray-700">Welcome to the Admin Panel. Use the options below to manage the site.</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded shadow">📦 Manage Products</div>
                <div className="bg-white p-4 rounded shadow">👥 Manage Users</div>
                <div className="bg-white p-4 rounded shadow">📈 View Reports</div>
            </div>
        </div>
    );
};

export default Admin;
