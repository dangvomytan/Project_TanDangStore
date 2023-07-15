import React, { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import "./Header.css";
import { Collapse } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutCustomer } from "../../redux/reducer/Customer.Slice";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [userToggle, setUserToggle] = useState(false);
  const listCategory = useSelector((state) => state.category);
  const listType = useSelector((state) => state.type);
  const dispatch =useDispatch();
  const navigate = useNavigate()
  // console.log("list category", listCategory.data);
  // console.log(">>>>", listType.data);

  const [hasToken] = useState(localStorage.getItem("AccessToken"));
  const userLogin = useMemo(() => {
       if (hasToken) {
            const User = JSON.parse(localStorage.getItem("Users"));
            //get data customer
            return User.name;
       }
  }, [hasToken])


  const handleLogOut = () => {
    dispatch(logoutCustomer());
    setTimeout(() => {
      navigate("/auth/login");
    }, 500);
  };

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
            <div className="nav_icon" onClick={() => setUserToggle(!userToggle)}>
              <div className="header_nav_icon">
                <box-icon name="user-circle"></box-icon>
              </div>
              <div className="header_nav_icon_text" >{userLogin?userLogin:'Đăng nhập'}</div>
            </div>
          </div>
        </div>
      </div>
      <div>
              <div className="header_hiden">
        <Collapse in={menuToggle}>
          <div className="menu">
            <ul>
              {listCategory.data?.map((category) => {
                return (
                  <li key={category.id}>
                    <Link to ={`/products?category_id=${category.id}`} className="menu_item">
                      <b>{category.name}</b>
                    </Link >
                    <div className="submenu">
                      <ul>
                        {
                          listType.data?.map((type) => {
                            if (type.id_category == category.id) {
                              return (
                                <li key={type.id}>
                                  <Link to ={`/products?type_id=${type.id}`} className="menu_item">
                                    <b>{type.name}</b>
                                    </Link >
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
        <Collapse in={userToggle}>
        {userLogin ?  (<div className="info_user">
          <div className="info_text">
            <b>Chào, {userLogin}</b>
          </div>
          <hr />
          <Link >
            <div className="info_text">Hồ sơ cá nhân</div>
          </Link>
          <hr />

           <div className="info_text" onClick={handleLogOut} >
             Đăng xuất</div>
        </div>):(<div className="info_user">
          <hr />
          <Link to='auth/login'>
            <div className="info_text">Đăng nhập</div>
          </Link>
          <hr />
          <Link to='auth/register'>
           <div className="info_text">
             Đăng ký</div>
             </Link >
        </div>)}
        </Collapse>
      </div>
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
