import React from 'react'
import styled from 'styled-components';
import { Button } from './Button';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  `;

const Container = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 400px;
    padding: 0px;
  }`;


const ColumnLeft = styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  line-height: 1.4;
  padding: 0rem 8rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  } 

  p{
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 2rem;
    order: ${({ reverse }) => (reverse ? '2' : '1')};
  }
  `;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};
  display:flex;
  justify-content:center;
  align-items:center;


  img{
    width: 60%;
    height: 100%;
    object-fit: cover;
  }



  @media screen and (max-width: 768px) {
    img {
    height: 100%;
    }
  }

`;


const InfoSection = ({ heading, paragraphOne, paragraphTwo, buttonLabel, image, reverse }) => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1> {heading} </h1>
          <p> {paragraphOne} </p>
          <p> {paragraphTwo} </p>
          <Button to="/homes" primary="true"> {buttonLabel} </Button>
        </ColumnLeft>
        <ColumnRight reverse={reverse}>
          <img className="image" src={image} alt="home" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default InfoSection;
