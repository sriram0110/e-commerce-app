import React from "react";

const Header = () => {
  return (
    <div className="ui menu">
      <div className="ui center">
        <h1 className="ui header">Shopping App</h1>
        <div className="right menu">
          <div className="ui item">
            <i className="large shopping cart icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
