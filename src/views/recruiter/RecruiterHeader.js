import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  background: #f6f6f6;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 calc((100vw - 1000px) / 2);
  z-index: 10;
`;
const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 2rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #333;
  }
  &:hover {
    color: #256ce1;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  flex: 0.7;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  border-radius: 4px;
  padding: 10px 22px;
  color: #333;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #010606;
    color: #fff;
  }
`;
const RecruiterHeader = () => {
  return (
    <div className="RecruiterHeader">
      <Nav>
        <NavLink to="/">Logo</NavLink>
        <Bars />
        <NavMenu>
          <NavBtn>
            <NavBtnLink to="/">Giới Thiệu</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/">Dịch Vụ</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/">Báo Giá</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/">Liên Hệ</NavBtnLink>
          </NavBtn>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/">Đăng nhập</NavBtnLink>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default RecruiterHeader;
