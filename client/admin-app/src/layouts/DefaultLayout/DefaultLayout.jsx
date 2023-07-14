import React from "react";
import Header from "../../components/Header/Header/Header";
import Footer from "../../components/Footer/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
