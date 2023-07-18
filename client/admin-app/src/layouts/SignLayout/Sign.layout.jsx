import React from "react";
import img_bg from "../../assets/images/mavic3seri.png";
import "./Sign.layout.css";

const SignLayout = ({ children }) => {
  return (
    <>
      <div className="Main-body">
        <div className="Main_Container">
          <div className="box_position">
            <div className="form_conten">
              <div className="box_text">
                <h1> Welcome !</h1>
              </div>
              <div className="box_form">{children}</div>
            </div>
            <div className="footer_box ">
              <div className="footer_nav_text">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Product</a>
                <a href="#">Blog</a>
                <a href="#">pricing</a>
              </div>
              <div className="footer_nav_icon">
                <div>
                  <box-icon
                    type="logo"
                    color="var(--color-white)"
                    size="md"
                    name="facebook-square"
                  ></box-icon>
                </div>
                <div>
                  <box-icon
                    type="logo"
                    color="var(--color-white)"
                    size="md"
                    name="twitter"
                  ></box-icon>
                </div>
                <div>
                  <box-icon
                    type="logo"
                    color="var(--color-white)"
                    size="md"
                    name="instagram-alt"
                  ></box-icon>
                </div>
                <div>
                  <box-icon
                    type="logo"
                    color="var(--color-white)"
                    size="md"
                    name="pinterest"
                  ></box-icon>
                </div>
                <div>
                  <box-icon
                    type="logo"
                    color="var(--color-white)"
                    size="md"
                    name="linkedin-square"
                  ></box-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignLayout;
