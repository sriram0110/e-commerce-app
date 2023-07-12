import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return ( 
      <div className="ui grid" key={id}>
        <Link to={`/product/${id}`}>
        <div className=" four column wide" >
          <div className="ui link cards">
            <div className="ui card">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="ui header">{title}</div>
                <div className="uimeta price">$ {price}</div>
                <div className="uimeta">{category}</div>
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
