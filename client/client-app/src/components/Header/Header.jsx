import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import "./Header.css";
import { Collapse } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const listCategory = useSelector((state) => state.category);
  const listType = useSelector((state) => state.type);
  console.log("list category", listCategory.data);
  console.log(">>>>",listType.data);
  return (
    <header>
      <div className="header_container">
        <div className="header_inner">
          <div className="logo">
            <h1>TanDangStore</h1>
          </div>
          <div className="search">
            <input
              type="text"
              className="tbx_header_search"
              placeholder="Search ..."
            />
            <button className="btn_header_search">
              <box-icon name="search"></box-icon>
            </button>
          </div>
          <div className="header_icon_nav">
            <div className="nav_icon">
              <div className="header_nav_icon">
                <box-icon type="solid" name="truck"></box-icon>
              </div>
              <div className="header_nav_icon_text">Đơn hàng</div>
            </div>
            <div className="nav_icon">
              <div className="header_nav_icon">
                <box-icon name="trip"></box-icon>
              </div>
              <div className="header_nav_icon_text">Cửa hàng</div>
            </div>
            <div className="nav_icon">
              <div className="header_nav_icon">
                <box-icon name="shopping-bag"></box-icon>
              </div>
              <div className="header_nav_icon_text">Giỏ hàng</div>
            </div>
            <div className="nav_icon">
              <div className="header_nav_icon">
                <box-icon name="user-circle"></box-icon>
              </div>
              <div className="header_nav_icon_text">Đăng nhập</div>
            </div>
          </div>

          <Collapse in={menuToggle}>
            <div className="menu">
              <ul>
                {listCategory.data?.map((category) => {
                  return (
                    <li key={category.id}>
                      <a href="#" className="menu_item">
                        <b>{category.name}</b>
                      </a>
                      <div className="submenu">
                        <ul>
                          {
                            listType.data?.map((type)=>{
                              if(type.id_category == category.id){
                                return (
                                                                  <li key={type.id}>
                                                                    <a href="#" className="menu_item">
                                                                      <b>{type.name}</b>
                                                                    </a>
                                                                  </li>
                                                                )
                              }
                            })
                          }
                        </ul>

                      </div>
                    </li>
                  )
                })}





              </ul>
            </div>
          </Collapse>
        </div>
      </div>
      <div>
        <div className="top_nav">
          <div className="nav_menu" onClick={() => setMenuToggle(!menuToggle)}>
            <div className="menu_icon">
              <box-icon name="menu-alt-left"></box-icon>
            </div>
            <div>
              <h3>Danh mục sản phẩm</h3>
            </div>
          </div>
          {/* <div>skdlfs</div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
