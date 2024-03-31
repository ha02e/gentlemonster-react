import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";
import { Form, FloatingLabel, Button, Container } from "react-bootstrap";

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [validated, setValidated] = useState(false);

  const loginUser = (event) => {
    event.preventDefault();
    dispatch(authenticateAction.login(id, password));
    navigate("/");

    // const form = event.currentTarget;

    // if (form.checkValidity() === false) {
    //   event.preventDefault();
    //   event.stopPropagation();
    // } else {
    //   // console.log("login!!");
    //   // setAuthenticate(true);
    //   dispatch(authenticateAction.login(id, password));
    //   // setValidated(true);
    //   navigate("/");
    // }
  };

  return (
    <Container className="login-form">
      <h3>로그인</h3>
      <Form onSubmit={(event) => loginUser(event)}>
        <FloatingLabel
          controlId="floatingInput"
          label="이메일"
          className="mb-3"
        >
          <Form.Control
            required
            type="email"
            placeholder="name@example.com"
            onChange={(event) => setId(event.target.value)}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="비밀번호"
          className="mb-3"
        >
          <Form.Control
            required
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FloatingLabel>
        <Button variant="dark" type="submit" size="lg" className="mb-3 w-100">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
