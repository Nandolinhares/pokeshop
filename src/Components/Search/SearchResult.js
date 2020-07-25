import React, { useState, useEffect } from 'react';
//Redux
import { useSelector } from 'react-redux';

//Components
import PokemonList from '../Pokemon';


export default function SearchResult() {

    const { allPokemon, searchParams } = useSelector(state => state.user);

    const [pokemonResult, setPokemonResult] = useState([]);

    useEffect(() => {
        let pokemonArray = [];
        allPokemon.forEach(pokemonObj => {
           if(pokemonObj.pokemon.name.startsWith(searchParams)) {
               pokemonArray.push(pokemonObj.pokemon);
           }
        })

        setPokemonResult(pokemonArray);

    }, [allPokemon, searchParams])

    return (
       searchParams === '' ? (
            <div></div>
       ) : (
        pokemonResult.map(pokemon => {
            return (
                 <section key={Math.random() * 100000}>
                     <PokemonList pokemon={pokemon} />
                 </section>
            )
        })
       )
    )
}
