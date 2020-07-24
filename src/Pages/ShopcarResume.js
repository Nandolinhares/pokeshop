import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//Link do react router 
import { Link } from 'react-router-dom';
//Redux
import { useSelector, useDispatch } from 'react-redux';
//Components
import PokemonList from '../Components/Shopcar/PokemonList';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: 128,
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            marginTop: 0
        }
    },
    h1: {
        textAlign: 'center'
    },
    price: {
        color: '#49896F'
    },
    finalButton: {
        backgroundColor: '#49896F',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#4e9679'
        },
        marginTop: 18
    },
    finalSection: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))

export default function ShopcarResume() {
    const classes = useStyles();
    //Pegando os itens da lista e o preço total
    const { myPokemonList, totalPrice } = useSelector(state => state.user);
    return (
        <Grid container spacing={2} className={classes.mainGrid}>
            {myPokemonList.length > 0 ? (
                <Grid item sm={8}>
                    <h1 className={classes.h1}>Resumo da compra</h1>
                    {myPokemonList.map(pokemon => {
                        return (
                            <PokemonList pokemon={pokemon} />
                        )
                    })}
                    <section className={classes.finalSection}>
                        <h2>Total: <strong className={classes.price}>R${totalPrice},00</strong></h2>
                        <Button variant="contained" className={classes.finalButton}>Finalizar compra</Button>
                    </section>
                </Grid>
            ) : (
                <Grid item sm={8}>
                    <h1 className={classes.h1}>Seu carrinho está vazio, venha ser um treinador!</h1>
                    <Button variant="outlined" component={Link} to="/" >Ver loja</Button>
                </Grid>
            )}
        </Grid>
    )
}
