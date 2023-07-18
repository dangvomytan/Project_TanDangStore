import { useEffect, useState } from "react";
import "./Cart.component.css";
import { useDispatch } from "react-redux";
import { getAllCartItemById, handleDeleteCartItem, handleUpdateQtyCartItem } from "../../redux/reducer/CartItem.Slice";
import toast, { Toaster } from 'react-hot-toast';

const Cart = () => {

  const [cart, setCart] = useState({});
  const [cartItem, setCartItem] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  const customer = JSON.parse(localStorage.getItem("Users"));

  const dispatch = useDispatch();


//funtion useEff xu ly lay du lieu tu server
  useEffect(() => {
    getById(customer?.id);
  }, [cartItem]); // goi lai cart khi [cartItem] thay doi

// handle bat dong bo lay du liet set cat [Cart]
const getById = async (id) => 
{
  const result = await dispatch(getAllCartItemById(id)).unwrap();
    setCart(result);
}

  // handle update quantity 
  const updateQuantity = async (item) => {
    await dispatch(handleUpdateQtyCartItem(item)).unwrap();
  };

  // handle tang qty
  const handleIncrease = (item) => {
    const newQuantity = Number(item.quantity) + 1;
  if (newQuantity <= item.tbl_version.quantity && cart.length > 0) {
    const updatedCart = cart.map((product) => {
      if (product.id === item.id) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setCart(updatedCart);
    updateQuantity({ id: item.id, quantity: newQuantity });
    console.log({ id: item.id, quantity: newQuantity });
  }

  const itemIndex = selectedItems.findIndex((product) => product.id === item.id);
  if (itemIndex >= 0) {
    const updatedSelectedItems = selectedItems.map((product, index) => {
      if (index === itemIndex) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setSelectedItems(updatedSelectedItems);
  }
}

  // handle giam qty
  const handleReduce = (item) => {
    const newQuantity = Number(item.quantity) - 1;
    if (newQuantity > 0 && cart.length > 0) {
      const updatedCart = cart?.map((product) => {
        if (product.id === item.id) {
          return { ...product, quantity: newQuantity };
        }
        return product;
      });
      setCart(updatedCart);
      updateQuantity({ id: item.id, quantity: newQuantity });
      console.log({ id: item.id, quantity: newQuantity });
  
      const itemIndex = selectedItems.findIndex((product) => product.id === item.id);
      if (itemIndex >= 0) {
        const updatedSelectedItems = selectedItems.map((product, index) => {
          if (index === itemIndex) {
            return { ...product, quantity: newQuantity };
          }
          return product;
        });
        setSelectedItems(updatedSelectedItems);
      }
    }
  };
  
//handle
  const handleOnchangeCartItem = (item) => {
    if (selectedItems.length == 0) {
      setSelectedItems([item])
    } else {
      const index = selectedItems.findIndex(product => product.id === item.id)
      if (index >= 0) {
        const newArr = selectedItems.filter(product => product.id != item.id)
        setSelectedItems([...newArr])
      } else {
        setSelectedItems([...selectedItems, item])
      }
    }
  };

  console.log(selectedItems);

  //load cart data
  useEffect(() => {
    let total = 0;
  if(selectedItems.length>0)
  {
  selectedItems.map((item)=>{
    const price = Number(item.tbl_version.price) * Number(item.quantity); // Giá của CartItem
    total += price;
  })
  setSubTotal(total);
}
else
{
  setSubTotal(0);
}
  }, [selectedItems]);

  //xoa item
  const handleDelCartItem = async (id) => {
    try {
      await dispatch(handleDeleteCartItem(id)).unwrap();
      getById(customer.id)
      const notify = () => toast.success("Xoá thành công !");
      notify();
    }
    catch (error) {
      console.log(error);
      const notify = () => toast.error(error.message);
      notify();
    }
  }
  const handlePay = () => {
    console.log('Selected IDs:', selectedItems);
  }

  return (
    <>
      <div>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </div>
      <div className="body_cart">
        <div className="cart-grid-1" onclick="toggleCheckbox()">

          {cart?.length > 0 && cart?.map((item) => {
            return (
              <label className="lbl_checkbox">
                <input type="checkbox" className="chb_checkitem" onChange={() => handleOnchangeCartItem(item)}></input>
                <div className="item-grid" key={item.id}>
                  <div className="cart_image">
                    <img src="https://dji-vietnam.vn/wp-content/uploads/2023/02/DJI-Mini-2-SE-510x510.jpg" alt="" />
                  </div>
                  <div className="cart_name">{item.tbl_version.tbl_product.product_name} - {item.tbl_version.version_name}</div>

                  <div className="cart_price_box">
                    <div className="cart_price_qty">{item.quantity} x</div>
                    <div className="cart_price_qty">{Number(item.tbl_version.price).toLocaleString()} VNĐ</div>
                  </div>
                  <div className="cart_price">{(Number(item.tbl_version.price) * Number(item.quantity)).toLocaleString()} VNĐ</div>
                  <div className="qty_box">
                    <button className="btn_qty" onClick={() => handleReduce(item)} >-</button>
                    <input className="tbx_qty" value={item.quantity} readOnly />
                    <button className="btn_qty" onClick={() => handleIncrease(item)}>+</button>
                  </div>

                  <div className='act_box'>
                    <button className='btn_del' onClick={() => handleDelCartItem(item.id)}>Xoá</button>
                  </div>
                </div>
              </label>

            );
          })}





        </div>


        <div className="cart-grid-2">
          <div className="cart_total">
            <div className="total_box">
              <div className="total_group">
                <div className="total_group">Tạm tính:</div>
                <div className="total_num">{subTotal.toLocaleString()} VND</div>
              </div>
              <div className="total_group">
                <div className="total_group">Giao Hàng:</div>
                <div className="total_num">10.000 VND</div>
              </div>
              <div className="total_group">
                <div className="total_group">Tổng cộng:</div>
                <div className="total_num">{subTotal ? (Number(subTotal) + 10000).toLocaleString() : 0} VND</div>
              </div>
              <hr />
              <div className="btn_order_box">
                <button onClick={() => handlePay()}>Thanh toán</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;