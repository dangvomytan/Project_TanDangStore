import React from "react";

const Header = (props) => {
  const { open, setOpen } = props;

  return (
    <div className="item_1">
      <button onClick={() => setOpen(!open)}>
        <box-icon
          name="menu-alt-left"
          size="md"
          color="var(--color-admin-icon-menu)"
        ></box-icon>
        haha
      </button>
    </div>
  );
};

export default Header;
