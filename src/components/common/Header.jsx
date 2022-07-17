import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 80vw;
  height: 42px;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled.img`
  width: 162.22px;
  height: 42px;
`;
const NavigationContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 40px;
  * {
    font-family: 'Open+Sans';
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 28px;
  }
`;

const LoginButton = styled.button`
  background: #ffffff;
  border: 2px solid #ffffff;
  border-radius: 24px;
  color: #0a2640;
  width: 128px;
  height: 40px;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="images/logo.svg"></Logo>
      <NavigationContainer>
        <button>Product</button>
        <button>Service</button>
        <button>About</button>
        <LoginButton>Login</LoginButton>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
