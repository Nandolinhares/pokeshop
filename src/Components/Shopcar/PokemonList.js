import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//Delete Pokemon from list
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
//Redux
import { useSelector, useDispatch } from 'react-redux';
import { updateTotalPrice, removePokemon } from '../../Redux/actions/userActions';

export default function PokemonList({ pokemon }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    //Pegando a lista dos pokemon no carrinho
    const { myPokemonList } = useSelector(state => state.user);

    //Função para remover o Pokemon da lista
    const removePokemonFromList = () => {
        //Negativando o preço do Pokemon, para remover a quantia referente a ele do total
        const newPokemonPrice = -pokemon.price;

        if(myPokemonList.length > 0) {
            myPokemonList.forEach(pokemonDoc => {
                if(pokemon.pokemonName === pokemonDoc.pokemonName) {
                    if(pokemon.slot > 1) {
                        pokemonDoc.slot --;
                        //Atualizar o preço total do carrinho
                        dispatch(updateTotalPrice(newPokemonPrice));
                    } else {
                        dispatch(removePokemon(pokemon));
                        //Atualizar o preço total do carrinho
                        dispatch(updateTotalPrice(newPokemonPrice));
                    }
                }
            })
        }
    }

    return (
        <section className={classes.pokemonList}>
            <img alt={pokemon.pokemonName} src={pokemon.pokemonImage} className={classes.imagePokemon} />
            <h3 className={classes.pokemonInfo}>{pokemon.pokemonName}</h3>
            <h3 className={classes.pokemonInfo}>R${pokemon.price},00</h3>
            <h3 className={classes.pokemonInfo}>Qtd: {pokemon.slot}</h3>
            <IconButton aria-label="delete" className={classes.delete} onClick={removePokemonFromList}>
                <DeleteIcon />
            </IconButton>
        </section>     
    ) 
}

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
            fontSize: 18,
            textAlign: 'center'
        },
    },
    delete: {
        height: 60
    }
}))