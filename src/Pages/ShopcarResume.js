import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//Link do react router 
import { Link } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux';
//Components
import PokemonList from '../Components/Shopcar/PokemonList';
import ButtonCheckout from '../Components/Checkout/ButtonCheckout';

export default function ShopcarResume() {
    const classes = useStyles();
    //Pegando os itens da lista e o preço total
    const { myPokemonList, totalPrice, oldPurchase } = useSelector(state => state.user);

    return (
        <Grid container spacing={2} className={classes.mainGrid}>
            {myPokemonList.length > 0 ? (
                <Grid item sm={8}>
                    <h1 className={classes.h1}>Resumo da compra</h1>
                    {myPokemonList.map(pokemon => {
                        return (
                            <div key={pokemon.pokemonName}>
                                <PokemonList pokemon={pokemon} />
                            </div>
                        )
                    })}
                    <section className={classes.finalSection}>
                        <h2 className={classes.total}>Total: <strong className={classes.price}>R${totalPrice},00</strong></h2>
                        <ButtonCheckout myPokemonList={myPokemonList} totalPrice={totalPrice} oldPurchase={oldPurchase} />
                    </section>
                </Grid>
            ) : (
                <Grid item sm={8} className={classes.sectionOut}>
                    <h1 className={classes.h1}>Seu carrinho está vazio, venha ser um treinador!</h1>
                    <Button variant="outlined" component={Link} to="/" className={classes.backShop} >Ver loja</Button>
                </Grid>
            )}
        </Grid>
    )
}

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
    total: {
        textAlign: 'center'
    },
    price: {
        color: '#49896F'
    },
    finalSection: {
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
           flexDirection: 'column',
           justifyContent: 'center',
           margin: 18
        }
    },
    sectionOut: {
        display: 'flex',
        flexDirection: 'column'
    },
    backShop: {
        margin: '0 auto'
    }
}))