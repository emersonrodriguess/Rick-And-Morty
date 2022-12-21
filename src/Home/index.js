import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container">
        <h1> Rick And Morty 
          <br></br>Personagens</h1>
        <Link to="/characters">
          <div className="button">
            <button className="botao">Ver Personagens</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
