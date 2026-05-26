import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Nav from "./Component/NavBar/NavBar";

/* =========================
   Main Pages
========================= */

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import SocialLogin from "./pages/SocialLogin";
import ResetPassword from "./pages/ResetPassword";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import OrderSummary from "./pages/OrderSummary";
import PaymentPage from "./pages/PaymentPage";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
/* =========================
   Admin Pages
========================= */

import Admin from "./Admin/Admin";
import AdminDashboard from "./Admin/AdminDashboard";
import ManageOrder from "./Admin/ManageOrder";
import ManageUsers from "./Admin/ManageUsers";

/* =========================
   Shopping Pages
========================= */

import Final from "./ShoppingCart/Final";
import Products from "./ShoppingCart/Products";
import ViewProducts from "./ShoppingCart/ViewProducts";

/* =========================
   Landing Components
========================= */

import LikeCard from "./Component/LandingPage/LikeCard";
import LikedPage from "./Component/LandingPage/LikedPage";
import LikedProducts from "./Component/LandingPage/LikedProducts";
import TopProduct from "./Component/LandingPage/TopProduct";
import AllProducts from "./Component/LandingPage/AllProducts";

/* =========================
   Order & Payment
========================= */

import Order from "./Component/API/Order";
import Payment from "./Component/API/Payment";

/* =========================
   Context Providers
========================= */

import AuthProvider from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";

/* =========================
   Seller Routes
========================= */

import SellerRoutes from "./seller/routes/sellerRoutes";

/* =========================
   Seller Pages
========================= */

import Analytics from "./seller/pages/Analytics";
import Coupons from "./seller/pages/Coupons";
import SellerProducts from "./seller/pages/products";
import Customers from "./seller/pages/Customers";
import AddProduct from "./seller/pages/AddProduct";
import EditProduct from "./seller/pages/EditProduct";
import SellerDashboard from "./seller/pages/SellerDashboard";
import SellerOrders from "./seller/pages/sellerOrders";
import Inventory from "./seller/pages/Inventory";
import Reviews from "./seller/pages/Reviews";
import Settings from "./seller/pages/Settings";
import SellerRegister from "./seller/pages/sellerRegister";
import Notifications from "./seller/pages/Notifications";
import OrderDetails from "./seller/pages/OrderDetails";
import Payments from "./seller/pages/Payments";

/* =========================
   Seller Components
========================= */

import AnalyticsChart from "./seller/components/AnalyticsChart";
import CouponCard from "./seller/components/CouponCard";
import CustomerTable from "./seller/components/CustomerTable";
import NotificationCard from "./seller/components/NotificationCard";
import OrderTable from "./seller/components/OrderTable";
import ProductTable from "./seller/components/ProductTable";
import ReviewCard from "./seller/components/ReviewCard";
import SellerLoader from "./seller/components/SellerLoader";
import Sidebar from "./seller/components/Sidebar";
import StatsCard from "./seller/components/StatsCard";
import Topbar from "./seller/components/Topbar";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>

          <Router>

            {/* Navbar */}
            <Nav />

            <Routes>

              {/* =========================
                  Main Routes
              ========================= */}

              <Route path="/" element={<Home />} />

              <Route
                path="/products"
                element={<Products />}
              />

              <Route
                path="/signup"
                element={<Signup />}
              />

              <Route
                path="/register"
                element={<Register />}
              />

              <Route
                path="/profile"
                element={<Profile />}
              />

              <Route
                path="/about"
                element={<About />}
              />

              <Route
                path="/contact"
                element={<Contact />}
              />

              <Route
                path="/social-login"
                element={<SocialLogin />}
              />

              <Route
                path="/cart"
                element={<Cart />}
              />

              <Route
                path="/wishlist"
                element={<Wishlist />}
              />

              <Route
                path="/order-summary"
                element={<OrderSummary />}
              />

              <Route
                path="/payment"
                element={<PaymentPage />}
              />

              <Route
                path="/reset-password/:token"
                element={<ResetPassword />}
              />

              <Route
                path="/product/:id"
                element={<ProductDetails />}
              />

              <Route
                path="/categories"
                element={<Categories />}
              />

              {/* =========================
                  Shopping Cart
              ========================= */}

              <Route
                path="/ViewProducts"
                element={<ViewProducts />}
              />

              <Route
                path="/final"
                element={<Final />}
              />

              {/* =========================
                  Landing Pages
              ========================= */}

              <Route
                path="/like-card"
                element={<LikeCard />}
              />

              <Route
                path="/liked-page"
                element={<LikedPage />}
              />

              <Route
                path="/liked-product"
                element={<LikedProducts />}
              />

              <Route
                path="/top-products"
                element={<TopProduct />}
              />

              <Route
                path="/all-products"
                element={<AllProducts />}
              />

              {/* =========================
                  Order & Payment
              ========================= */}

              <Route
                path="/order"
                element={<Order />}
              />

              <Route
                path="/payment-api"
                element={<Payment />}
              />


              {/* =========================
                  Admin Routes
              ========================= */}

              <Route
                path="/admin"
                element={<Admin />}
              />

              <Route
                path="/admin/dashboard"
                element={<AdminDashboard />}
              />

              <Route
                path="/admin/manage-orders"
                element={<ManageOrder />}
              />

              <Route
                path="/admin/manage-users"
                element={<ManageUsers />}
              />

              {/* =========================
                  Seller Route System
              ========================= */}

              <Route
                path="/seller/*"
                element={<SellerRoutes />}
              />

              {/* =========================
                  Seller Pages
              ========================= */}

              <Route
                path="/seller/dashboard"
                element={<SellerDashboard />}
              />

              <Route
                path="/seller/products"
                element={<SellerProducts />}
              />

              <Route
                path="/seller/orders"
                element={<SellerOrders />}
              />

              <Route
                path="/seller/customers"
                element={<Customers />}
              />

              <Route
                path="/seller/add-product"
                element={<AddProduct />}
              />

              <Route
                path="/seller/edit-product/:id"
                element={<EditProduct />}
              />

              <Route
                path="/seller/analytics"
                element={<Analytics />}
              />

              <Route
                path="/seller/coupons"
                element={<Coupons />}
              />

              <Route
                path="/seller/inventory"
                element={<Inventory />}
              />

              <Route
                path="/seller/reviews"
                element={<Reviews />}
              />

              <Route
                path="/seller/settings"
                element={<Settings />}
              />

              <Route
                path="/seller/register"
                element={<SellerRegister />}
              />

              <Route
                path="/seller/notifications"
                element={<Notifications />}
              />

              <Route
                path="/seller/order-details/:id"
                element={<OrderDetails />}
              />

              <Route
                path="/seller/payments"
                element={<Payments />}
              />

              {/* =========================
                  Seller Components
              ========================= */}

              <Route
                path="/seller/analytics-chart"
                element={<AnalyticsChart />}
              />

              <Route
                path="/seller/coupon-card"
                element={<CouponCard />}
              />

              <Route
                path="/seller/customer-table"
                element={<CustomerTable />}
              />

              <Route
                path="/seller/notification-card"
                element={<NotificationCard />}
              />

              <Route
                path="/seller/order-table"
                element={<OrderTable />}
              />

              <Route
                path="/seller/product-table"
                element={<ProductTable />}
              />

              <Route
                path="/seller/review-card"
                element={<ReviewCard />}
              />

              <Route
                path="/seller/loader"
                element={<SellerLoader />}
              />

              <Route
                path="/seller/sidebar"
                element={<Sidebar />}
              />

              <Route
                path="/seller/stats-card"
                element={<StatsCard />}
              />

              <Route
                path="/seller/topbar"
                element={<Topbar />}
              />

            </Routes>

          </Router>

        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;