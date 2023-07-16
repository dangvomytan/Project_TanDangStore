import { useEffect } from "react";
import "./Cart.component.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartItemById } from "../../redux/reducer/CartItem.Slice";

const Cart = () => {
  // const cartData = useSelector((state) => state.cart);
  const customer = JSON.parse(localStorage.getItem("Users"));
  const dispatch = useDispatch();

  // const cart = cartData.data && cartData.data.find(data => data.id == 2 );
  // console.log(cartData,111);
  // console.log(cart?.tbl_cartitems,222);
  
console.log(customer,3333);
useEffect(() => {

  const getById = async (id) =>{
    await dispatch(getAllCartItemById(id)).unwrap();
  }
  getById(customer.id);
}, []);









  return (
    <div className="body_cart">
      <div className="cart-grid-1">

      {/* {cart?.tbl_cartitems.length>0 && cart?.tbl_cartitems.map((item) => {
        return (
          <div className="item-grid" key={item.id}>
            <div className="cart_image">
              <img src="https://dji-vietnam.vn/wp-content/uploads/2023/02/DJI-Mini-2-SE-510x510.jpg" alt="" />
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
        );
      })} */}

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
