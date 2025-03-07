import React from 'react';
import styled from 'styled-components';

// Styles pour la carte
const Card = styled.div`
  width: 250px;
  background: #1a1a1a;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  color: white;
  font-family: Arial, sans-serif;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background:rgb(122, 202, 122);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 0 auto 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
  text-transform: capitalize;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background: #2a2a2a;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
`;

const ListCours = () => {
  const cours = [
    'variable',
    'Les types de données',
    'Les opérateurs',
    'condition',
    'Les tableaux',
    'Les fonctions',
  ];

  return (
    <Card>
      <IconContainer></IconContainer> 
      <Title>javascript</Title>
      <List>
        {cours.map((cours, index) => (
          <ListItem key={index}>{cours}</ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ListCours;
