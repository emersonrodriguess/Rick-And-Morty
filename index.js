import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Home = () => {
  const massege = "Rick And Morty Characters!!";
  return (
    <>
      <div className="container">
        {massege}
        <Link to="/characters">
          <div className="button">
            <button className="botao">Ver Personagens!</button>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Home;
