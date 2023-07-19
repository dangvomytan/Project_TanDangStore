import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { handleLoginUser } from "../../redux/reducer/User.Slice";

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
      await dispatch(handleLoginUser(valueInput)).unwrap();
      const notify = () => toast.success("Login successfully !");
      notify();
      navigate("/home");
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
        <span>Tên tài khoản</span>
        <input
          type="userName"
          placeholder="userName"
          name="userName"
          onChange={handleOnchangeInput}
          required
        />
        <span>mật khẩu</span>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleOnchangeInput}
        />
        {/* <input type="checkbox" />Remember me */}
        <button>ĐĂNG NHẬP</button>
        {/* <span>Bạn chưa có tài khoản?</span>
        <NavLink to={"/auth/register"}>
          <b>Đăng ký ngay</b>
        </NavLink> */}
      </form>
    </>
  );
};

export default SignIn;
