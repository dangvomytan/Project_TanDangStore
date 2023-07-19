import React from 'react'
import { Button, Table} from 'react-bootstrap'

const ListOrder = () => {
  return (
     <>
     <div className='content_user'>
          <div className='item_1'>
               <div className='item_2'>
                    <h2>Quản lý Đơn hàng</h2>
               </div>
               <div className='item_3'>
               </div>
          </div>
          <Table striped bordered hover size="sm">
               <thead>
                    <tr>
                         <th>#</th>
                         <th>Tên sản phẩm</th>
                         <th>Ver</th>
                         <th>Đơn giá</th>
                         <th>Số lượng mua</th>
                         <th>Ngày mua</th>
                         <th>Tổng tiền</th>
                         <th>Trạng thái</th>
                    </tr>
               </thead>
               <tbody>
                    <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    </tr>
               </tbody>
          </Table>
     </div>
</>
  )
}

export default ListOrder