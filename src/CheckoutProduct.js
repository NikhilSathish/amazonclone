import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

const CheckoutProduct = forwardRef(
  ({ key, id, title, image, price, rating, hideButton }, ref) => {
    const [{ basker }, dispatch] = useStateValue();
    const removeFromBasket = () => {
      dispatch({
        type: "REDUCE_FROM_BASKET",
        id: id,
      });
    };

    return (
      <div className="checkoutProduct" ref={ref}>
        <img className="checkoutProudct__image" src={image} />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove the product</button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
