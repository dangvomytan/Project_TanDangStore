import React, { useState } from 'react'
import './Pay.css'

const Pay = ({ subTotal, handlePay }) => {
     const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Thực hiện xử lý thanh toán
    const paymentData = {
      fullName,
      email,
      address,
      phone,
      subTotal,
    };

    // Gọi hàm handlePay và truyền paymentData vào để xử lý thanh toán
    handlePay(paymentData);

    // Đặt lại các giá trị trong form
    setFullName("");
    setEmail("");
    setAddress("");
    setPhone("");
  };
  return (
    <div><form onSubmit={handleSubmit}>
    <h2>Thông tin thanh toán</h2>
    <div className="form-group">
      <label htmlFor="fullName">Họ và tên:</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="address">Địa chỉ:</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Số điện thoại:</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
    </div>
    <div className="form-group">
      <label>Tổng cộng:</label>
      <span>{subTotal?.toLocaleString()} VND</span>
    </div>
    <div className="form-group">
      <button type="submit">Thanh toán</button>
    </div>
  </form></div>
  )
}

export default Pay