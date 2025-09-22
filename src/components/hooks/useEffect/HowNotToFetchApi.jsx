import { useEffect, useState } from 'react';
import "./Pokemon.css";

export const HowNotToFetchApi = () => {

    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const API = "https://pokeapi.co/api/v2/pokemons/pikachu";

    const fetchPokemon = () => {
        fetch(API)
        .then((res) => res.json())
        .then((data) =>{
            setPokemon(data);
            setLoading(false);
            })
        .catch((error) => {
            console.log(error); 
            setError(error);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    console.log(pokemon);

    if(loading) 
        return(
        <div>
        <h1>Loading....</h1>
        </div>
    );

    if (error) 
    return (
        <div>
         <h1>Error: {error.message}</h1>
        </div>
    )

// if(pokemon) {
  return (
      <section className="container">
       <header>
        <h1>Lets Catch Pokemon</h1>
       </header>
       <div className="effect-container">
       <ul className="card-demo">
        <li className="pokemon-card">
            <figure>
            <img
            src={pokemon.sprites.other.dream_world.front_default} 
            alt={pokemon.name} 
            className="pokemon-image"
            />
            </figure>
            <h1>{pokemon.name}</h1>
        </li>
       </ul>
       </div>
      </section> 
  );
//   }
};

