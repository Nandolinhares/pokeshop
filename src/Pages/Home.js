import React, { useState, useEffect } from 'react';
//Lib para consultar a API
import axios from 'axios';
//Lib para facilitar a paginação
//import ReactPaginate from 'react-paginate';
//Lib para Style
import { makeStyles } from '@material-ui/core/styles';
//Grid
import Grid from '@material-ui/core/Grid';

//Components
import GrassPokemon from '../Components/Grass/Pokemon';
import Shopcar from '../Components/Shopcar';
import LoadMore from '../Components/LoadMore';

const useStyles = makeStyles((theme) => ({
    main: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '8%'
        }
    }, 
    title: {
        textAlign: 'center'
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

export default function Home() {
    //Hook para usar o makeStyles do Material Ui
    const classes = useStyles();

    const [allPokeTypes, setAllPokeTypes] = useState([]);
    //Tipos de Pokemon carregados a cada 12
    const [pokemonType, setPokemonType] = useState([]);
    const [offset, setOffset] = useState(0);
    //Padrão de Pokemon mostrados por load
    const [perLoad] = useState(12);
    //Fim dos pokemon
    const [end, setEnd] = useState(false);

    useEffect(() => {   
        //Pegando o array contendo informações do pokemon do tipo grass na PokeApi usando o axios get. Depois, salvo no estado pokemonType do component.
        const getPokemon = axios.get('https://pokeapi.co/api/v2/type/grass')
                .then(res => {
                    //Todos os pokemon do tipo Planta
                    const pokeType = res.data.pokemon;
                    setAllPokeTypes(pokeType);
                    const newOffset = offset + perLoad;
                    //Aqui eu seleciono os 9 pokemon da respectiva página
                    setPokemonType(pokeType.slice(offset, newOffset));
                    setOffset(newOffset);
                })
                .catch(err => {
                    //Se algo der errado no acesso a api
                    console.error(err);
                })
        //Unmount do component
        return () => getPokemon;    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const loadMore = () => {
        let oldPokeType = pokemonType;
        let newOffset = offset + perLoad;
        const newPokeType = allPokeTypes.slice(offset, newOffset);
        //Aqui eu seleciono os 9 pokemon da respectiva página
        let updatedPokeType = oldPokeType.concat(newPokeType);
        if(newPokeType.length === 0) {
            setEnd(true);
        } else {
            setPokemonType(updatedPokeType);
            setOffset(newOffset);
        }
    }

    return (
        <main className={classes.main}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8}>
                    <h1 className={classes.title}>Pokemon do tipo Planta</h1>
                    <section className={classes.pokemonGrid}>
                        {pokemonType.map(pokemon => {
                            return (
                                <div key={pokemon.pokemon.name} className={classes.pokemonGrid}>
                                    <GrassPokemon pokemon={pokemon} />
                                </div>
                            )
                        })}
                    </section>
                    {end ? (
                        <h2 className={classes.lastPokemon}>Não tem mais Pokemon</h2>
                    ) : (
                        <LoadMore loadMore={loadMore} />
                    )}
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Shopcar />
                </Grid>
            </Grid>
        </main>
    )
}
