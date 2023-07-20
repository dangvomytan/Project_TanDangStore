import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Versions = () => {
     const navigate= useNavigate();
     const [data, setData] = useState([]);
     useEffect(() => {
          const handleGetDataProduct = async () => {
               try {
                    const response = await axios.get(
                         `http://localhost:8080/api/v1/product/get_product_version_image_pecifications_like_productName`
                    );
                    setData(response.data.data);
               } catch (error) {
                    console.error(error);
               }
          };
          handleGetDataProduct();
     }, []);
     console.log(data);

     const handleOnClickProduct = (item,ver) =>{
          navigate('/detail',{state:{product:item,version:ver} });
     }

     return (
      <>
            <div className='body_list'>
              {data?.map((product) => {
                return product?.tbl_versions?.map((version) => {
                  return version?.tbl_images?.map((images) => {
                    return (
                      <div key={product.id} 
                        onClick={() => handleOnClickProduct(product,version)}
                      >
                        <div className='card'>
                          <div className='card_image'>
                            <img src={images.url} />
                          </div>
                          <div className='card_text'>
                            <div className='card_title'>{product.product_name} - {version.version_name} </div>
                            <div className='card_price'>{Number(version.price).toLocaleString()} VND</div>
                          </div>
                        </div>
                      </div>
                    );
                  });
                });
               }
              )}
            </div>
      </>
    );
}

export default Versions
