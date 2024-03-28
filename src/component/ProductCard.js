import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${item.id}`);
  };

  return (
    <div className="product-card" onClick={showDetail}>
      {item?.blight === true && (
        <div className="product-light">Blue Light Protection</div>
      )}
      <div className="product-image">
        <img src={item?.img} alt="product img" />
      </div>
      <div className="product-name">{item?.title}</div>
      <div className="product-price">
        &#8361;&nbsp;{(item?.price).toLocaleString("ko-KR")}
      </div>
      <div className="product-new">{item?.new === true ? "New" : ""}</div>
    </div>
  );
};

export default ProductCard;
