import React from 'react'
import styled from "@emotion/styled";
import {Link} from "react-router-dom";


const Container = styled.div`
    width: 100vw;
    height: 70px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: Black ;

`
const Title = styled.div`
    color: red;
    font-size: 29px;
    font-weight: bold;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;

`
const Right = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-evenly;
    align-items: center;
`
const NavItem = styled.span`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 25px;
  padding: 8px;
  color: white;
  textDecoration: none;
  &:hover{
    background-color: white ;
    color: black;
    border-radius: 20px;
    transition: all 0.04s linear;

  }
`;



const Navbar = () => {
  return (
    <Container>
        <Title>
            Red Bus
        </Title>
        <Right>
            <Link to='/register' style={{textDecoration: "none"}}><NavItem>Register</NavItem></Link>
           <Link to='/' style={{textDecoration: "none"}}><NavItem>Login</NavItem></Link>
        </Right>
      
    </Container>
  )
}

export default Navbar
