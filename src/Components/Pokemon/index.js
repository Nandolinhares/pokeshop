import React, { useState } from 'react';
//Configuração de style do Material UI
import { makeStyles } from '@material-ui/core/styles';
//Envolver as características do Pokemon
import Paper from '@material-ui/core/Paper';
//Rating
import Rating from '@material-ui/lab/Rating';
//Buttom
import Buttom from '@material-ui/core/Button';
//Redux
import  {useSelector, useDispatch } from 'react-redux';
//Actions
import { addPokemonToCar, updateTotalPrice } from '../../Redux/actions/userActions';

export default function Pokemon({ pokemon }) {
    //Hook do redux 
    const dispatch = useDispatch();
    const { myPokemonList, theme } = useSelector(state => state.user);

    //Hook do Material UI para styles
    const classes = useStyles();
    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`;
    const pokemonName = pokemon.name;
    const [randomValue] = useState(pokemon.rating); //Random value para o Rating
    const [priceRandom] = useState(pokemon.price);
    
    const handleAddToCar = (pokemonImage, pokemonName, price) => {
        const pokemon = {
            pokemonImage,
            pokemonName,
            price,
            slot: 1
        }

        if(myPokemonList.length > 0) {
            myPokemonList.forEach(pokemonDoc => {
                if(pokemon.pokemonName === pokemonDoc.pokemonName) {
                    pokemonDoc.slot ++;
                    //Atualizar o preço total do carrinho
                    dispatch(updateTotalPrice(pokemon.price));
                }
            })
            if(!myPokemonList.some(array => array.pokemonName === pokemon.pokemonName)) {
                //Adicionar o Pokemon ao carrinho
                dispatch(addPokemonToCar(pokemon));
                //Atualizar o preço total do carrinho
                dispatch(updateTotalPrice(pokemon.price));
            } 
        } else {
            //Adicionar o Pokemon ao carrinho
            dispatch(addPokemonToCar(pokemon));
            //Atualizar o preço total do carrinho
            dispatch(updateTotalPrice(pokemon.price));
        }
    }

     /* Para pegar a imagem do pokemon, criei uma expressão usando a função split do javascript. */
    /* Como as urls das imagens dos Pokemon são as mesmas e cada Pokemon tem um número específico, eu capturo o número usando o split no atributo url e posição 6 do array gerado. Assim, reaproveiro a mesma url, alterando somente os números de cada Pokemon, para pegar sua imagem. */
    return (
        <Paper elevation={3} className={classes.pokemonPaper}>
            <img alt={pokemon.name} className={classes.pokemonImage} src={pokemonImage} />
            <h2 className={classes.pokemonInfo}>{pokemonName}</h2>
            <Rating name="size-large" value={randomValue} readOnly size="large" />
            <h3 className={classes.pokemonInfo}>R$ {priceRandom},00</h3>
            <Buttom variant="outlined" className={theme === 'grass' ? classes.grassAddButton : classes.waterAddButton} onClick={() => handleAddToCar(pokemonImage, pokemonName, priceRandom)}>Adicionar ao carrinho</Buttom>
        </Paper>
    )
}


const useStyles = makeStyles((theme) => ({
    pokemonPaper: {
        margin: '18px 18px',
        padding: 18,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '80%',
        [theme.breakpoints.down('xs')]: {
            width: '100% !important'
        },
        [theme.breakpoints.down('lg')]: {
            width: '64%'
        },
    },
    pokemonImage: {
        alignSelf: 'center',
        width: 200,
        [theme.breakpoints.down('lg')]: {
            width: 100
        },
    },
    pokemonInfo: {
        fontSize: 14,
        textTransform: 'Capitalize'
    },
    grassAddButton: {
        borderColor: '#49896F',
        color: '#49896F',
        [theme.breakpoints.down('lg')]: {
            fontSize: 12
        },
    },
    waterAddButton: {
        borderColor: '#42a5de',
        color: '#42a5de',
        [theme.breakpoints.down('lg')]: {
            fontSize: 12
        },
    }
}))