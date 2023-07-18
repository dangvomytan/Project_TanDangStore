import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ListProduct = () => {
     const StateList = useSelector(state => state.product)
     const productList = StateList.data;
     const navigate = useNavigate();

     const handleClickBtnDetail = (id) => {
          navigate(`/version?pro=${id}`)
     }


     return (
          <>
               <div className='content_user'>
                    <div className='item_1'>
                         <div className='item_2'>
                              <h2>Quản lý sản phẩm</h2>
                         </div>
                         <div className='item_3'>
                              Danh sách sản phẩm
                         </div>
                    </div>
                    <Table striped bordered hover size="sm">
                         <thead>
                              <tr>
                                   <th>#</th>
                                   <th>Tên sản phẩm</th>
                                   <th>Ngày tạo</th>
                                   <th></th>
                                   <th>
                                   <Button variant="outline-success">Thêm mới</Button>
                                   </th>
                              </tr>
                         </thead>
                         <tbody>{productList && productList?.map((data, index) => {
                              return (
                                   <tr >
                                        <td>{index + 1}</td>
                                        <td>{data.product_name}</td>
                                        <td>{data.createdAt}</td>
                                        <td>
                                             <Button variant="outline-secondary" onClick={() => handleClickBtnDetail(data.id)}>Chi tiết</Button>{' '}
                                        </td>
                                        <td>
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