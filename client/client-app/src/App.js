import { useDispatch} from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from './pages/Auth/Login/Login.page';
import Register from './pages/Auth/Register/Register.page';
import { useEffect } from "react";

import HomePage from "./pages/home/Home.page";
import DetailPage from "./pages/detail/Detail.page";
import CartPage from "./pages/cart/Cart.page";
import ProductPage from "./pages/product/Product.Page";

import { getAllCategory } from "./redux/reducer/Category.Slice";
import { getAllType } from "./redux/reducer/Type.Slice";
import {getAllProduct} from './redux/reducer/Product.Slice'

function App() {
  const dispatch = useDispatch();

// get catogery
  useEffect(() => {
    const getCategory = async () => {
      await dispatch(getAllCategory()).unwrap();
    };
    getCategory();
  }, []);
  
//get type
  useEffect(() => {

    const getType = async () =>{
      await dispatch(getAllType()).unwrap();
    }
    getType();
  }, []);

  //get product
  useEffect(() => {

    const getProduct = async () =>{
      await dispatch(getAllProduct()).unwrap();
    }
    getProduct();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/detail" element={<DetailPage/> } />
        <Route path="/products" element={<ProductPage/> } />

        <Route path="/auth">
          <Route path="login"    element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart"  element={<CartPage/>}/>
          <Route path="order"  />
        </Route>
      </Routes>
    </>
  );
}

export default App;
