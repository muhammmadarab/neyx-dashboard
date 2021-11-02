import React from "react";

const Product = (props) => {
  return (
    <div className="product">
      <span>
        <i className={props.icon}></i>
      </span>
      <span>
        <p>{props.name}</p>
        <h3>{props.number}</h3>
      </span>
    </div>
  );
};

export default Product;
