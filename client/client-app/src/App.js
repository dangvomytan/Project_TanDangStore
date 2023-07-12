import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "./redux/reducer/Category.Slice";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Login from './pages/Auth/Login/Login.page';
import Register from './pages/Auth/Register/Register.page';
import { useEffect } from "react";
// import HomePpage from "./pages/home/Home.page";
import HomePage from "./pages/home/Home.page";
import { getAllType } from "./redux/reducer/Type.Slice";

function App() {
  const dispatch = useDispatch();


  useEffect(() => {
    const getCategory = async () => {
      await dispatch(getAllCategory()).unwrap();
    };
    const getType = async () =>{
      await dispatch(getAllType()).unwrap();
    }
    getCategory();
    getType();
  }, []);
  return (
    <>
      <Routes>
        <Route ath="/" index element={<HomePage />} />

        <Route path="/auth">
          <Route path="login"    element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="cart"  />
          <Route path="order"  />
        </Route>
      </Routes>
    </>
  );
}

export default App;
