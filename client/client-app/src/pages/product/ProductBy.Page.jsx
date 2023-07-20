import React from 'react'
import ByCategory from '../../components/ListProduct/ByCategory'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'
import ByType from '../../components/ListProduct/ByType'
import { useLocation } from 'react-router-dom'

const ProductByPage = () => {
     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
     const category_id = searchParams.get('category_id');
  return (
     <DefaultLayout>
     {category_id?<ByCategory/>:<ByType/>}
       </DefaultLayout>
  )
}

export default ProductByPage
