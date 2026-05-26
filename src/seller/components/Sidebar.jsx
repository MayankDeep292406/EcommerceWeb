import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Users,
  BarChart3,
  TicketPercent,
  Settings,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  const menus = [
    {
      name: "Dashboard",
      icon: <LayoutDashboard size={20} />,
      path: "/seller",
    },
    {
      name: "Products",
      icon: <ShoppingBag size={20} />,
      path: "/seller/products",
    },
    {
      name: "Orders",
      icon: <Package size={20} />,
      path: "/seller/orders",
    },
    {
      name: "Customers",
      icon: <Users size={20} />,
      path: "/seller/customers",
    },
    {
      name: "Analytics",
      icon: <BarChart3 size={20} />,
      path: "/seller/analytics",
    },
    {
      name: "Coupons",
      icon: <TicketPercent size={20} />,
      path: "/seller/coupons",
    },
    {
      name: "Settings",
      icon: <Settings size={20} />,
      path: "/seller/settings",
    },
  ];

  return (
    <div className="w-64 bg-black text-white p-5">

      <h1 className="text-3xl font-bold mb-10">
        Seller Panel
      </h1>

      <div className="space-y-3">

        {menus.map((menu, index) => (
          <Link
            key={index}
            to={menu.path}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300
              ${location.pathname === menu.path
                ? "bg-blue-600"
                : "hover:bg-gray-800"
              }
            `}
          >
            {menu.icon}
            {menu.name}
          </Link>
        ))}

      </div>
    </div>
  );
}

export default Sidebar;