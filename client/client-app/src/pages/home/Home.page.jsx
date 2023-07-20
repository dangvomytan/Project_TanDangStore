import React from "react";
import DefaultLayout from "../../layouts/DefaultLayout/DefaultLayout";
import ListCard from "../../components/ListCard/ListCard";
import ProductComponent from "../../components/Product/Product";

const HomePage = () => {
  return (
    <>
      <DefaultLayout> <ProductComponent/> </DefaultLayout>
    </>
  );
};

export default HomePage;
