import React from 'react';

export default function Pokemon({ pokemon }) {
    return (
        <div>
            {/* Para pegar a imagem do pokemon, criei uma expressão usando a função split do javascript. */}
            {/* Como as urls das imagens dos Pokemon são as mesmas e cada Pokemon tem um número específico, eu capturo o número usando o split no atributo url e posição 6 do array gerado. Assim, reaproveiro a mesma url, alterando somente os números de cada Pokemon, para pegar sua imagem. */}
            <img alt={pokemon.pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon.url.split('/')[6]}.png`} />
            <h2>{pokemon.pokemon.name}</h2>
            <p>{pokemon.pokemon.url}</p>
        </div>
    )
}
