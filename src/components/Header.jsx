import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <Logo>
        Mentor<span>Mate</span>
      </Logo>
      <Nav>
        <NavLink to="/" isActive={location.pathname === "/"}>
          Home
        </NavLink>
        <NavLink to="/blogpage" isActive={location.pathname === "/blogpage"}>
          Blogs
        </NavLink>
        <NavLink to="/feedback" isActive={location.pathname === "/feedback"}>
          Feedback
        </NavLink>
        <NavLink to="/buildresume" isActive={location.pathname === "/buildresume"}>
          Build Resume
        </NavLink>
        <NavLink to="/login" isActive={location.pathname === "/login"}>
          Sign in
        </NavLink>
        <NavLink to="/studentprofile" isActive={location.pathname === "/studentprofile"}>
          Profile
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  padding-right: 35px;
  align-items: center;
  background-color: #000;
  color: #fff;
  height: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #fff;

  span {
    color: #f1c40f;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const NavLink = styled(Link)`
  color: ${(props) => (props.isActive ? "#f1c40f" : "#fff")};
  text-decoration: none;
  font-size: 16px;
  transition: color 0.3s;

  &:hover {
    text-decoration: underline;
  }
`;
