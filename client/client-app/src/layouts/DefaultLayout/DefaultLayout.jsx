import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./DefaultLayout.css";

const DefaultLayout = ({ children }) => {
  return (
    <div className="default-layout">
      <Header />
      <main>
        <div className="layout_content">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
