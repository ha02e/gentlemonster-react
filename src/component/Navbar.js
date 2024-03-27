import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menuList = [
    "선글라스",
    "안경",
    "콜라보레이션",
    "스타일",
    "브랜드이슈",
    "매장보기",
    "수리서비스",
  ];

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="navigation-bar">
      <div className="nav-top">
        <div className="logo-section">
          <Link to={"/"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Gentle_monster_logo.svg/2560px-Gentle_monster_logo.svg.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="icon-section">
          <div className="search-section">
            <input type="text" placeholder="검색어를 입력하세요" />
            <button className="search-icon">
              <FontAwesomeIcon icon={faSearch} size="lg" />
            </button>
          </div>
          <div className="login-section" onClick={goToLogin}>
            <FontAwesomeIcon icon={faUser} size="lg" />
            <div>로그인</div>
          </div>
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
