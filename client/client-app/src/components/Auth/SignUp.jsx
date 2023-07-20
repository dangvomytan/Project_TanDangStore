import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerCustomer } from "../../redux/reducer/Customer.Slice";
import toast, { Toaster } from 'react-hot-toast';
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [valueInput, setValueInput] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleOnchangeInput = (e) => {
    setValueInput({ ...valueInput, [e.target.name]: e.target.value })
  }

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerCustomer(valueInput)).unwrap();
      const notify = () => toast.success("Successfully registered");
      notify();
      setTimeout(() => {
        navigate("/auth/login");
      }, 1500);
    }
    catch (error) {
      // console.log(error.message);
      const notify = () => toast.error(error.message);
      notify();
    }
  }

  console.log(valueInput);
  return (
    <>
      <div>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </div>
      <form onSubmit={handleClickSubmit}>
        <span>Tên</span>
        <input
          type="text"
          placeholder="Tên"
          name="firstName"
          onChange={handleOnchangeInput}
          required
        />
        <span>Họ</span>
        <input
          type="text"
          placeholder="Họ"
          name="lastName"
          onChange={handleOnchangeInput}
          required
        />
        <span>Email</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleOnchangeInput}
          required
        />
        <span>Mật khẩu</span>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleOnchangeInput}
          required
        />
        {/* <input type="checkbox" /> */}
        {/* <label>I agree the Term and Condition </label> */}
        <button type="submit">ĐĂNG KÝ</button>
        <span>Đã có tài khoản rồi ?</span>
        <NavLink to={"/auth/login"}>
        <b>Đăng nhập</b>
        </NavLink>
      </form>
    </>
  );
};

export default SignUp;
