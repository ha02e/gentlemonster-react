import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = ({ setAuthenticate, authenticate }) => {
  const menuList = [
    "선글라스",
    "안경",
    "콜라보레이션",
    "스타일",
    "브랜드이슈",
    "매장보기",
    "수리서비스",
  ];

  const [searchKeyword, setSearchKeyword] = useState("");

  const navigate = useNavigate();
  const goToLogin = () => {
    if (authenticate === true) {
      if (window.confirm("로그아웃 하시겠습니까?")) {
        setAuthenticate(false);
      }
    } else {
      navigate("/login");
    }
  };

  const searchEnter = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      console.log("keyword : ", keyword);

      navigate(`/?q=${keyword}`);
      setSearchKeyword("");
    }
  };

  const searchClick = () => {
    let keyword = document.getElementById("searchInput").value;
    navigate(`/?q=${keyword}`);
    setSearchKeyword("");
  };

  return (
    <div className="navigation-bar">
      <div className="nav-top">
        <div className="logo-section">
          <Link to={"/"}>
            <img
              src="https://web-resource.gentlemonster.com/assets/img/mailchimp/gm-serif-logo.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="icon-section">
          <div className="search-section">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              id="searchInput"
              value={searchKeyword}
              onChange={(event) => setSearchKeyword(event.target.value)}
              onKeyPress={(event) => searchEnter(event)}
            />
            <button className="search-icon" onClick={searchClick}>
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
          </div>
          <div className="login-section" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} size="lg" />
            <div className="login-text">
              {authenticate === true ? "로그아웃" : "로그인"}
            </div>
          </div>
          <button className="mobile-menu-icon" onClick={searchClick}>
            <FontAwesomeIcon icon={faBars} size="lg" />
          </button>
          <div className="mobile-menu-section"></div>
        </div>
      </div>
      <div className="nav-bottom">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
