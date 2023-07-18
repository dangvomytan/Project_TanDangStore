import React, { useEffect, useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap'
import { Toaster, toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { handleDeleteUser, handleGetAllUser, handleRegisterUser, handleUpdateUser } from '../../redux/reducer/User.Slice';

const ListUser = () => {
  //xu li modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //
  const dispatch = useDispatch();
  const dataState = useSelector(state => state.user)
  const userList = dataState.data;
  // Goi API
  const GetAllUser = async () => {
    await dispatch(handleGetAllUser()).unwrap();
  };
  useEffect(() => {
    GetAllUser();
  }, []);



  const [isUpdating, setIsUpdating] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    password: '',
    role: 2,
    status: 1
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isUpdating)// add
    {
      try {
        await dispatch(handleRegisterUser(formData)).unwrap();
        const notify = () => toast.success("Successfully registered");
        handleClose();
        GetAllUser();
        notify();
      }
      catch (error) {
        // console.log(error.message);
        const notify = () => toast.error(error.message ? error.message : "Error  registered");
        notify();
      }
    }
    else //upadater
    {
      try {
        console.log(formData);
        await dispatch(handleUpdateUser(formData)).unwrap();
        const notify = () => toast.success("Successfully registered");
        handleClose();
        GetAllUser();
        notify();
      }
      catch (error) {
        // console.log(error.message);
        const notify = () => toast.error(error.message ? error.message : "Error  update");
        notify();
      }
    }
  };
  const handleClickAdd = () => {
    setIsUpdating(false);
    handleShow();
    setFormData({
      fullName: '',
      userName: '',
      password: '',
      role: 2,
      status: 1
    });

  }
  const handleClickUdateUser = (data) => {
    setIsUpdating(true);
    handleShow();
    console.log(data);
    setFormData({
      id: data.id,
      fullName: data?.fullName,
      userName: data?.userName,
      role: data?.role,
      status: data?.status
    });

  }
  const handleClickDeleteUser = async (data) => {
    try {
      await dispatch(handleDeleteUser(data.id)).unwrap();
      const notify = () => toast.success("Derete successfully ");
      GetAllUser();
      setFormData()
      notify();
    }
    catch (error) {
      console.log(error.messagex);
      const notify = () => toast.error(error.message ? error.message : "Delete error");
      notify();
    }

  }

  return (
    <>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Body>
          <Modal.Header closeButton>
            <Modal.Title> {!isUpdating ? "Thêm người dùng" : "Cập nhật thông tin người dùng"}</Modal.Title>
          </Modal.Header>
          <form action="/user" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="fullName">Họ và Tên:</label>
            <input type="text" id="fullName" name="fullName" value={formData?.fullName} onChange={handleChange} required />

            <label htmlFor="userName">Tên người dùng:</label>
            <input type="text" id="userName" name="userName" value={formData?.userName} onChange={handleChange} required />

            <label htmlFor="role">Vai trò:</label>
            <select id="role" name="role" defaultValue={2} value={formData?.role} onChange={handleChange} required>
              <option value="1">Quản trị viên</option>
              <option value="2">Người dùng</option>
            </select>

            {!isUpdating ? (
              <>
                <label htmlFor="password">Mật khẩu:</label>
                <input type="password" id="password" name="password" value={formData?.password} onChange={handleChange} required />
              </>
            ) : (
              <>
                <label htmlFor="status">Trạng thái:</label>
                <select id="status" name="status" value={formData?.status} onChange={handleChange} required>
                  <option value="0">Ngưng hoạt động</option>
                  <option value="1">Hoạt động</option>
                </select>
              </>
            )}



            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Đóng
              </Button>
              <Button type='submit' variant="primary" >{!isUpdating ? "Thêm" : "Cập nhật"}</Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>

      <div className='content_user'>
        <div className='item_1'>
          <div className='item_2'>
            <h2>Quản lý người dùng</h2>
          </div>
          <div className='item_3'>

          </div>
        </div>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Tên đăng nhập</th>
              <th>Vai trò</th>
              <th>Trạng thái</th>
              <th>Ngày tạo</th>
              <th><Button variant="outline-success" onClick={() => handleClickAdd()}>Thêm mới</Button></th>
            </tr>
          </thead>
          <tbody>
            {userList?.length > 0 && userList?.map((data, index) => {
              console.log(data);
              return (
                <tr key={data?.id} >
                  <td>{index + 1}</td>
                  <td>{data?.userName}</td>
                  <td>{data?.role == 1 ? "Quản trị viên" : "Người dùng"}</td>
                  <td>
                    <Button variant={data?.status == 1 ? "success" : "danger"}>{data?.status == 1 ? (<box-icon name='lock-open-alt'></box-icon>) : (<box-icon name='lock-alt' ></box-icon>)}</Button>
                  </td>
                  <td>{data?.createdAt}</td>
                  <td>
                    <Button variant="outline-primary" onClick={() => handleClickUdateUser(data)}>Cập nhật</Button>{' '}
                    <Button variant="outline-danger" onClick={() => handleClickDeleteUser(data)}>Xoá</Button>{' '}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div></>

  )
}
export default ListUser