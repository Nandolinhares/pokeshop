import React from 'react';
//Configuração de style do Material UI
import { makeStyles } from '@material-ui/core/styles';
//Envolver as características do Pokemon
import Paper from '@material-ui/core/Paper';
//Rating
import Rating from '@material-ui/lab/Rating';
//Buttom
import Buttom from '@material-ui/core/Button';
//Redux
import { useDispatch } from 'react-redux';
//Actions
import { addPokemonToCar, updateTotalPrice } from '../../Redux/actions/userActions';

const useStyles = makeStyles((theme) => ({
    pokemonPaper: {
        margin: '18px 18px',
        padding: 18,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '80%',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        },
    },
    pokemonImage: {
        alignSelf: 'center',
        width: 200
    },
    addButtom: {
        borderColor: '#49896F',
        color: '#49896F'
    }
}))

export default function Pokemon({ pokemon }) {
    //Hook do redux 
    const dispatch = useDispatch();

    //Hook do Material UI para styles
    const classes = useStyles();
    const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.pokemon.url.split('/')[6]}.png`;
    const pokemonName = pokemon.pokemon.name;
    const randomValue = parseInt(Math.random() * (5 - 3) + 3); //Random value para o Rating
    const price = parseInt(Math.random() * 200);
    /* Para pegar a imagem do pokemon, criei uma expressão usando a função split do javascript. */
    /* Como as urls das imagens dos Pokemon são as mesmas e cada Pokemon tem um número específico, eu capturo o número usando o split no atributo url e posição 6 do array gerado. Assim, reaproveiro a mesma url, alterando somente os números de cada Pokemon, para pegar sua imagem. */
    
    const handleAddToCar = (pokemonImage, pokemonName, price) => {
        const pokemon = {
            pokemonImage,
            pokemonName,
            price
        }
        //Adicionar o Pokemon ao carrinho
        dispatch(addPokemonToCar(pokemon));
        //Atualizar o preço total do carrinho
        dispatch(updateTotalPrice(pokemon.price))
    }

    return (
        <Paper elevation={3} className={classes.pokemonPaper}>
            <img alt={pokemon.pokemon.name} className={classes.pokemonImage} src={pokemonImage} />
            <h2 className="Capitalize">{pokemonName}</h2>
            <Rating name="size-large" value={randomValue} readOnly size="large" />
            <h3>R$ {price},00</h3>
            <Buttom variant="outlined" className={classes.addButtom} onClick={() => handleAddToCar(pokemonImage, pokemonName, price)}>Adicionar ao carrinho</Buttom>
        </Paper>
    )
}
