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
import { useSelector, useDispatch } from 'react-redux';
//Actions
import { setAllPokemon } from '../../Redux/actions/userActions';

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
    
    const dispatch = useDispatch();

    const classes = useStyles();
    const [themeName, setThemeName] = useState("Planta");
    const [pokemonState, setPokemonState] = useState([])
    const { theme } = useSelector(state => state.user);

    useEffect(() => {
        //Aqui eu defino qual é o tema escolhido pelo usuário e adiciono os valores de ramdom do rating e do price
        if(theme === 'grass') {
            setThemeName("Planta");
            pokemonType.forEach(pokemon => {
                pokemon.pokemon.rating = parseInt(Math.random() * (5 - 3) + 3);
                pokemon.pokemon.price = parseInt(Math.random() * 200);
            })
            //Salvando os Pokemon no estado
            setPokemonState(pokemonType);
            //Salvar todos Pokemon no reducer para usar na busca
            dispatch(setAllPokemon(pokemonType));
        } else {
            setThemeName("Água");
            pokemonType.forEach(pokemon => {
                pokemon.pokemon.rating = parseInt(Math.random() * (5 - 3) + 3);
                pokemon.pokemon.price = parseInt(Math.random() * 200);
            })
            //Salvando os Pokemon no estado
            setPokemonState(pokemonType);
            //Salvar todos Pokemon no reducer para usar na busca
            dispatch(setAllPokemon(pokemonType));
        }
    }, [theme, pokemonType, dispatch])

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
                        {pokemonState.map(pokemon => {
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
