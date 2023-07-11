import React from "react";

const SignUp = () => {
  return (
    <>
      <form>
        <span>Name</span>
        <input
          type="text"
          placeholder="Name"
          name="name"
          //   onChange={handleOnchangeInput}
        />
        <span>Email</span>
        <input
          type="text"
          placeholder="Email"
          name="email"
          //   onChange={handleOnchangeInput}
        />
        <span>Password</span>
        <input
          type="password"
          placeholder="Password"
          name="password"
          //   onChange={handleOnchangeInput}
        />
        {/* <input type="checkbox" /> */}
        {/* <label>I agree the Term and Condition </label> */}
        <button type="submit">ĐĂNG KÝ</button>
        <span>Đã có tài khoản rồi ?</span>
        {/* <NavLink to={"/auth/sign-in"}> */}
        <b>Đăng nhập</b>
        {/* </NavLink> */}
      </form>
    </>
  );
};

export default SignUp;
