import React, { useState, useEffect } from "react";
import api from "../service/api";
import "./index.css";

export default function Caracteres() {
  const [caracteres, setCaracteres] = useState([]);

  const listCaracteres = async () => {
    const {
      data: { results },
    } = await api.get("character");

    setCaracteres(results);
  };

  useEffect(() => {
    listCaracteres();
  }, []);

  return (
    <>
      <div className="title">
        <h1>Rick And Morty Personagens</h1>
      </div>
      <div className="container-personagens">
        <div className="personagens-waper">
          {caracteres.map((caracteres) => (
            <div className="personagem">
              <img src={caracteres.image}></img>
              <div className="characteres">
                <p>{caracteres.name}</p>
                <p>{caracteres.species}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
