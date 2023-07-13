import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const LOCAL_STORAGE_KEY = "cartItems";

function CartList() {
  const addedCartList = useSelector((state) => state.addCart.cartItems);

  useEffect(() => {
    const storageCartList =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(addedCartList));
    console.log("gsh", addedCartList);
  }, []);

  return (
    <div>
      {addedCartList &&
        addedCartList.map((item) => (
          <>
            <div key={item.id}>
              {item.title}

              <img style={{ width: "50%" }} src={item.image} />

              {item.price}
            </div>
          </>
        ))}
    </div>
  );
}

export default CartList;
