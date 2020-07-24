import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
//Redux
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles({
    buyButton: {
        backgroundColor: '#49896F',
        color: '#fff',
        display: 'flex',
        margin: '18px auto',
        width: '80%',
        '&:hover': {
            backgroundColor: '#4c9175'
        }
    }
})

export default function BuyButton() {
    //Hook para navegação
    const history = useHistory();
    const classes = useStyles();
    //Pegando os pokemon adicionados
    const { myPokemonList } = useSelector(state => state.user);

    //Função para comprar os pokemon adicionados ao carrinho
    const handleBuyPokemon = () => {
        const pokemonList = [];
        //Vou verificar se os Pokemon na minha lista tem o slot > 0.
        if(myPokemonList.length > 0) {
            history.push('/resume');
        } else {
            alert("Seu carrinho está vazio");
        }

    }

    return (
        <Button variant="contained" className={classes.buyButton} onClick={handleBuyPokemon}>Comprar</Button>
    )
}
