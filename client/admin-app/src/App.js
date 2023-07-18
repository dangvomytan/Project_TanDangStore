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
import LoginPage from "./pages/Auth/Login/Login.page";
import IsAuth from "./components/Auth/IsAuth";
import DetailVersionPage from "./pages/product/DetailVersion.Page";
import { handleGetAllUser } from "./redux/reducer/User.Slice";
import { getAllType } from "./redux/reducer/Type.Slice";

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
  //get type
  useEffect(() => {

    const getType = async () =>{
      await dispatch(getAllType()).unwrap();
    }
    getType();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" index element={<LoginPage/>}/>
        <Route path="/home" index element={<HomePage/>}/>

        <Route path="/auth" element={<IsAuth/>}>
          <Route path="product" element={<ProductPage />} />
          <Route path="version" element={<VersionPage />} />
          <Route path="detailversion" element={<DetailVersionPage />} />
          <Route path="customer" element={<CustomerPage />} />
          <Route path="order" element={<OrderPage />} />
        </Route>


        <Route path="/admin">
          <Route path="user" element={<UserPage />} >  
          </Route>
        </Route>
      </Routes>

    </>
  );
}

export default App;
