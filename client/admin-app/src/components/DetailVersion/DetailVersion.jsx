import React from 'react'
import {Button, Tab, Table, Tabs } from 'react-bootstrap'

const DetailVersion = () => {
  return (
    <div className='content_user'>
         <div className='item_1'>
              <div className='item_2'>
                   <h2>Quản lý sản phẩm</h2>
              </div>
              <div className='item_3'>
               Thông tin chi tiết ver
              </div>
         </div>
         <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      {/* =========================== */}
      <Tab eventKey="profile" title="Tổng quan">
      Đang cập nhật
      </Tab>
      {/* =========================== */}
      <Tab eventKey="longer-tab" title="Thông số kỹ thuật">
      Đang cập nhật
      </Tab>
      {/* =========================== */}
      <Tab eventKey="contact" title=" Hình ảnh " >
         <Table striped bordered hover size="sm">
              <thead>
                   <tr>
                        <th>#</th>
                        <th>Hình ảnh</th>
                        <th>url</th>
                        <th>
                        <Button variant="outline-success">Thêm mới</Button>
                        </th>
                   </tr>
              </thead>
              <tbody>
                        <tr >
                          <td>1</td>
                          <td>hhaha</td>
                          <td>mmmm</td>
                          <td>
                            <Button variant="outline-primary">Cập nhật</Button>{' '}
                            <Button variant="outline-danger">Xoá</Button>{' '}
                          </td>
                        </tr>

              </tbody>
         </Table>
      </Tab>
      {/* =========================== */}
    </Tabs>

    </div>
  )
}

export default DetailVersion