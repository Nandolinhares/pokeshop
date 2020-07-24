import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//Delete Pokemon from list
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    pokemonList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        border: '1px solid #49896F',
        marginTop: 18,
        padding: 18,
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    //Versão celular
    imagePokemon: {
        [theme.breakpoints.down('xs')]: {
            width: 100,
            margin: '0 auto'
        },
        [theme.breakpoints.down('md')]: {
            width: 100,
            margin: '0 auto'
        },
    },
    pokemonInfo: {
        textTransform: 'Capitalize',
        [theme.breakpoints.down('lg')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 14,
            textAlign: 'center'
        },
    }
}))

export default function PokemonList({ pokemon }) {
    const classes = useStyles();
    return (
        <section className={classes.pokemonList}>
            <img alt={pokemon.pokemonName} src={pokemon.pokemonImage} className={classes.imagePokemon} />
            <h3 className={classes.pokemonInfo}>{pokemon.pokemonName}</h3>
            <h3 className={classes.pokemonInfo}>R${pokemon.price},00</h3>
            <h3 className={classes.pokemonInfo}>Qtd: {pokemon.slot}</h3>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </section>
    )
}
