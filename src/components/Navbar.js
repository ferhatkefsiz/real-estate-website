import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  z-index: 100;
  position: fixed;
  width: 100%;
  background-color: #000d1a;
`;

const Logo = styled(Link)`
  display: flex;
  color: #fff;
  align-items: center;
  font-style: italic;
  font-weight: bold;
  text-decoration: none;
  &:hover{
    color: #cd853f;
  }
`;

const NavLink = css`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  font-weight: 500;
  &:hover{
    color: #cd853f;
  }
`;

const MenuBars = styled(FaBars)`
  display: none;
  height: 30px;
  width: 30px;
  cursor: pointer;
  color: white;
  
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  text-decoration: none;
`;

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <Logo to="/">ELIXR</Logo>
      <MenuBars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>  
        <Button to="/contact" primary="true">
          {" "}
          Contact us{" "}
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
