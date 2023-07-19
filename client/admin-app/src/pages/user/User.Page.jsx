import React from 'react'
import DefaultLayout from '../../layouts/DefaultLayout/DefaultLayout'
import ListUser from '../../components/ListUser/ListUser'
import { Navigate, Outlet } from 'react-router-dom';

const UserPage = () => {
  const User = JSON.parse(localStorage.getItem("User"));
  return (
      <DefaultLayout>
        
        { User.r == 1 ? (<ListUser/>):("Bạn không có quyền xem thông tin này") }
      </DefaultLayout>
  )
}

export default UserPage