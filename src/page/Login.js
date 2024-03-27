import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, FloatingLabel, Button, Container } from "react-bootstrap";

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (event) => {
    event.preventDefault();
    // console.log("login!!");
    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container className="login-form" fluid>
      <h3>로그인</h3>
      <Form onSubmit={(event) => loginUser(event)}>
        <FloatingLabel
          controlId="floatingInput"
          label="이메일"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="비밀번호"
          className="mb-3"
        >
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        <Button variant="dark" type="submit" size="lg" className="mb-3 w-100">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
