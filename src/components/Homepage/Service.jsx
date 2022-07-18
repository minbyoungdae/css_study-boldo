import React from 'react';
import styled from 'styled-components';

const ServiceContainer = styled.div`
  height: 2650px;
  display: flex;
  justify-content: flex-start;
  width: 80vw;
  flex-direction: column;
  align-items: center;
`;
const TitleContainer = styled.div`
  margin-top: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 188px;
  width: 842px;
`;
const Text = styled.span`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap');

  font-size: ${(props) => props.size};
  font-family: 'Open Sans';
  font-weight: 400;
  text-align: center;
  margin-top: 12px;
`;

const IllustrationContainer = styled.div`
  margin-top: 76px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const IllustrationContents = styled.div`
  height: 575px;
  width: 300px;
`;

const Service = () => {
  return (
    <ServiceContainer>
      <TitleContainer>
        <Text size="20px" lineHeight="32px">
          Our service
        </Text>
        <Text size="48px" lineHeight="72px">
          Handshake infographic mass market crowdfunding iteration.
        </Text>
      </TitleContainer>
      <IllustrationContainer>
        <IllustrationContents>
          <img src="images/homepage-illust-1.svg" alt="homepage-illust-1"></img>
        </IllustrationContents>
        <IllustrationContents>
          <img src="images/homepage-illust-2.svg" alt="homepage-illust-2"></img>
        </IllustrationContents>
        <IllustrationContents>
          <img src="images/homepage-illust-3.svg" alt="homepage-illust-3"></img>
        </IllustrationContents>
      </IllustrationContainer>
    </ServiceContainer>
  );
};

export default Service;
