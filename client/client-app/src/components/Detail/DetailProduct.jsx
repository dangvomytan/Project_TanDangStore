import React, { useEffect } from 'react'
import './DetailProduct.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import { AddToCart } from '../../redux/reducer/CartItem.Slice';
import { getAllCartItem } from '../../redux/reducer/CartItem.Slice'

const DetailProduct = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const product = location.state;
  const navigate  =  useNavigate();

  const [version, setVersion] = useState(product.tbl_versions[0]);
  const [quantity, setquantity] = useState(1);
  console.log(version,111);



  // chon phien bang
  const handlechangeVer = (ver) => {
    setVersion(ver);
  }

  // tang qty
  const handleIncrease = () => {
    if (quantity >= 0) {
      const newQuantity = Number(quantity) + 1;
      setquantity(newQuantity);
    }
  }

  // giam qty
  const handleReduce = () => {
    if (quantity > 0) {
      const newQuantity = Number(quantity) - 1;
      setquantity(newQuantity);
    }
  }

//get cart
  useEffect(() => {
    const getCartItem = async () => {
      await dispatch(getAllCartItem()).unwrap();
    }
    getCartItem();
  }, []);



  //Cick add to cart
  const handleClickAddtoCart = async (ver) => {
    const customer = JSON.parse(localStorage.getItem("Users"));
    const item = {
      id_version: version.id,
      id_cart:customer.id ,
      quantity: quantity,
    }
    console.log(222,item);
    try {
      await dispatch(AddToCart(item)).unwrap();
      const notify = () => toast.success("Successfully");
      notify();
      setTimeout(() => {
        // navigate("/auth/login");
      }, 1500);
    }
    catch (error) {
      console.log(error.message);
      const notify = () => toast.error(error.message);
      notify();
    }
  };

  const handleClickGoToCart = () =>{
            navigate("/auth/cart");
  }
  return (
    <>
      <div>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
        />
      </div>
      <div className='body_detail'>
        <div className='grid-item-1'>
          <div className='detail_image'>
            <img src="https://dji-vietnam.vn/wp-content/uploads/2023/04/Flycam-DJI-Mavic-3-Pro-Cine-13-premium-combo.jpg" alt="" />
          </div>
        </div>
        <div className='grid-item-2'>
          <div className='detail_header'>
            <h3><b>{product.product_name}</b></h3>
          </div>
          <div className='detail_body'>
            <div className='detail_brand'><b>Thương hiệu:</b> DJI</div>
            <div className='detail_brand'><b>Ver:</b> {version.version_name}</div>
            <div className='detail_dev'>{version.dec || "Thông tin đang được cập nhật"}</div>
            <div className='detail_price'>{Number(version.price).toLocaleString('ed' - 'ED')} VND</div>
            <div className='detail_quantity'>
              <div className='detail_qty_box'>
                <div className='qty_text'>
                  <div> {quantity} </div>
                </div>
                <div className='btn_box'>
                  <button className='btn_qty' onClick={() => handleIncrease()}>+</button>
                  <button className='btn_qty' onClick={() => handleReduce()}>-</button>
                </div>
              </div>
            </div>
            <div className='detail_sub'>
              <button className='btn_submit' onClick={() => handleClickAddtoCart(version)}>Thêm vào giỏ hàng</button>
              <button className='btn_submit' onClick={()=> handleClickGoToCart()}>Giỏ hàng</button>
            </div>
            <div>
              <div ><b>Lựa chọn phiên bản:</b></div>
              <div className='ver_box'>
                {product.tbl_versions.map((item) => {
                  return (
                    <button className='btn_ver' onClick={() => handlechangeVer(item)}>{item.version_name}</button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        {/* <div className='grid-item-3'>3 </div> */}
      </div>
    </>
  )
}

export default DetailProduct