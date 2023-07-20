import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'
import Product from '../../components/Product/Product'
import ByCategory from '../../components/ListProduct/ByCategory'
import ByType from '../../components/ListProduct/ByType'

const ProductPage = () => {
  return (
     <DefaultLayout>
       <Product/> 
       </DefaultLayout>
  )
}

export default ProductPage