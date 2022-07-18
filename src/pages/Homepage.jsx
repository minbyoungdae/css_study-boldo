import React from 'react';
import Header from '../components/common/Header';
import styled from 'styled-components';
import Introduction from '../components/Homepage/Introduction';
import Service from '../components/Homepage/Service';

const HomepageContainer = styled.div``;

const IntroductionContainer = styled.div`
  height: 798px;
  background-color: #0a2640;
  display: flex;
  justify-content: center;
`;
const ContentsContainer = styled.div`
  width: 80vw;
  margin-top: 56px;
`;
const ServiceContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Homepage = () => {
  return (
    <HomepageContainer>
      <IntroductionContainer>
        <ContentsContainer>
          <Header />
          <Introduction />
        </ContentsContainer>
      </IntroductionContainer>
      <ServiceContainer>
        <Service />
      </ServiceContainer>
    </HomepageContainer>
  );
};

export default Homepage;
