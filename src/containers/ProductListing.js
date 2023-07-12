import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductComponent from "./ProductComponents";
import axios from "axios";
import { setProducts } from "../redux/actions/productActions";

const ProductListing = () => {

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((error) => {
        console.log(error);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid">
        <br />
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
