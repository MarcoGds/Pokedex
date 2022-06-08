import React, { useEffect, useState } from "react";

import { Topbar } from '../Topbar';

import "./StatusPage.scss";

export default function StatusPage () {
  
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((response) => response.json())
      .then((result) => {

        setPokemon(result)
      });
  }, []);


  return(

    <React.Fragment>
      <Topbar />
      <ol>
        {pokemon.map((data) => {
          return(
            <li className="list-group-item"
            key={data.id}>
              {data.title}
            </li>
          )
        })}
      </ol>
    </React.Fragment>
  )
}