import styled from "styled-components";

export const Container = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`;
export const NavLink = styled.a`
  float: right;
  display: block;
  color: #83c6e7;
  text-align: center;
  font-family: copperplate;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer;
  text-decoration: none;
  &:nth-child(2) {
    border-right: 1px solid #111;
  }
`;

export const Logo = styled.a`
  position: relative;
  width: 200px;
  height: 160px;
  right: 30em;
  color: #83c6e7;
  cursor: pointer;
  text-decoration: none;
`;
