import React, { useMemo, useState } from "react";
import './Header.css';
import { useDispatch } from "react-redux";
import { handelLogoutUser } from "../../redux/reducer/User.Slice";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const { open, setOpen } = props;

  const [hasToken] = useState(localStorage.getItem("AccessToken"));

  const userLogin = useMemo(() => {
       if (hasToken) {
            const User = JSON.parse(localStorage.getItem("User"));
            return User;
       }
  }, [hasToken])
console.log(userLogin);

  const handleLogOut = () => {
    dispatch(handelLogoutUser());
    navigate("/");
  }

  return (
    <div className="item_1">
      <div>
        <button onClick={() => setOpen(!open)}>
          <box-icon
            name="menu-alt-left"
            size="md"
            color="var(--color-admin-icon-menu)"
          ></box-icon>
        </button>
      </div>

      <div className="item_2">
        <div>{userLogin ? userLogin.name :""}</div>
        <div>
          <button onClick={()=>handleLogOut()}>
            <box-icon
              name='log-out'
              size="md"
              color="var(--color-admin-icon-menu)"
            ></box-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
