import React from 'react';
import styled from 'styled-components';

const IntroductionContainer = styled.div`
  width: 80vw;
  margin-top: 64px;
  display: flex;
  justify-content: space-between;
`;

const ContentsContainer = styled.div`
  width: 567px;
  height: 310px;
`;

const Title = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap');
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
  color: #ffffff;
  font-family: 'Manrope', sans-serif;
  margin-top: 56.6px;
`;

const Explanation = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #f1f1f1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 458px;
`;
const Button = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

  background-color: ${(props) => props.bgColor};
  border: 2px solid ${(props) => props.border};
  color: ${(props) => props.color};
  border-radius: 56px;
  width: ${(props) => props.width};
  height: 60px;
  margin-top: 40px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
`;

const Introduction = () => {
  return (
    <IntroductionContainer>
      <ContentsContainer>
        <Title>Save time by building fast with Boldo Template</Title>
        <Explanation>
          Funding handshake buyer business-to-business metrics iPad partnership. First mover
          advantage innovator success deployment non-disclosure.
        </Explanation>
        <ButtonContainer>
          <Button bgColor={'#65E4A3'} border={'#65E4A3'} width={'247px'}>
            Buy template
          </Button>
          <Button bgColor={'transparent'} color={'#fff'} width={'187px'}>
            Explore
          </Button>
        </ButtonContainer>
      </ContentsContainer>
      <img alt="graphics" src="images/graphics.svg"></img>
    </IntroductionContainer>
  );
};

export default Introduction;
