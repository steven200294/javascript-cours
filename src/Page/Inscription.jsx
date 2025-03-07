import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  padding: 1rem;
`;

const Card = styled.div`
  background-color: black;
  padding: 30px;
  border-radius: 15px;
  border: 1px solid white;
  width: 650px;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Input = styled.input`
  width: 90%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid white;
  border-radius: 20px;
  background-color: black;
  color: white;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

const GoogleLogin = styled.p`
  color: white;
  margin-top: 15px;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

function Inscription() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Inscription réussie !");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      alert("Inscription réussie avec Google !");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container>
      <Card>
        <Title>Inscription</Title>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <form onSubmit={handleSignup}>
          <Input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <Input 
            type="password" 
            placeholder="Mot de passe" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <Button type="submit">S'inscrire</Button>
        </form>
        <GoogleLogin onClick={handleGoogleSignup}>🔵 Se connecter avec Google</GoogleLogin>
        <p style={{ color: "white", marginTop: "10px" }}>
          Déjà un compte ? <Link to="/Connexion" style={{ color: "#007bff" }}>Se connecter</Link>
        </p>
      </Card>
    </Container>
  );
}

export default Inscription;
