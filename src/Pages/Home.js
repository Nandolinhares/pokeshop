import React, { useState, useEffect } from 'react';
//Lib para consultar a API
import axios from 'axios';
//Lib para facilitar a paginação
import ReactPaginate from 'react-paginate';
//Lib para Style
import { makeStyles } from '@material-ui/core/styles';
//Grid
import Grid from '@material-ui/core/Grid';

//Components
import GrassPokemon from '../Components/Grass/Pokemon';
import Shopcar from '../Components/Shopcar';

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
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'center',
        }
    }
}))

export default function Home() {
    //Hook para usar o makeStyles do Material Ui
    const classes = useStyles();

    const [pokemonType, setPokemonType] = useState([]);
    const [offset, setOffset] = useState(0);
    //Padrão de Pokemon mostrados por page
    const [perPage, setPerPage] = useState(12)
    const [currentPage, setCurrentPage] = useState(0);
    //Número de pages
    const [pageCount, setPageCount] = useState(0);

    //Função para mudar de página
    const handlePageChange = (event) => {
        const selectedPage = event.selected;
        //Exemplo: Página 3 = 3 x 9 = 27. Seleciono depois do Pokemon 27
        const newOffset = selectedPage * perPage;

        setOffset(newOffset);
        setCurrentPage(selectedPage);
    }
    
    useEffect(() => {
        //Pegando o array contendo informações do pokemon do tipo electric na PokeApi usando o axios get. Depois, salvo no estado pokemonType do component.
        const unsubscribeListener = axios.get('https://pokeapi.co/api/v2/type/grass')
            .then(res => {
                //Todos os pokemon do tipo Planta
                const pokeType = res.data.pokemon;
                //Aqui eu seleciono os 9 pokemon da respectiva página
                setPokemonType(pokeType.slice(offset, offset + perPage));
                //O número de páginas vai ser equivalente a divisão entre a quantidade de pokemon / pela quantidade per page
                setPageCount(Math.ceil(pokeType.length / perPage))
            })
            .catch(err => {
                //Se algo der errado no acesso a api
                console.error(err);
            })
        return () => unsubscribeListener;    
    }, [offset, perPage])

    return (
        <main className={classes.main}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={8}>
                    <h1 className={classes.title}>Pokemon do tipo Planta</h1>
                    <section className={classes.pokemonGrid}>
                        {pokemonType.map(pokemon => {
                            return (
                                <div key={pokemon.pokemon.name}>
                                    <GrassPokemon pokemon={pokemon} />
                                </div>
                            )
                        })}
                    </section>
                    <ReactPaginate
                        previousLabel={"Voltar"}
                        nextLabel={"Avançar"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Shopcar />
                </Grid>
            </Grid>
        </main>
    )
}
