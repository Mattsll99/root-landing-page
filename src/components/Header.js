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
  position: fixed; 
  top: 0; 
  left: 0; 
  padding-left: 30px; 
  display: flex; 
  flex-direction: row; 
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  height: 60px; 
  width: 60px; 
  border-radius: 120px;
`; 

const Title = styled.text`
  font-size: 30px;
  font-weight: 500;
`;