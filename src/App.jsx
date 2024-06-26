import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";
import Register from "./components/Register";
import Home from "./components/Home";
import ListProduct from "./components/ListProduct";
import Login from "./components/Login";
import UserProfile from "./components/Profile";
import Payment from "./components/Payment";
import Headerv2 from "./staffpages/Headerv2";
import DashBoard from "./staffpages/DashBoard";
import AllProduct from "./staffpages/AllProduct";
import AddProduct from "./staffpages/AddProduct";
import UpdateProduct from "./staffpages/UpdateProduct";
import SideBar from "./staffpages/SideBar";
import SideBarv2 from "./adminpages/SideBarv2";
import Dashboard from "./adminpages/Dashboard";
import ManagementStaff from "./adminpages/ManagementStaff";
import OrderList from "./staffpages/OrderList";
import OrderDetail from "./staffpages/OrderDetail";
import ManagementOrder from "./staffpages/ManagementOrder";
import StaffProfile from "./staffpages/StaffProfile";
import ManagementUser from "./staffpages/ManagementUser";
import UserDetail from "./staffpages/UserDetail";
import UserOrders from "./staffpages/UserOrders";
import ManagementProduct from "./staffpages/ManagementProduct";
function App() {
  return (
    <>
      <Router>
        {/* Routes for regular users */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/list-product"
            element={
              <>
                <Header />
                <ListProduct />
                <Footer />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <Header />
                <UserProfile />
                <Footer />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Header />
                <Register />
                <Footer />
              </>
            }
          />
          <Route
            path="/product-detail/:id"
            element={
              <>
                <Header />
                <ProductDetail />
                <Footer />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Header />
                <Cart />
                <Footer />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Payment />
                <Footer />
              </>
            }
          />
        </Routes>
        {/* Routes for staff */}
        <Routes>
          <Route
            path="/staff/dashboard"
            element={
              <>
                <div className="flex">
                  <SideBar />
                  <div className="flex-1">
                    <Headerv2 />

                    <Dashboard />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/staff/profile"
            element={
              <>
                <div className="flex">
                  <SideBar />
                  <div className="flex-1">
                    <Headerv2 />

                    <StaffProfile />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/staff/all-products"
            element={
              <>
                <div className="flex">
                  <SideBar />
                  <div className="flex-1">
                    <Headerv2 />

                    <AllProduct />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/staff/add-product"
            element={
              <>
                <div className="flex">
                  <SideBar />
                  <div className="flex-1">
                    <Headerv2 />

                    <AddProduct />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/staff/update-product/:id"
            element={
              <>
                <div className="flex">
                  <SideBar />
                  <div className="flex-1">
                    <Headerv2 />

                    <UpdateProduct />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/staff/management-user"
            element={
              <>
                <div className="flex">
                  <SideBar />
                  <div className="flex-1">
                    <Headerv2 />

                    <ManagementUser />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/staff/management-user/user-detail/:id"
            element={
              <>
                <div className="flex">
                  <SideBar />
                  <div className="flex-1">
                    <Headerv2 />

                    <UserDetail />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/staff/management-user/user-orders/:id"
            element={
              <>
                <div className="flex">
                  <SideBar />
                  <div className="flex-1">
                    <Headerv2 />

                    <UserOrders />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/staff/order-list"
            element={
              <>
                <div className="flex">
                  <SideBar />
                  <div className="flex-1">
                    <Headerv2 />

                    <OrderList />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/staff/order-list/order-detail/:id"
            element={
              <>
                <div className="flex">
                  <SideBar />
                  <div className="flex-1">
                    <Headerv2 />
                    <OrderDetail />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/staff/management-product"
            element={
              <>
                <div className="flex">
                  <SideBar />
                  <div className="flex-1">
                    <Headerv2 />
                    <ManagementProduct />
                  </div>
                </div>
              </>
            }
          />  
          <Route
            path="/staff/management-order"
            element={
              <>
                <div className="flex">
                  <SideBar />
                  <div className="flex-1">
                    <Headerv2 />
                    <ManagementOrder />
                  </div>
                </div>
              </>
            }
          />
        </Routes>
        {/* Routes for Admin */}
        <Routes>
          <Route
            path="/admin/dashboard"
            element={
              <>
                <div className="flex">
                  <SideBarv2 />
                  <div className="flex-1">
                    <Headerv2 />

                    <Dashboard />
                  </div>
                </div>
              </>
            }
          />
          <Route
            path="/admin/management-staff"
            element={
              <>
                <div className="flex">
                  <SideBarv2 />
                  <div className="flex-1">
                    <Headerv2 />
                    <ManagementStaff />
                  </div>
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
