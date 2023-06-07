import React from "react";
import { Players } from "./Share/ListOfPlayers";
import { useState } from "react";
export default function Player() {
  const [player, setPlayer] = useState([]);
  return (
    <div className="container">
      {Players.map((player) => (
        <div className="column">
          <div key={player.id} className="card">
            <img src={player.img} alt=""/>
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p>
              <button onClick={() => {setPlayer(player);}}>
                <a href="#popup1" id="openPopUp">Detail</a>
              </button>
            </p>
          </div>
        </div>
      ))}
      <div id="popup1" className="overlay">
        <div class="popup">
          <img src={player.img} alt=""/>
          <h2>{player.name}</h2>
          <a className="close" href="#home">
            &times;
          </a>
          <div className="content">{player.info}</div>
        </div>
      </div>
    </div>
  );
}