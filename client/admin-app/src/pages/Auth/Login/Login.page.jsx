import React from "react";
import SignLayout from "../../../layouts/SignLayout/Sign.layout";
import SignIn from "../../../components/Auth/SignIn";


const LoginPage = () => {
  return (
    <>
      <SignLayout><SignIn/></SignLayout>
    </>
  );
};

export default LoginPage;
