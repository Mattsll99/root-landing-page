import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Header from './components/Header';
import Board from './components/Board';

function App() {

  return (
    <Container>
      <Left>
        <Header />
        <Title>Introducing Root</Title>
        <Subtitle>Your personal healthcare assistant</Subtitle>
        <Text style={{marginTop: "20px"}}>Unlock your higher energy and inner peace through a deeper self consciousness</Text>
        <Text style={{marginTop: "20px"}}>Whether it's nutrition, sport, breathing techniques, visualization, <br />Root guides you through all areas of your life to help you reach your full potential.</Text>
        <Link href='https://1bdlslro48r.typeform.com/to/mmi3TMIa' target='_blank'>
        <Button>Get started - It's free</Button>
        </Link>
      </Left>
      <Right>
        <Board />
      </Right>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: auto; 
  width: 100vw; 
  display: flex; 
  flex-direction: row;
  @media(max-width: 798px) {
    flex-direction: column;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: #FFFFFF;
`;

const Cross = styled.div`
  height: 60px; 
  width: 60px; 
  border-radius: 120px;
  background: #FFFFFF;
  z-index: 4;
  position: absolute; 
  top: 30px; 
  right: 30px;
  display: flex; 
  justify-content: center; 
  align-items: center;
  padding: 10px;
  cursor: pointer;
`; 

const Wrapper = styled.div`
  height: 100%; 
  width: 100%; 
  position: relative;
`; 

const Stick = styled.div`
  height: 100%; 
  width: 3px;
  background: #1E1E1E; 
  border-radius: 10px;
  position: absolute;
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom : auto;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
`;

const Stick2 = styled.div`
  height: 3px; 
  width: 100%;
  background: #1E1E1E; 
  border-radius: 10px;
  position: absolute;
  top: 0; 
  bottom: 0; 
  margin-top: auto; 
  margin-bottom : auto;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto;
`;

const Left = styled.div`
  height: auto; 
  width: 60%;
  display: flex; 
  flex-direction: column;
  padding: 30px;
  @media(max-width: 798px) {
    width: 100%;
    align-items: center;
    text-align: center;
  }
`; 

const Title = styled.text`
  font-weight: 500; 
  font-size: 60px;
  margin-top: 250px;
  @media(max-width: 937px) {
    margin-top: 100px;
    font-size: 50px;
  }
`;

const Subtitle = styled.text`
  font-size: 30px;
  font-weight: 300;
  margin-top: -5px;
  color: #818181;
  @media(max-width: 937px) {
    font-size: 20px;
  }
`; 

const Text = styled.text`
  font-weight: 200; 
  font-size: 18px;
`; 

const Button = styled.div`
  height: 55px; 
  width: 220px; 
  border-radius: 20px;
  background: #0079E9;
  margin-top: 40px;
  display: flex; 
  justify-content: center;
  align-items: center;
  font-size: 18px; 
  font-weight: 400;
  cursor: pointer;
`;


const Right = styled.div`
  height: auto; 
  width: 40%;
  display: flex; 
  justify-content: center;
  @media(max-width: 798px) {
    width: 100%; 
    align-items: center;
    padding-bottom: 10px;
  }
`;