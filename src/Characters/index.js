import React, { useState, useEffect } from "react";
import api from "../service/api";
import "./index.css";

export default function Characters() {
  const [characters, setCharacters] = useState([]);

  const listCharacters = async () => {
    const {
      data: { results },
    } = await api.get("character");

    setCharacters(results);
  };

  useEffect(() => {
    listCharacters();
  }, []);

  return (
    <>
      <div className="title">
        <h1>
          Rick And Morty
          <br></br>Personagens
        </h1>
      </div>
      <div className="container-personagens">
        <div className="personagens-waper">
          {characters.map((character) => (
            <div className="personagem">
              <img src={character.image}></img>
              <div className="characteres--container">
                <p className="name">{character.name}</p>
                <p className="species">{character.species}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
