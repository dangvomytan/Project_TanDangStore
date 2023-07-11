import React from "react";
import "boxicons";

const Header = () => {
  return (
    <>
      <div id="header">
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

            <div className="menu">
              <ul>
                <li>
                  <a href="#" className="menu_item">
                    <b>DRONE</b>
                  </a>
                  <div className="submenu">
                    <ul>
                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>

                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" className="menu_item">
                    <b>osimo / GIMBLE</b>
                  </a>
                  <div className="submenu">
                    <ul>
                      <li>
                        <a href="#" className="menu_item">
                          <b>basic</b>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#" className="menu_item">
                    <b>PHU KIEN</b>
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_item">
                    <b>PHU KIEN</b>
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_item">
                    <b>PHU KIEN</b>
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_item">
                    <b>PHU KIEN</b>
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_item">
                    <b>PHU KIEN</b>
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_item">
                    <b>PHU KIEN</b>
                  </a>
                </li>
                <li>
                  <a href="#" className="menu_item">
                    <b>PHU KIEN</b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="top_nav">
          <div className="nav_menu">
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
    </>
  );
};

export default Header;
