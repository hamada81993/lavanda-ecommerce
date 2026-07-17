import "./App.css";

import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/sections/Header";
import Footer from "./components/sections/footer";

import CategoryPage from "./pages/makeup/CategoryPage";
import Home from "./pages/Home";
import Wishlist from "./pages/Wishlist/Whishlist";

import Cart from "./pages/Cart/Cart";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { brand } from "./config/brand";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import { applyTheme } from "./theme/applyTheme";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import CategoryDetails from "./components/Category/CategoryDetails ";
import Search from "./pages/Search/Search";
import CheckoutPage from "./pages/Shipping/Shipping";
import Payment from "./pages/Payment/Payment";
import ForgotPassword from "./components/auth/ForgotPassword";
import EmailSent from "./components/auth/EmailSent";
import ResetPassword from "./components/auth/ResetPassword";
import OTPVerification from "./components/auth/OTPVerification";
 import ProfileLayout from "./pages/Profile/ProfileLayout"
//  import Dashboard from "./pages/Profile/Dashboard"
 import Profile from "./pages/Profile/Profile"
//  import Address from "./pages/Profile/Address"
 import Orders from "./pages/Profile/Orders/Orders"
import OrderDetails from "./pages/Profile/Orders/OrderDetails";
import AllRefunds from "./pages/Profile/Orders/AllRefunds";
import Address from "./pages/Profile/Address/Address";
import SubCategory from "./components/Category/SubCategory";
import Layout from "./components/Layout/Layout";
import Dashboard from "./pages/Profile/Dashboard";
import Blogs from "./pages/Blogs";
import BlogDetailsPage from "./pages/BlogDetailsPage";

//  import PaymentMethod from "./pages/Profile/PaymentMethod"
//  import Setting from "./pages/Profile/Setting"



function App() {
 useEffect(() => {
  applyTheme();
}, []);
useEffect(() => {
  window.fbAsyncInit = function () {
    window.FB.init({
      appId: "YOUR_FACEBOOK_APP_ID",
      cookie: true,
      xfbml: false,
      version: "v23.0",
    });
  };
}, []);
  return (
    <>
          <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="light"
      />
       <Routes>
     
      <Route element={<Layout/>}>
        <Route path="/" element={<Home />} />
        <Route
path="/search"
element={<Search/>}
/>
         <Route
    path="/register"
    element={<Register/>}
  />

  <Route
    path="/login"
    element={<Login/>}
  />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<CheckoutPage/>} />
        
        <Route path="/payment" element={<Payment/>} />
        {/* <Route path="/:category/:type" element={<CategoryPage />} /> */}
        <Route path="/subcategory/:id" element={<SubCategory/>} />
        <Route
  path="/category/:id"
  element={<CategoryPage />}
/>
        <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

<Route
  path="/email-sent"
  element={<EmailSent/>}
/>

<Route
  path="/otp"
  element={<OTPVerification/>}
/>
<Route
  path="/reset-password"
  element={<ResetPassword/>}
/>

        <Route path="/product/:id" element={<ProductDetails/>} />
                                <Route
  path="/category/:id"
  element={<CategoryDetails/>}
/> 
      <Route path="/profile-layout" element={<ProfileLayout/>}>

<Route index element={<Dashboard />} />

    <Route
        path="profile"
        element={<Profile />}
    />

<Route
  path="/profile-layout/orders/:id"
  element={<OrderDetails/>}
/>
<Route
  path="/profile-layout/refunds"
  element={<AllRefunds />}
/>
    <Route
        path="orders"
        element={<Orders/>}
    />

    <Route
        path="/profile-layout/address"
        element={<Address/>}
    />
      </Route>

    
<Route path="/blogs" element={<Blogs/>} />
  <Route
    path="/blogs/:id"
    element={<BlogDetailsPage/>}
  />
    {/* <Route
        path="payment"
        element={<PaymentMethod/>}
    /> */}

    {/* <Route
        path="notification"
        element={<Notification />}
    />

    <Route
        path="setting"
        element={<Setting />}
    />  */}

</Route>

    </Routes>
    
    </>
  );
}

export default App;