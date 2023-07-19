import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
     const router = useLocation();
  return (
     <>
     <div>
           <NavLink to={'/auth/user'}
     className={router.pathname === "/User" ? "item_1" : "item_1"}
     >
          <div className='item_2'>
          <box-icon type='solid' size='md' color='var(--color-admin-icon-nav)' name='user-account'></box-icon>
          </div>
          <div className='item_3'>
               Người dùng
          </div>
     </NavLink>

     <NavLink  to={'/auth/customer'}
     className={router.pathname === "/User" ? "item_1" : "item_1"}
      >
          <div className='item_2'>
          <box-icon type='solid'size='md' color='var(--color-admin-icon-nav)' name='user-account'></box-icon>
          </div>
          <div className='item_3'>
             Khách hàng
          </div>
     </NavLink>


     <NavLink  to={'/auth/Product'} 
     className={router.pathname === "/User" ? "item_1" : "item_1"}
     >
          <div className='item_2'>
          <box-icon type='solid'  name='package' size='md' color='var(--color-admin-icon-nav)'></box-icon>
          </div>
          <div className='item_3'>
             Sản phẩm
          </div>
     </NavLink>

     <NavLink  to={'/auth/order'} 
     className={router.pathname === "/User" ? "item_1" : "item_1"}
     >
          <div className='item_2'>
          <box-icon name='task'size='md' color='var(--color-admin-icon-nav)'></box-icon>
          </div>
          <div className='item_3'>
              Đơn hàng
          </div>
     </NavLink>  
       
     </div>
</>
  )
}

export default Navbar