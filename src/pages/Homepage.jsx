import React from 'react';
import Header from '../components/common/Header';
import styled from 'styled-components';
import Introduction from '../components/Homepage/Introduction';

const HomepageContainer = styled.div`
  height: 798px;
  background-color: #0a2640;
  display: flex;
  justify-content: center;
`;
const ContentsContainer = styled.div`
  width: 80vw;
  margin-top: 56px;
`;

const Homepage = () => {
  return (
    <HomepageContainer>
      <ContentsContainer>
        <Header />
        <Introduction />
      </ContentsContainer>
    </HomepageContainer>
  );
};

export default Homepage;
