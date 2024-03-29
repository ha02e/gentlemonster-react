import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";

const Products = () => {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    // let url = `http://localhost:5000/products`;
    let url = `https://my-json-server.typicode.com/ha02e/gentlemonster-react/products`;
    // let url = `https://my-json-server.typicode.com/ha02e/gentlemonster-react/products`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("ddd", data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="product-section">
      <Container fluid>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
