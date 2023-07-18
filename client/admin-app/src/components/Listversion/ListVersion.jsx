import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleGetByIdProduct } from '../../redux/reducer/Version.Slice';
import { Button, Table } from 'react-bootstrap';

const ListVersion = () => {
  const stateList = useSelector(state => state.version);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const product_id = parseInt(searchParams.get('pro'));
  const versionList = stateList.data;

  useEffect(() => {
    if (!isNaN(product_id)) {
      const getVerByProduct = async (id) => {
        await dispatch(handleGetByIdProduct(id)).unwrap();
      };
      getVerByProduct(product_id);
    }
  }, [product_id]);


  const handleClickBtnDetail =(id)=>{
     navigate(`/detailversion?ver=${id}`)
}

  return (
    <div className='content_user'>
         <div className='item_1'>
              <div className='item_2'>
                   <h2>Quản lý sản phẩm</h2>
              </div>
              <div className='item_3'>
               Danh sách ver
              </div>
         </div>
         <Table striped bordered hover size="sm">
              <thead>
                   <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>giá</th>
                        <th>tồn kho</th>
                        <th>Ngày tạo</th>
                        <th>mô tả</th>
                        <th></th>
                        <th><Button variant="outline-success">Thêm mới</Button></th>
                   </tr>
              </thead>
              <tbody>{versionList && versionList?.map((data,index) => {
                   return (
                        <tr >
                             <td>{index+1}</td>
                             <td>{data.version_name}</td>
                             <td>{data.price}</td>
                             <td>{data.quantity}</td>
                             <td>{data.createdAt}</td>
                             <td>{data.description}</td>
                             <td>
                             <Button variant="outline-secondary" onClick={()=>handleClickBtnDetail(data.id)}>Chi tiết</Button>{' '}
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
  );
}

export default ListVersion;
