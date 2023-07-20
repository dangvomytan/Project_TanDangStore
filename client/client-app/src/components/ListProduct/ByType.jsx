import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ByType = () => {
     const location = useLocation();
     const navigate= useNavigate();
     const searchParams = new URLSearchParams(location.search);
     const type_id = searchParams.get('type_id');
     const [data, setData] = useState([]);
     useEffect(() => {
          const handleGetDataProduct = async () => {
               try {
                    const response = await axios.get(
                         `http://localhost:8080/api/v1/product/get-category-type-product`
                    );
                    setData(response.data.data);
               } catch (error) {
                    console.error(error);
               }
          };
          handleGetDataProduct();
     }, []);
     // console.log(data);
     const handleOnClickProduct = (item) =>{
      navigate('/versions',{state:item});
     }
     return (
          <>
            <div className='body_list'>
              {data?.map((category) => {
                return category.tbl_types.map((type) => {
                    if(type.id == type_id){
                  return type.tbl_products.map((product) => {
                    return (
                      <div key={product.id}
                      onClick={() => handleOnClickProduct(product)}
                      >
                        <div className='card'>
                          <div className='card_image'>
                            <img src='https://dji-vietnam.vn/wp-content/uploads/2023/01/djimavic3classic-desk-dji-247x247.png' />
                          </div>
                          <div className='card_text'>
                            <div className='card_title'>{product.product_name}</div>
                            <div className='card_price'></div>
                          </div>
                        </div>
                      </div>
                    );
                  });
               }});
               }
              )}
            </div>
          </>
        );
}

export default ByType
