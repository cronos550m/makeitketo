import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
  
const Nav = styled.div`
  background: #15171c;
  height: 55px;
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  justify-content: space-between;
`;
  
const NavIcon = styled(Link)`
  margin-left: 1.2rem;
  font-size: 1.3rem;
  height: 50px;
  display: flex;
  align-items: center;
`;
  
const SidebarNav = styled.nav`
  background: #15171c;
  width: 120px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
  
const SidebarWrap = styled.div`
  width: 100%;
`;
  
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
          <p
            style={{ color: "white",
                     position: "relative",
                     marginRight: "1.2rem", }}
          >
            make it simple. make it keto.
          </p>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>

    </>
  );
};


  
export default Sidebar;