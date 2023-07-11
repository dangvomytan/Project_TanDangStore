import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer_container">
          <div className="contact">
            <span>Liên hệ:</span>
            <div></div>
            <hr />
            Địa chỉ: 363 Nguyễn Hữu Thọ, Cẩm Lệ, Tp Đà Nẵng.
            <br /> SĐT: 0376717801
            <br /> Email: tdshop@gmail.com
          </div>
          <div className="about">
            <span>Thông tin:</span>
            <hr />
            Về chúng tôi
            <br />
            Điều khoản & Điều kiện
            <br />
            Chính sách bảo mật
            <br />
            Chính sách thanh toán
            <br />
            Chính sách giao hàng
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
