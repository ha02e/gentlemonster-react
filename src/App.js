import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Products from "./page/Products";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";

//1. 전체 상품 페이지, 로그인 페이지, 상품 상세 페이지
//1-1. navigation bar 만들기
//2. 전체 상품 페이지 - 전체 상품 보기
//3. 로그인 페이지 - 로그인 버튼을 누르면 로그인 페이지로 이동, 상품 디테일 눌렀을 때 로그인 안됐을 경우 로그인 페이지로 이동
//4. 로그인이 되어있으면 상품 상세 페이지로 이동
//5. 로그아웃 버튼을 누르면 로그아웃이 된다.
//6. 로그아웃이 되면 상품 상세 페이지를 볼 수 없다.(다시 로그인 페이지로 이동)
//7. 로그인 상태면 로그아웃 버튼이 보이고, 로그인이 안되어있으면 로그인 버튼이 보인다.

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("aaa", authenticate);
  }, [authenticate]);

  return (
    <div>
      <div className="wrapper">
        <Navbar />

        {/* <div>
          <img src="https://web-resource.gentlemonster.com/assets/img/shop/list/special_area/2024-maison-margiela/collaborations/cut-image-pc-v2.jpg" />
        </div> */}
        <Routes>
          <Route path="/" element={<Products />} />
          <Route
            path="/login"
            element={<Login setAuthenticate={setAuthenticate} />}
          />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
