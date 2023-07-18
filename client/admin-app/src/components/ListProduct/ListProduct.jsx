import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { Toaster, toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllProduct, handleAddProduct, handleDeleteProduct, handleUpdateProduct } from '../../redux/reducer/Product.Slice';

const ListProduct = () => {

     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     const dispatch = useDispatch();


     // Goi API
     const getProduct = async () => {
          await dispatch(getAllProduct()).unwrap();
     };
     useEffect(() => {
          getProduct();
     }, []);

     const [isUpdating, setIsUpdating] = useState(false);
     const [formData, setFormData] = useState({});


     const StateList = useSelector(state => state.product)
     const StateType = useSelector(state => state.type)
     const productList = StateList.data;
     const TypeList = StateType.data;
     const navigate = useNavigate();

     //Xem chi tiet san pham
     const handleClickBtnDetail = (id) => {
          navigate(`/auth/version?pro=${id}`)
     }

     //Handle  lay gia tri tu form
     const handleChange = (e) => {
          setFormData({
               ...formData,
               [e.target.name]: e.target.value
          });
     };

     // Handle xu ly submit
     const handleSubmit = async (e) => {
          e.preventDefault();
          if (!isUpdating)// add
          {
               try {
                        await dispatch(handleAddProduct(formData)).unwrap();
                    const notify = () => toast.success("Create successfully");
                    handleClose();
                    getProduct();
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
                        await dispatch(handleUpdateProduct(formData)).unwrap();
                    const notify = () => toast.success("Update successfully ");
                    handleClose();
                    getProduct();
                    notify();
               }
               catch (error) {
                    // console.log(error.message);
                    const notify = () => toast.error(error.message ? error.message : "Error  update");
                    notify();
               }
          }
     }

     // click add button
     const handleClickAdd = () => {
          setIsUpdating(false);
          handleShow();
          setFormData(
               {
                    id_type: '',
                    product_name: ''
               });

     }
     // click update button
     const handleClickUpdateProduct = (data) => {
          setIsUpdating(true);
          handleShow();
          setFormData({
               id:data.id,
               id_type: data.id_type,
               product_name: data?.product_name,
          });

     }
     // click delete button
     const handleClickDeleteProduct = async (data) => {
          try {

            await dispatch(handleDeleteProduct(data.id)).unwrap();
            const notify = () => toast.success("Derete successfully ");
            getProduct();
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
                              {!isUpdating ? "Thêm sản phẩm" : "Cập nhật thông tin sản phẩm"}
                         </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                         <form action="/product" method="POST" onSubmit={handleSubmit}>
                              <label htmlFor="type">Danh sách phân loại:</label>
                              <select
                                   id="type"
                                   name="id_type"
                                   value={formData?.id_type}
                                   onChange={handleChange}
                                   required
                              >
                                   <option value="0">----</option>
                                   {TypeList?.map((data) => (
                                        <option key={data?.id} value={data?.id}>
                                             {data?.name}
                                        </option>
                                   ))}
                              </select>

                              <label htmlFor="productName">Tên sản phẩm:</label>
                              <input
                                   type="text"
                                   id="productName"
                                   name="product_name"
                                   value={formData?.product_name}
                                   onChange={handleChange}
                                   required
                              />

                              <Modal.Footer>
                                   <Button variant="secondary" onClick={handleClose}>
                                        Đóng
                                   </Button>
                                   <Button type="submit" variant="primary">
                                        {!isUpdating ? "Thêm" : "Cập nhật"}
                                   </Button>
                              </Modal.Footer>
                         </form>
                    </Modal.Body>
               </Modal>

               <div className="content_user">
                    <div className="item_1">
                         <div className="item_2">
                              <h2>Quản lý sản phẩm</h2>
                         </div>
                         <div className="item_3">Danh sách sản phẩm</div>
                    </div>
                    <Table striped bordered hover size="sm">
                         <thead>
                              <tr>
                                   <th>#</th>
                                   <th>Tên sản phẩm</th>
                                   <th>Ngày tạo</th>
                                   <th></th>
                                   <th>
                                        <Button
                                             variant="outline-success"
                                             onClick={() => handleClickAdd()}
                                        >
                                             Thêm mới
                                        </Button>
                                   </th>
                              </tr>
                         </thead>
                         <tbody>
                              {productList &&
                                   productList?.map((data, index) => (
                                   
                                        <tr key={data.id}>
                                             <td>{index + 1}</td>
                                             <td>{data.product_name}</td>
                                             <td>{data.createdAt}</td>
                                             <td>
                                                  <Button
                                                       variant="outline-secondary"
                                                       onClick={() => handleClickBtnDetail(data.id)}
                                                  >
                                                       Chi tiết
                                                  </Button>
                                             </td>
                                             <td>
                                                  <Button
                                                       variant="outline-primary"
                                                       onClick={() => handleClickUpdateProduct(data)}
                                                  >
                                                       Cập nhật
                                                  </Button>{" "}
                                                  <Button
                                                       variant="outline-danger"
                                                       onClick={() => handleClickDeleteProduct(data)}
                                                  >
                                                       Xoá
                                                  </Button>{" "}
                                             </td>
                                        </tr>
                                   ))}
                         </tbody>
                    </Table>
               </div>

          </>
     )
}

export default ListProduct