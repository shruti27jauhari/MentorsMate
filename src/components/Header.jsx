import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <header>
    <HeaderContainer>
      <Logo>
       Mentor<span>Mate</span>
      </Logo>
      <Nav>
        <NavLink href="/main">Home</NavLink>
        <NavLink href="/BlogPage">Blogs</NavLink>
        <NavLink href="/Feedback">Feedback</NavLink>
        <NavLink href="/BuildResume">Build Resume</NavLink>
        <NavLink href="/login">Sign in</NavLink>
        <NavLink href="/StudentProfile">Profile</NavLink>
      </Nav>
    </HeaderContainer>
    </header>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px ;
padding-right: 35px;
  align-items: center;
  background-color: #000;
  color: #fff;

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
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;
