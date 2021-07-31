import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  background: #f6f6f6;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 calc((100vw - 1350px) / 2);
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
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  position: relative;
  @media screen and (max-width: 768px) {
    display: none;
  }
  &:hover > ul {
    display: block;
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
const DropDownMenuLink = styled(Link)`
  border-radius: 4px;
  padding: 10px 22px;
  color: #333;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
`;
const DropDownMenu = styled.ul`
  width: 150%;
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-block;
  background: #f6f6f6;
  color: #333;
  display: none;
  position: absolute;
  top: 56px;
  left: 0;
  &:before {
    content: "";
    width: 100%;
    height: 30px;
    position: absolute;
    top: -17px;
  }
`;

const DropDownMenuItem = styled.li`
  position: relative;
  padding: 10px 0;

  ${
    "" /* border-radius: 4px;
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
  } */
  }
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #010606;
  }
  &:hover a {
    color: #fff;
  }
`;
const Header = () => {
  return (
    <div className="Header">
      <Nav>
        <NavLink to="/">Logo</NavLink>
        <Bars />
        <NavMenu>
          <NavBtn>
            <NavBtnLink to="/">Trang chủ</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/">Quản lý tài khoản</NavBtnLink>
            <DropDownMenu>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">Tài khoản</DropDownMenuLink>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">Quản lý nhân viên</DropDownMenuLink>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">Giấy phép kinh doanh</DropDownMenuLink>
              </DropDownMenuItem>
            </DropDownMenu>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/">Quản lý dịch vụ</NavBtnLink>
            <DropDownMenu>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">Thông tin dịch vụ</DropDownMenuLink>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">Lịch sử kích hoạt</DropDownMenuLink>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">Gợi ý các dịch vụ</DropDownMenuLink>
              </DropDownMenuItem>
            </DropDownMenu>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/">Quản lý tuyển dụng</NavBtnLink>
            <DropDownMenu>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">
                  Danh sách tin tuyển dụng
                </DropDownMenuLink>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">Đăng tin tuyển dụng</DropDownMenuLink>
              </DropDownMenuItem>
            </DropDownMenu>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/">Quản lý ứng viên</NavBtnLink>
            <DropDownMenu>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">Tìm kiếm hồ sơ</DropDownMenuLink>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">
                  Danh sách hồ sơ đã lưu
                </DropDownMenuLink>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">
                  Hồ sơ đã ứng tuyển vào công ty
                </DropDownMenuLink>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">
                  Thông báo hồ sơ phù hợp{" "}
                </DropDownMenuLink>
              </DropDownMenuItem>
            </DropDownMenu>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/">Hỗ trợ và thông báo</NavBtnLink>
            <DropDownMenu>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">
                  Gửi yêu cầu đến ban quản trị
                </DropDownMenuLink>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">
                  Alo việc làm thông báo
                </DropDownMenuLink>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">Thông tin thanh toán</DropDownMenuLink>
              </DropDownMenuItem>
              <DropDownMenuItem>
                <DropDownMenuLink to="/">Hướng dẫn thao tác</DropDownMenuLink>
              </DropDownMenuItem>
            </DropDownMenu>
          </NavBtn>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/">Tài khoản</NavBtnLink>
          <DropDownMenu>
            <DropDownMenuItem>
              <DropDownMenuLink to="/">Đăng xuất</DropDownMenuLink>
            </DropDownMenuItem>
          </DropDownMenu>
        </NavBtn>
      </Nav>
    </div>
  );
};

export default Header;
