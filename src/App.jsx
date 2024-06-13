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
import AllProduct from "./staffpages/AllProduct";
import AddProduct from "./staffpages/AddProduct";
import SideBar from "./staffpages/SideBar";
import Dashboard from "./adminpages/Dashboard";
import SideBarv2 from "./adminpages/SideBarv2";
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
