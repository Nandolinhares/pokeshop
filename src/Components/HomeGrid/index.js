import React, { useState, useEffect } from 'react';
//Lib para Style
import { makeStyles } from '@material-ui/core/styles';
//Grid
import Grid from '@material-ui/core/Grid';
//Components
import Pokemon from '../Pokemon';
import Shopcar from '../Shopcar';
import LoadMore from '../LoadMore';
import PokemonType from '../PokemonType';
import SearchResult from '../Search/SearchResult';
//Redux
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    title: {
        textAlign: 'center'
    },
    searchResult: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    pokemonTypeGrid: {
        display: 'flex',
        justifyContent: 'center'
    },   
    pokemonGrid: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        [theme.breakpoints.down('lg')]: {
            justifyContent: 'center',
        }
    },
    lastPokemon: {
        textAlign: 'center'
    }
}))

export default function HomeGrid({ pokemonType, end, loadMore }) {

    const classes = useStyles();
    const [themeName, setThemeName] = useState("Planta");
    const { theme } = useSelector(state => state.user);

    useEffect(() => {
        if(theme === 'grass') {
            setThemeName("Planta");
        } else {
            setThemeName("Água");
        }
    }, [theme])

    return (
        <Grid container spacing={2}>
                <Grid item xs={12} sm={12} className={classes.searchResult}>
                    <SearchResult />
                </Grid>
                <Grid item xs={12} sm={12} className={classes.pokemonTypeGrid}>
                    <PokemonType />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    {/* Title */}
                    <h1 className={classes.title}>Pokemon do tipo {themeName}</h1>
                    {/* Os Pokemon do tipo escolhido */}
                    <section className={classes.pokemonGrid}>
                        {pokemonType.map(pokemon => {
                            return (
                                <div key={pokemon.pokemon.name} className={classes.pokemonGrid}>
                                    <Pokemon pokemon={pokemon.pokemon} />
                                </div>
                            )
                        })}
                    </section>
                    {end ? (
                        <h2 className={classes.lastPokemon}>Não tem mais Pokemon</h2>
                    ) : (
                        <LoadMore loadMore={loadMore} theme={theme} />
                    )}
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Shopcar />
                </Grid>
            </Grid>
    )
}
