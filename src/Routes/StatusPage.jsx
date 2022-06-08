import Axios from "axios";
import React, { useState, useEffect } from "react";

import '../components/Description/Description.scss';

import PokemonCard from "../components/Cards/Cards";

export function StatusPage() {

  const [pokemonName, setPokemonName] = useState("");
  const [pokemonSearched, setPokemonSearched] = useState(false);
  const [pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    defense: "",
    type: "",
  });

  const searchPokemon = () => {
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemon({
          name: pokemonName,
          species: response.data.species.name,
          img: response.data.sprites.font_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          defence: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonSearched(true);
      }
      );
  };

  const [allPokemons, setAllPokemons] = useState([])
  const [loadPokemon, setLoadPokemon] = useState(
    "https://pokeapi.co/api/v2/pokemon/"
  );
  const getPokemons = async () => {
    const response = await fetch(loadPokemon);
    const data = await response.json();
    setLoadPokemon(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await response.json();
        setAllPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(allPokemons);
  }

  useEffect(() => {
    getPokemons();
  },
  );

  return (
    <React.Fragment>

      <div className="SearchPoke">
        <input type="text"
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        />
        <button onClick={searchPokemon}>Pesquisar Pokémon</button>
      </div>

      <div className= "">
        {!pokemonSearched ? (
          <></>
        ) : (
          <>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img} alt="" />
            <h3>Tipo: {pokemon.type}</h3>
            <h4>Hp: {pokemon.hp}</h4>
            <h4>Ataque: {pokemon.attack}</h4>
            <h4>Defesa: {pokemon.defense}</h4>
          </>
        )}
      </div>

      <div className="pokemon-cards">
        {allPokemons.map((pokemon, index) => (
          <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.sprites.other.dream_world.front_default}
            type={pokemon.types[0].type.name}
            key={index}
            height={pokemon.height}
            weight={pokemon.weight}
            stat1={pokemon.stats[0].stat.name}
            stat2={pokemon.stats[1].stat.name}
            stat3={pokemon.stats[2].stat.name}
            bs1={pokemon.stats[0].base_stat}
            bs2={pokemon.stats[1].base_stat}
            bs3={pokemon.stats[2].base_stat}
          />
        )
        )}
      </div>
    </React.Fragment>
  )
}