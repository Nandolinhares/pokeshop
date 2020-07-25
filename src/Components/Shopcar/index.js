import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//Paper
import Paper from '@material-ui/core/Paper';
//Carrinho
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
//Redux
import { useSelector } from 'react-redux';

//Components
import PokemonList from './PokemonList';
import BuyButton from './BuyButton';

export default function Shopcar() {
    
    const classes = useStyles();
    //Hook do Redux para pegar o valor dos Pokemon adicionados ao carrinho
    const { myPokemonList, totalPrice, theme } = useSelector(state => state.user);
    //Verificar se a lista de compras está vazia
    const [isShoppingEmpty, setIsShoppingEmpty] = useState(true);

    useEffect(() => {
        if(myPokemonList.length > 0) {
            setIsShoppingEmpty(false);
        }
    }, [myPokemonList])

    return (
        <Paper elevation={3} className={classes.paper}>
            <section className={classes.header}>
                <h2 className={classes.carrinho}>Meu Carrinho</h2>
                <ShoppingCartOutlinedIcon className={classes.iconB} />
            </section>
            {/* Aqui temos a lista contendo os Pokemon adicionados ao carrinho */}
            <section>
                {myPokemonList.map(pokemon => {
                    return(
                        <section key={Math.random() * 100000}>
                            <PokemonList pokemon={pokemon} />
                        </section>
                    )
                })}
            </section>
            {/* Se a lista não estiver vazia, mostra o botão de comprar */}
            {isShoppingEmpty ? (
                <h3 className={classes.pokemonEmpty}>Não há nenhum Pokemon adicionado ainda</h3>
            ) : (
                <section>
                    <div className={classes.totalPriceDiv}>
                        <h4 className={classes.totalPrice}>Total</h4>
                        <h4 className={classes.totalPrice}>R${totalPrice},00</h4>
                    </div>
                    <BuyButton myPokemonList={myPokemonList} theme={theme} />
                </section>
            )}
        </Paper>
    )
}

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: '100px 18px',
        padding: 18,
        [theme.breakpoints.down('xs')]: {
            margin: '18px 18px'
        },
    },
    pokemonEmpty: {
        fontWeight: 'normal',
        textAlign: 'center'
    },
    iconB:{
        marginLeft: 18
    },  
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    carrinho: {
        textAlign: 'center'
    },
    totalPriceDiv: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    totalPrice: {
        fontSize: 22
    }
}))