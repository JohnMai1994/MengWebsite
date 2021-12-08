import React from "react";
import {Link} from "react-router-dom";
import styled, {keyframes} from "styled-components";
import logo from "../../image/Meng.png"


const NavBarStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
    
`

const waves = keyframes`
   to {
    transform: translateY(-60%) rotate(540deg);
   }


`

const Avatar = styled.div`
    position: relative;
    width: 5rem;
    height: 5rem;
    background: white;
    border-radius: 50%;
    overflow: hidden;
    
    :before{
      content: "";
      background: url(${logo});
      position: absolute;
      width: 100%;
      height: 100%;
      background-size: cover;
    
    }
    
    :after{
      content: "";
      position: absolute;
      width: 160%;
      height: 160%;
      background-color: hsla(0, 0%, 100%, 0.9);
      bottom: 0;
      left: -50%;
      border-radius: 35%;
      animation: ${waves} 5s ease-in-out alternate infinite;
    }
    


`


const Lists = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
   
   list-style: none;

`

const Item = styled.li`

      
      width: 150px;
      text-align: center;
      
      
      position: relative;
      color: #22577a;
      padding: 10px;
      border-radius: 15px;
      border: 1px solid transparent;
      font-family: GongFanBaDaoTi,serif;
      text-transform:uppercase;
      transition: 0.5s;
      
      
      :hover{
          border: 1px solid #22577a;
          background: #22577a;
          color: #fff;
      }
      
      
      

`

const LinkStyle = styled(Link)`
    text-decoration: none;
    margin: 0 10px;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;


function NavBar() {

    return (
        <NavBarStyle>
            <LinkStyle to={"/"}>

                <Avatar/>
            </LinkStyle>
            <Lists>
                <LinkStyle to={"/"}>
                    <Item>主页 Home</Item>
                </LinkStyle>
                <LinkStyle to={"/project"}>
                    <Item>项目 Project</Item>
                </LinkStyle>
                <LinkStyle to={"/about"}>
                    <Item>关于 About</Item>
                </LinkStyle>
                <LinkStyle to={"/contact"}>
                    <Item>联系 Contact</Item>
                </LinkStyle>
            </Lists>
        </NavBarStyle>

    )

}

export default NavBar;
