import React from 'react'
import { Table } from 'react-bootstrap'

const ListUser = () => {
  return (
     <>
     <div className='content_user'>
     <div className='item_1'>
     <div className='item_2'>
       <h2>Manage user</h2>
     </div>
     <div className='item_3'>

     </div>
     </div>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>User name</th>
          <th>Email</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>

         
              <tr >
                <td>d</td>
                <td>s</td>
                <td></td>
                {/* <td>{item.status?'active':'Inactive'}</td> */}
                {/* <td>
                  <Button 
                  variant={item.status?"outline-danger":"outline-success"}
                  onClick={()=>handleOnclickActive(item)}
                  >{item.status?(<box-icon name='lock-alt'></box-icon>):(<box-icon name='lock-open-alt' ></box-icon>)}
                  </Button>
                </td> */}
              </tr>


      </tbody>
    </Table> 
   </div></>

     )
               }
export default ListUser