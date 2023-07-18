import React from "react";
import './Header.css';

const Header = (props) => {
  const { open, setOpen } = props;

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
        <div>Tan Dang</div>
        <div>
          <button >
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
