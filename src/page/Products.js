import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은? ", searchQuery);
    // let url = `http://localhost:5000/products`;
    let url = `https://my-json-server.typicode.com/ha02e/gentlemonster-react/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("ddd", data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

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
