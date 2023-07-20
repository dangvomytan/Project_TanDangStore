import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login/Login.page";
import Register from "./pages/Auth/Register/Register.page";
import { useEffect } from "react";

import HomePage from "./pages/home/Home.page";
import DetailPage from "./pages/detail/Detail.page";
import CartPage from "./pages/cart/Cart.page";
import ProductPage from "./pages/product/Product.Page";

import { getAllCategory } from "./redux/reducer/Category.Slice";
import { getAllType } from "./redux/reducer/Type.Slice";
import { getAllProduct } from "./redux/reducer/Product.Slice";
import { getAllCart } from "./redux/reducer/Cart.Slice";
import PayPage from "./pages/Pay/Pay.Page";
import ProductByPage from "./pages/product/ProductBy.Page";
import VersionPage from "./pages/product/Version.Page";
function App() {
  const dispatch = useDispatch();

  // get catogery
  // useEffect(() => {
  //   const getCategory = async () => {
  //     await dispatch(getAllCategory()).unwrap();
  //   };
  //   getCategory();
  // }, []);

  //get type
  useEffect(() => {
    const getType = async () => {
      await dispatch(getAllType()).unwrap();
    };
    getType();
  }, []);

  //get product
  useEffect(() => {
    const getProduct = async () => {
      await dispatch(getAllProduct()).unwrap();
    };
    getProduct();
  }, []);

  //get Cart
  useEffect(() => {
    const getCart = async () => {
      await dispatch(getAllCart()).unwrap();
    };
    getCart();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" index element={<HomePage />} /> 
         <Route path="/detail" element={<DetailPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/versions" element={<VersionPage />} />
        <Route path="/productsby" element={<ProductByPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/cart" element={<CartPage />} />
        <Route path="/auth/pay" element={<PayPage />} />  
      </Routes>
    </>
  );
}

export default App;
