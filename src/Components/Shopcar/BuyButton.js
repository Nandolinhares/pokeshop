import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    buyGrassButton: {
        backgroundColor: '#49896F',
        color: '#fff',
        display: 'flex',
        margin: '18px auto',
        width: '80%',
        '&:hover': {
            backgroundColor: '#4c9175'
        }
    },
    buyWaterButton: {
        backgroundColor: '#42a5de',
        color: '#fff',
        display: 'flex',
        margin: '18px auto',
        width: '80%',
        '&:hover': {
            backgroundColor: '#42a6df'
        }
    }
})

export default function BuyButton({ myPokemonList, theme }) {
    //Hook para navegação
    const history = useHistory();
    const classes = useStyles();

    //Função para comprar os pokemon adicionados ao carrinho
    const handleBuyPokemon = () => {
        //Vou verificar se os Pokemon na minha lista tem o slot > 0.
        if(myPokemonList.length > 0) {
            history.push('/resume');
        } else {
            alert("Seu carrinho está vazio");
        }

    }

    return (
        <Button variant="contained" className={theme === 'grass' ? classes.buyGrassButton : classes.buyWaterButton} onClick={handleBuyPokemon}>Comprar</Button>
    )
}
