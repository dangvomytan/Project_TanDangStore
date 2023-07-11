import React from "react";

const SignIn = () => {
  return (
    <>
      <form>
        <span>Email</span>
        <input
          type="text"
          placeholder="Email"
          name="email"
          // onChange={handleOnchangeInput}
        />
        <span>Password</span>
        <input
          type="password"
          placeholder="Password"
          name="password"
          // onChange={handleOnchangeInput}
        />
        {/* <input type="checkbox" />Remember me */}
        <button>ĐĂNG NHẬP</button>
        <span>Bạn chưa có tài khoản?</span>
        {/* <NavLink to={"/auth/sign-up"}> */}
        <b>Đăng ký ngay</b>
        {/* </NavLink> */}
      </form>
    </>
  );
};

export default SignIn;
