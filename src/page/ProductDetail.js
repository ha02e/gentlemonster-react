import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
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
          <div className="product-top">
            {product?.new === true && <div className="new">New</div>}
            {product?.blight === true && (
              <div className="blight">Blue Light Protection</div>
            )}
          </div>
          <div className="product-name">{product?.title}</div>
          <div className="product-text">{product?.description}</div>
          <div className="product-price">
            {product?.price.toLocaleString("ko-KR")}원
          </div>
          <Form.Select size="lg" className="product-color border-dark">
            {product?.color.map((colorItem, idx) => (
              <option key={idx}>{colorItem}</option>
            ))}
          </Form.Select>
          <div className="button-area">
            <Button variant="outline-dark" size="lg">
              관심상품 추가하기
            </Button>
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
