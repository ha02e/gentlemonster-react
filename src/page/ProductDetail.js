import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    // let url = `http://localhost:5000/products/${id}`;
    let url = `https://my-json-server.typicode.com/ha02e/gentlemonster-react/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("ddddd", data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="product-detail">
      <Row>
        <Col className="product-image">
          <img src={product?.img} alt="product" />
        </Col>
        <Col className="product-contents">
          <div>{product?.title}</div>
          <div>{product?.description}</div>
          <div>{product?.price.toLocaleString("ko-KR")}원</div>
          <div className="button-area">
            <Button variant="outline-dark" size="lg">
              쇼핑백에 추가하기
            </Button>
            <Button variant="outline-dark" size="lg">
              매장에서 바로 픽업하기
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
