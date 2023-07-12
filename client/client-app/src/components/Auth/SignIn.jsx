import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { loginCustomer } from "../../redux/reducer/Customer.Slice";

const SignIn = () => {
  const [valueInput, setValueInput] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnchangeInput = (e) => {
    setValueInput({ ...valueInput, [e.target.name]: e.target.value })
  }

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(loginCustomer(valueInput)).unwrap();
      const notify = () => toast.success("Login successfully !");
      notify();
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
    catch (error) {
      const notify = () => toast.error(error.message);
      notify();
    }
  }
  return (
    <>
      <div>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </div>
      <form onSubmit={handleClickSubmit}>
        <span>Email</span>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleOnchangeInput}
          required
        />
        <span>Password</span>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleOnchangeInput}
        />
        {/* <input type="checkbox" />Remember me */}
        <button>ĐĂNG NHẬP</button>
        <span>Bạn chưa có tài khoản?</span>
        <NavLink to={"/auth/register"}>
          <b>Đăng ký ngay</b>
        </NavLink>
      </form>
    </>
  );
};

export default SignIn;
