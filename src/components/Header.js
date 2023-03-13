import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
      <Logo src="../assets/bonsai1.png"/>
      <Title>Root</Title>
    </Container>
  )
}

export default Header

const Container = styled.div`
  height: 80px; 
  width: 170px;
  //width: 100%; 
  position: fixed; 
  top: 0; 
  left: 0; 
  padding-left: 30px; 
  display: flex; 
  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
  @media(max-width: 798px) {
    width: 100%;
    justify-content: start;
  }
`;

const Logo = styled.img`
  height: 60px; 
  width: 60px; 
  border-radius: 120px;
`; 

const Title = styled.text`
  font-size: 30px;
  font-weight: 500;
  @media(max-width:798px) {
    margin-left: 10px;
  }
`;