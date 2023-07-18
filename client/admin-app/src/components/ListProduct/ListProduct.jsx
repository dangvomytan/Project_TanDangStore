import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';

const ListProduct = () => {
  const StateList = useSelector(state => state.product)
  const productList = StateList.data;
  console.log(productList, 222);
  return (
    <>
    <div className='content_user'>
         <div className='item_1'>
              <div className='item_2'>
                   <h2>Quản lý sản phẩm</h2>
              </div>
              <div className='item_3'>
              </div>
         </div>
         <Table striped bordered hover size="sm">
              <thead>
                   <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Ngày tạo</th>
                        <th></th>
                   </tr>
              </thead>
              <tbody>{productList && productList?.map((data,index) => {
                   return (
                        <tr >
                             <td>{index+1}</td>
                             <td>{data.product_name}</td>
                             <td>{data.createdAt}</td>
                             <td>
                             <Button variant="outline-secondary">Chi tiết</Button>{' '}
                             <Button variant="outline-primary">Cập nhật</Button>{' '}
                             <Button variant="outline-danger">Xoá</Button>{' '}
                             </td>  
                        </tr>
                   )
              })
              }


              </tbody>
         </Table>
    </div>
</>
  )
}

export default ListProduct