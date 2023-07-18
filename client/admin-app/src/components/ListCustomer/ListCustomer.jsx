import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './ListCustomer.css'

const ListCustomer = () => {
     const StateList = useSelector(state => state.customer)
     const customerList = StateList.data;
     return (
          <>
               <div className='content_user'>
                    <div className='item_1'>
                         <div className='item_2'>
                              <h2>Quản lý khách hàng</h2>
                         </div>
                         <div className='item_3'>
                         </div>
                    </div>
                    <Table striped bordered hover size="sm">
                         <thead>
                              <tr>
                                   <th>#</th>
                                   <th>Email</th>
                                   <th>Họ</th>
                                   <th>Tên</th>
                                   <th>Ngày tạo</th>
                                   <th>Trạng thái</th>
                              </tr>
                         </thead>
                         <tbody>{customerList && customerList?.map((data,index) => {
                              return (
                                   <tr >
                                        <td>{index+1}</td>
                                        <td>{data.email}</td>
                                        <td>{data.lastName}</td>
                                        <td>{data.firstName}</td>
                                        <td>{data.createdAt}</td>
                                        <td>
                                        <Button variant={data.status == 1?"outline-success":"outline-danger"}>{data.status == 1?(<box-icon name='lock-open-alt'></box-icon>):(<box-icon name='lock-alt' ></box-icon>)}</Button>
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


export default ListCustomer