import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ListCours from '../component/ListCours';

const Container = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Button = styled(Link)`
  padding: 0.8rem 1.5rem;
  margin: 0.5rem;
  background-color: black;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  border: 1px solid white;
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    color: black;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Acceuil = () => {
  return (
    <Container>
      <ListCours />
      <div>
        <Title>Learn JavaScript</Title>
        <ButtonContainer>
          <Button to="/inscription">Inscription</Button>
          <Button to="/connexion">Connexion</Button>
        </ButtonContainer>
      </div>
    </Container>
  );
};

export default Acceuil;