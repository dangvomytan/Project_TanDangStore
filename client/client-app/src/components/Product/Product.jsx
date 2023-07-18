import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

const ProductComponent = () => {
     const location = useLocation();
     const navigate= useNavigate();
     // Lấy giá trị của tham số 'id' từ URL
     const productData = useSelector((state) => state.product);
     const searchParams = new URLSearchParams(location.search);
     const category_id = searchParams.get('category_id');
     const type_id = searchParams.get('type_id');
     // console.log(category_id);
     // console.log(type_id);
     // console.log(productData.data);

     const handleOnClickProduct = (item) =>{
          // console.log("item>>>", item);
          navigate('/detail',{state:item});
     }
     return (
          <>
               <div className='body_list'>
                    {productData.data?.map((item) => {
                         return (
                              <div key={item.id} onClick={()=>handleOnClickProduct(item)}>
                                   <div className='card'>
                                        <div className='card_image'>
                                             <img src='https://dji-vietnam.vn/wp-content/uploads/2023/01/djimavic3classic-desk-dji-247x247.png' />
                                        </div>
                                        {/* <div className='card_menmo'>
                                   <div className='card_discount'>
                                        <span>-50%</span>
                                   </div>
                              </div> */}
                                        <div className='card_text'>
                                             <div className='card_title'>{item.product_name} {item.tbl_versions[0].version_name}</div>
                                             <div className='card_price'>
                                                  <div className='price_new'>{item.tbl_versions[0].price}</div>
                                                  {/* <div className='price_old'>14.000.000 VND</div> */}
                                             </div>
                                        </div>

                                   </div>
                              </div>
                         )
                    })}

               </div>
          </>
     )
}

export default ProductComponent