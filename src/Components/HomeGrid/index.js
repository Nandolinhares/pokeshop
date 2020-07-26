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

export default function HomeGrid({ pokemonType, allPokeTypes, end, loadMore }) {
    
    const dispatch = useDispatch();

    const classes = useStyles();
    const [themeName, setThemeName] = useState("Planta");
    const [pokemonState, setPokemonState] = useState([])
    const { theme } = useSelector(state => state.user);

    useEffect(() => {
        //Aqui eu defino qual é o tema escolhido pelo usuário e adiciono os valores de ramdom do rating e do price
        if(theme === 'grass') {
            setThemeName("Planta");
            //Aqui eu percorro todos os Pokemon e os Pokemon que estão aparecendo na tela. Defino o preços que estão em todos os Pokemon iniciais e aplico nos que vão aparecer na tela
            allPokeTypes.forEach(poke => {
                pokemonType.forEach(pokemon => {
                    if(pokemon.pokemon.name === poke.pokemon.name) {
                        poke.pokemon.rating = pokemon.pokemon.rating;
                        poke.pokemon.price = pokemon.pokemon.price;
                    }
                })
            })
            //Salvando os Pokemon no estado
            setPokemonState(pokemonType);
            //Salvar todos Pokemon no reducer para usar na busca
            dispatch(setAllPokemon(allPokeTypes));
        } else {
            setThemeName("Água");
            //Aqui eu percorro todos os Pokemon e os Pokemon que estão aparecendo na tela. Defino o preços que estão em todos os Pokemon iniciais e aplico nos que vão aparecer na tela
            allPokeTypes.forEach(poke => {
                pokemonType.forEach(pokemon => {
                    if(pokemon.pokemon.name === poke.pokemon.name) {
                        poke.pokemon.rating = pokemon.pokemon.rating;
                        poke.pokemon.price = pokemon.pokemon.price;
                    }
                })
            })
            //Salvando os Pokemon no estado
            setPokemonState(pokemonType);
            //Salvar todos Pokemon no reducer para usar na busca
            dispatch(setAllPokemon(allPokeTypes));
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
