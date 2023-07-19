import { useDispatch } from "react-redux";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import HomePage from "./pages/home/Home.page";
import ProductPage from "./pages/product/Product.Page";
import UserPage from "./pages/user/User.Page";
import OrderPage from "./pages/order/Order.Page";
import CustomerPage from "./pages/customer/Customer.Page";
import { getAllCustomer } from "./redux/reducer/Customer.Slice";
import { getAllProduct } from "./redux/reducer/Product.Slice";
import VersionPage from "./pages/product/Version.Page";
import LoginPage from "./pages/Auth/Login/Login.page";
import IsAuth from "./components/Auth/IsAuth";
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
        <Route path="/" index element={<LoginPage/>}/>

        <Route path="/auth" element={<IsAuth/>}>
        <Route path="home" element={<HomePage/>} />
          <Route path="product" element={<ProductPage />} />
          <Route path="version" element={<VersionPage />} />
          <Route path="detailversion" element={<DetailVersionPage />} />
          <Route path="customer" element={<CustomerPage />} />
          <Route path="order" element={<OrderPage />} />
          <Route path="user" element={<UserPage />} >  
        </Route>
        </Route>
      </Routes>

    </>
  );
}

export default App;
