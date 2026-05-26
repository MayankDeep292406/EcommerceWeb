import React, { useState } from "react";

const initialUsers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    role: "Admin",
    status: "Active",
    joinedOn: "May 15, 2024",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Priya Mehta",
    email: "priya.mehta@example.com",
    role: "Editor",
    status: "Active",
    joinedOn: "May 18, 2024",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Amit Verma",
    email: "amit.verma@example.com",
    role: "Customer Support",
    status: "Active",
    joinedOn: "May 20, 2024",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    email: "neha.kapoor@example.com",
    role: "Editor",
    status: "Inactive",
    joinedOn: "May 22, 2024",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Sandeep Yadav",
    email: "sandeep.yadav@example.com",
    role: "Customer Support",
    status: "Active",
    joinedOn: "May 25, 2024",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Kritika Singh",
    email: "kritika.singh@example.com",
    role: "Viewer",
    status: "Active",
    joinedOn: "May 28, 2024",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 7,
    name: "Vikram Joshi",
    email: "vikram.joshi@example.com",
    role: "Viewer",
    status: "Inactive",
    joinedOn: "May 30, 2024",
    avatar: "https://randomuser.me/api/portraits/men/7.jpg",
  },
];

const roleColors = {
  Admin: "bg-orange-200 text-orange-800",
  Editor: "bg-blue-200 text-blue-800",
  "Customer Support": "bg-purple-200 text-purple-800",
  Viewer: "bg-yellow-200 text-yellow-800",
};

const statusColors = {
  Active: "bg-green-200 text-green-800",
  Inactive: "bg-red-200 text-red-800",
};

const ManageUsers = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("All Roles");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole =
      selectedRole === "All Roles" || user.role === selectedRole;

    return matchesSearch && matchesRole;
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleEdit = (id) => {
    alert("Edit functionality to be implemented for user ID: " + id);
  };

  const handleAddUser = () => {
    alert("Add New User functionality to be implemented.");
  };

  return (
    <div className="flex flex-col p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-1">Manage Users</h1>
      <p className="text-gray-600 mb-4">
        View, edit, and manage users of your furniture shop.
      </p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name, email or role..."
          className="border rounded-md p-2 w-full md:w-72"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="flex gap-3 items-center">
          <select
            className="border rounded-md p-2"
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <option>All Roles</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>Customer Support</option>
            <option>Viewer</option>
          </select>

          <button
            onClick={handleAddUser}
            className="text-white px-4 py-2 rounded-md hover:opacity-90"
            style={{ backgroundColor: "#8B5E3C" }}
          >
            + Add New User
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border-b text-left w-8">#</th>
              <th className="p-3 border-b text-left">User</th>
              <th className="p-3 border-b text-left">Email</th>
              <th className="p-3 border-b text-left">Role</th>
              <th className="p-3 border-b text-left">Status</th>
              <th className="p-3 border-b text-left">Joined On</th>
              <th className="p-3 border-b text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length ? (
              filteredUsers.map((user, index) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="p-3 border-b">{index + 1}</td>

                  <td className="p-3 border-b flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{user.name}</span>
                  </td>

                  <td className="p-3 border-b">{user.email}</td>

                  {/* ✅ FIXED ROLE BADGE */}
                  <td className="p-3 border-b">
                    <span
                      className={`px-3 py-1 rounded-md text-sm font-medium inline-block ${roleColors[user.role]}`}
                    >
                      {user.role}
                    </span>
                  </td>

                  {/* ✅ FIXED STATUS BADGE */}
                  <td className="p-3 border-b">
                    <span
                      className={`px-3 py-1 rounded-md text-sm font-medium inline-block ${statusColors[user.status]}`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="p-3 border-b">{user.joinedOn}</td>

                  <td className="p-3 border-b flex gap-2">
                    <button
                      onClick={() => handleEdit(user.id)}
                      className="hover:text-blue-600"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="hover:text-red-600"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="text-center p-6">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        Showing {filteredUsers.length} of {users.length} users
      </p>
    </div>
  );
};

export default ManageUsers;