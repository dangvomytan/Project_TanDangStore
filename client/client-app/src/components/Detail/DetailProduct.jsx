import React from 'react'
import './DetailProduct.css'

const DetailProduct = () => {
  return (
    <div className='body_detail'>
      <div className='grid-item-1'>
        <div className='detail_image'>
        <img src="https://dji-vietnam.vn/wp-content/uploads/2023/04/Flycam-DJI-Mavic-3-Pro-Cine-13-premium-combo.jpg" alt="" />
        </div>
      </div>
       <div className='grid-item-2'>
        <div className='detail_header'>
            <h3><b>DJI MINI 2 PRO</b></h3>
        </div>
        <div className='detail_body'>
          <div className='detail_brand'><b>Thuong hieu:</b> DJI</div>
          <div className='detail_brand'><b>Ver:</b> FUll topping</div>
          <div className='detail_dev'>
            Thế hệ tiếp theo của dòng Mini SE, chiếc flycam DJI Mini 2 SE với trọng lượng 249g nhỏ gọn, hệ thống truyền dẫn O2, quay video 2,7K/30fps, cảm biến 1/2.3 CMOS 12MP sắc nét cùng thời lượng bay 31 phút.
            </div>
          <div className='detail_price'>200.000 VND</div>
          <div className='detail_quantity'>
            <div className='detail_qty_box'>
              <div className='qty_text'>
                <div> 0 </div>
              </div>
              <div className='btn_box'>
                <button className='btn_qty'>+</button>
                <button className='btn_qty'>-</button>
              </div>
            </div>
          </div>
          <div className='detail_sub'>
            <button className='btn_submit'>Thêm vào giỏ hàng</button>
            <button className='btn_submit'>Mua ngay</button>
          </div>
          <div>
            <div ><b>Lựa chọn phiên bản:</b></div>
            <div className='ver_box'>
              <button className='btn_ver'>full</button>
              <button className='btn_ver'>Combo</button>
            </div>
          </div>
        </div>
       </div>
       {/* <div className='grid-item-3'>3 </div> */}
    </div>
  )
}

export default DetailProduct