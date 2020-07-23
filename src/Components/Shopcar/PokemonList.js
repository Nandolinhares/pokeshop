import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    pokemonList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        border: '1px solid #49896F',
        marginTop: 18,
        padding: 18
    }
})

export default function PokemonList({ pokemon }) {
    const classes = useStyles();
    return (
        <section className={classes.pokemonList}>
            <img alt={pokemon.pokemonName} src={pokemon.pokemonImage} />
            <h3 className="Capitalize">{pokemon.pokemonName}</h3>
            <h3>R${pokemon.price},00</h3>
        </section>
    )
}
