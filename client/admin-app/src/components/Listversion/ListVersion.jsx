import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleAddVersion, handleDeleteVersion, handleGetByIdProduct, handleUpdateVersion } from '../../redux/reducer/Version.Slice';
import { Button, Modal, Table } from 'react-bootstrap';
import { Toaster, toast } from 'react-hot-toast';

const ListVersion = () => {
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);


     const stateProduct = useSelector(state => state.product);
     const stateList = useSelector(state => state.version);
     const dispatch = useDispatch()
     const navigate = useNavigate();

     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
     const product_id = parseInt(searchParams.get('pro'));
     const versionList = stateList.data;

     const [isUpdating, setIsUpdating] = useState(false);
     const [formData, setFormData] = useState({});

     // get api
     const getVerByProduct = async (id) => {
          await dispatch(handleGetByIdProduct(id)).unwrap();
     };
     useEffect(() => {
          if (!isNaN(product_id)) {

               getVerByProduct(product_id);
          }
     }, [product_id]);

     const handleClickBtnDetail = (id) => {
          navigate(`/auth/detailversion?ver=${id}`)
     }

     const handleChange = (e) => {
          setFormData({
               ...formData,
               [e.target.name]: e.target.value
          });
     };


     const handleSubmit = async (e) => {
          e.preventDefault();
          console.log(formData);
          if (!isUpdating)// add
          {
               try {

                    await dispatch(handleAddVersion(formData)).unwrap();
                    const notify = () => toast.success("Create successfully");
                    handleClose();
                    getVerByProduct(product_id);
                    notify();
               }
               catch (error) {
                    // console.log(error.message);
                    const notify = () => toast.error(error.message ? error.message : "Error  created!");
                    notify();
               }
          }
          else //upadater
          {
               try {
                        await dispatch(handleUpdateVersion(formData)).unwrap();
                    const notify = () => toast.success("Update successfully ");
                    handleClose();
                    getVerByProduct(product_id);
                    notify();
               }
               catch (error) {
                    // console.log(error.message);
                    const notify = () => toast.error(error.message ? error.message : "Error  update");
                    notify();
               }
          }

     }

     const handleClickAdd = () => {
          setIsUpdating(false);
          handleShow();
     }
          // click update button
          const handleClickUpdate = (data) => {
               setIsUpdating(true);
               handleShow();
               setFormData({
                    id: data.id,
                    id_product: data.id_product,
                    version_name: data.version_name, 
                    price: data.price, 
                    quantity: data.quantity,
                    description: data.description
               });
     
          }
          // click delete button
     const handleClickDelete = async (data) => {
          try {

            await dispatch(handleDeleteVersion(data.id)).unwrap();
            const notify = () => toast.success("Derete successfully ");
            getVerByProduct(product_id);
            setFormData()
            notify();
          }
          catch (error) {
            console.log(error);
            const notify = () => toast.error(error.message );
            notify();
          }
          console.log("adas");
     }
     return (
          <>
               <Toaster
                    position="bottom-right"
                    reverseOrder={false}
               />

               <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                    <Modal.Header closeButton>
                         <Modal.Title>
                              {!isUpdating ? "Thêm phiên bản" : "Cập nhật thông tin sản phẩm"}
                         </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                         <form action="/product" method="POST" onSubmit={handleSubmit}>
                              <label htmlFor="id_product">Danh sách sản phẩm:</label>
                              <select
                                   id="id_product"
                                   name="id_product"
                                   value={formData?.id_product}
                                   onChange={handleChange}
                                   required
                              >
                                   <option value=""></option>
                                   {stateProduct &&
                                        stateProduct?.data?.map((data) => {
                                             if (data.id == product_id) {
                                                  return < option key={data?.id} value={data?.id}>{data?.product_name}</option>
                                             }
                                        }

                                        )}
                              </select>

                              <label htmlFor="version_name">Tên phiên bản:</label>
                              <input
                                   type="text"
                                   id="name_version"
                                   name="version_name"
                                   value={formData?.version_name}
                                   onChange={handleChange}
                                   required
                              />

                              <label htmlFor="productName">Đơn giá:</label>
                              <input
                                   type="number"
                                   id="price"
                                   name="price"
                                   value={formData?.price}
                                   onChange={handleChange}
                                   required
                              />
                              <label htmlFor="quantity">Số lượng:</label>
                              <input
                                   type="number"
                                   id="quantity"
                                   name="quantity"
                                   value={formData?.quantity}
                                   onChange={handleChange}
                                   required
                              />
                              <label htmlFor="description">Mô tả:</label>
                              <input
                                   type="text"
                                   id="description"
                                   name="description"
                                   value={formData?.description}
                                   onChange={handleChange}

                              />
                              <Modal.Footer>
                                   <Button variant="secondary"
                                        onClick={handleClose}
                                   >
                                        Đóng
                                   </Button>
                                   <Button type="submit" variant="primary">
                                        {!isUpdating ? "Thêm" : "Cập nhật"}
                                   </Button>
                              </Modal.Footer>
                         </form>
                    </Modal.Body>
               </Modal >

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
                                   <th>Tên ver</th>
                                   <th>giá</th>
                                   <th>tồn kho</th>
                                   <th>Ngày tạo</th>
                                   <th>mô tả</th>
                                   <th></th>
                                   <th>
                                        <Button
                                             variant="outline-success"
                                             onClick={() => handleClickAdd()}
                                        >
                                             Thêm mới
                                        </Button></th>
                              </tr>
                         </thead>
                         <tbody>{versionList?.length > 0 && versionList?.map((data, index) => {
                              return (
                                   <tr >
                                        <td>{index + 1}</td>
                                        <td>{data?.version_name}</td>
                                        <td>{data?.price}</td>
                                        <td>{data?.quantity}</td>
                                        <td>{data?.createdAt}</td>
                                        <td>{data?.description}</td>
                                        <td>
                                             <Button variant="outline-secondary" onClick={() => handleClickBtnDetail(data?.id)}>Chi tiết</Button>{' '}
                                        </td>
                                        <td>
                                             <Button variant="outline-primary"  onClick={() => handleClickUpdate(data)}>Cập nhật</Button>{' '}
                                             <Button variant="outline-danger" onClick={() => handleClickDelete(data)}>Xoá</Button>{' '}
                                        </td>
                                   </tr>
                              )
                         })
                         }


                         </tbody>
                    </Table>
               </div>
          </>

     );
}

export default ListVersion;
