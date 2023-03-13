import React from 'react'
import styled from 'styled-components'

function Board() {
  return (
    <Container>
      <Top>
        <Sound></Sound>
      </Top>
      <LineLeft>
        <LeftBox>Hi Lucy! How are you?</LeftBox>
      </LineLeft>
      <LineRight>
        <RightBox>I feel tired and stressed. Def not a good day...</RightBox>
      </LineRight>
      <LineLeft>
        <LeftBox>You slept 5 hours this night. You need at least 7. Do you have trouble falling asleep?</LeftBox>
      </LineLeft>
      <LineRight>
        <RightBox>Yes...</RightBox>
      </LineRight>
      <LineLeft>
        <LeftBox>Tonight, when you're lying on your bed, do this exercise:</LeftBox>
      </LineLeft>
      <LineLeft>
        <LeftBox>inhale for 4 seconds, hold your breath for 4 seconds, exhale for 4 seconds, and so on.</LeftBox>
      </LineLeft>
    </Container>
  )
}

export default Board

const Container = styled.div`
  height: 600px; 
  width: 320px;
  background: #FFFFFF;
  margin-top: 70px;
  border-radius: 50px;
  overflow: scroll;
`;

const Top = styled.div`
  height: 60px; 
  width: 100%; 
  background: transparent;
  display: flex; 
  justify-content: center; 
  padding-top: 15px;
  //align-items: center;
`; 

const Sound = styled.div`
  height: 20px; 
  width: 80px; 
  border-radius: 100px;
  background: #1E1E1E;
`;

const LineLeft = styled.div`
  height: auto;
  width: 100%;
  display: flex; 
  justify-content: start;
  padding-left: 10px; 
  padding-right: 10px;
  background: #FFFFFF;
`; 

const LineRight = styled(LineLeft)`
  justify-content: end;
`;

const LeftBox = styled.div`
  width: auto; 
  height: auto; 
  padding: 10px;
  background: #383838;
  max-width: 60%;
  font-size: 12px;
  font-weight: 300;
  border-radius: 20px;
  margin-top: 20px;
`

const RightBox = styled(LeftBox)`
  background: #0079E9;
`;