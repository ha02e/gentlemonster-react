import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={item?.img} />
      </div>
      <div>{item?.choice === true ? "Conscious choice" : ""}</div>
      <div className="product-name">{item?.title}</div>
      <div className="product-price">
        &#8361;&nbsp;{(item?.price).toLocaleString("ko-KR")}
      </div>
      <div className="product-new">{item?.new === true ? "New" : ""}</div>
    </div>
  );
};

export default ProductCard;
