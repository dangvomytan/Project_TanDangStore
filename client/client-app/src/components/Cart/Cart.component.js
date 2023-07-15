import React from "react";
import "./Cart.component.css";
import { useSelector } from "react-redux";

const Cart = () => {
  const CartData = useSelector((state) => state.Cart);
  console.log(CartData,111);
  return (
    <div className="body_cart">
      <div className="cart-grid-1">
        <div className="item-grid">
          <div className="cart_image">
            <img src="https://dji-vietnam.vn/wp-content/uploads/2023/02/DJI-Mini-2-SE-510x510.jpg" />
          </div>
          <div className="cart_name">Flycam DJI Mavic 3</div>
          <div className="cart_price">200.000.vnd</div>
          <div className="qty_box">
            <button className="btn_qty">-</button>
            <input className="tbx_qty" value="0" readOnly />
            <button className="btn_qty">+</button>
          </div>
          <div className='act_box'>
                     <button className='btn_del'>Xoa</button> 
                     <button className='btn_del'>Mua</button> 
          </div>
        </div>
        <div className="item-grid">
          <div className="cart_image">
            <img src="https://dji-vietnam.vn/wp-content/uploads/2023/02/DJI-Mini-2-SE-510x510.jpg" />
          </div>
          <div className="cart_name">Flycam DJI Mavic 3</div>
          <div className="cart_price">200.000.vnd</div>
          <div className="qty_box">
            <button className="btn_qty">-</button>
            <input className="tbx_qty" value="0" readOnly />
            <button className="btn_qty">+</button>
          </div>
          <div className="act_box">
            <button className="btn_del">Xoa</button>
            <button className="btn_del">Mua</button>
          </div>
        </div>
        <div className="item-grid">
          <div className="cart_image">
            <img src="https://dji-vietnam.vn/wp-content/uploads/2023/02/DJI-Mini-2-SE-510x510.jpg" />
          </div>
          <div className="cart_name">Flycam DJI Mavic 3</div>
          <div className="cart_price">200.000.vnd</div>
          <div className="qty_box">
            <button className="btn_qty">-</button>
            <input className="tbx_qty" value="0" readOnly />
            <button className="btn_qty">+</button>
          </div>
          <div className="act_box">
            <button className="btn_del">Xoa</button>
            <button className="btn_del">Mua</button>
          </div>
        </div>
      </div>
      <div className="cart-grid-2">
        <div className="cart_total">
          <div className="total_box">
            <div className="total_group">
              <div className="total_group">Tạm tính:</div>
              <div className="total_num">200.000.000 VND</div>
            </div>
            <div className="total_group">
              <div  className="total_group">Giao Hàng:</div>
              <div className="total_num">200.000.000 VND</div>
            </div>
            <div className="total_group">
              <div className="total_group">Tổng cộng:</div>
              <div className="total_num">200.000.000 VND</div>
            </div>
            <hr/>
          <div className="btn_order_box">
              <button>Thanh toán</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
