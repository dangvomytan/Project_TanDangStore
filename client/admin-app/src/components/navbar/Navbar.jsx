import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
     const router = useLocation();
  return (
     <>
     <NavLink to={'/User'}
     className={router.pathname === "/User" ? "item_1" : "item_1"}
     >
          <div className='item_2'>
          <box-icon type='solid' size='md' color='var(--color-admin-icon-nav)' name='user-account'></box-icon>
          </div>
          <div className='item_3'>
               Người dùng
          </div>
     </NavLink>

     <NavLink  to={'/Product'} 
     className={router.pathname === "/User" ? "item_1" : "item_1"}
     >
          <div className='item_2'>
          <box-icon type='solid' name='institution' size='md' color='var(--color-admin-icon-nav)'></box-icon>
          </div>
          <div className='item_3'>
             Sản phẩm
          </div>
     </NavLink>

     <NavLink  to={'/Customer'}
     className={router.pathname === "/User" ? "item_1" : "item_1"}
      >
          <div className='item_2'>
          <box-icon name='task'size='md' color='var(--color-admin-icon-nav)'></box-icon>
          </div>
          <div className='item_3'>
             Khách hàng
          </div>
     </NavLink>

     <NavLink  to={'/Order'} 
     className={router.pathname === "/User" ? "item_1" : "item_1"}
     >
          <div className='item_2'>
          <box-icon name='task'size='md' color='var(--color-admin-icon-nav)'></box-icon>
          </div>
          <div className='item_3'>
              Đơn hàng
          </div>
     </NavLink>
</>
  )
}

export default Navbar