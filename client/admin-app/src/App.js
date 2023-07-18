import { useDispatch } from "react-redux";
// import { getAll } from "./redux/reducer/Demo.Slice";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
// import HomePpage from "./pages/home/Home.page";
import HomePage from "./pages/home/Home.page";
import ProductPage from "./pages/product/Product.Page";
import UserPage from "./pages/user/User.Page";
import OrderPage from "./pages/order/Order.Page";
import CustomerPage from "./pages/customer/Customer.Page";
import { getAllCustomer } from "./redux/reducer/Customer.Slice";
import { getAllProduct } from "./redux/reducer/Product.Slice";
import VersionPage from "./pages/product/Version.Page";
import DetailVersionPage from "./pages/product/DetailVersion.Page";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetAllCustomer = async () => {
      await dispatch(getAllCustomer()).unwrap();
    };
    handleGetAllCustomer();
  }, []);
  useEffect(() => {
    const handleGetAllProduct = async () => {
      await dispatch(getAllProduct()).unwrap();
    };
    handleGetAllProduct();
  }, []);
  return (
    <>
      <Routes>
      <Route path="/" index element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/version" element={<VersionPage />} />
      <Route path="/detailversion" element={<DetailVersionPage />} />
      <Route path="/user" element={<UserPage />} >
        <Route path="list-users" />
      </Route>
      <Route path="/customer" element={<CustomerPage />} />
      <Route path="/order" element={<OrderPage />} />
        </Routes>

    </>
  );
}

export default App;
