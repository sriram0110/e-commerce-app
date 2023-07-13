import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router";
import {
  addToCartAction,
  removeSelectedProduct,
  selectedProducts,
} from "../redux/actions/productActions";

const ProductDetail = (props) => {
  const product = useSelector((state) => state.product.singleProduct);
  // console.log(product);
  const { title, image, price, category, description } = product;

  const dispatch = useDispatch();
  const { productId } = useParams();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log(error);
      });

    const responseData = response.data;

    dispatch(selectedProducts(responseData));
  };

  useEffect(() => {
    // console.log(productId);

    if (productId && productId !== "") fetchProductDetail();

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const handleAddCart = () => {
    dispatch(addToCartAction(product));
    props.history.push("/cartlist");
  };

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                {/* <div className="ui horizontal animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div> */}
                <button
                  className="ui positive basic button"
                  onClick={handleAddCart}
                >
                  Add to Cart
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withRouter(ProductDetail);
