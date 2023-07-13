import React from "react";


const Header = (props) => {
  const handleCartList = () => {};
  return (
    <div className="ui menu">
      <div className="ui center">
        <h1 className="ui header">Shopping App</h1>
        <div className="right menu">
          <button className="ui item" onClick={handleCartList}>
            <i className="large shopping cart icon"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
