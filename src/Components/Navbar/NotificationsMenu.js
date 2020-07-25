import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
//Redux
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    title: {
        textAlign: 'center',
        margin: 18
    },
    purchaseDiv: {
        display: 'flex',
        flexDirection: 'column',
        borderBottom: '1px solid grey'
    },
    pokemonDiv: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    marginImage: {
        marginRight: 18
    },  
    price: {
        color: 'green'
    }
})

export default function NotificationsMenu({ anchorEl, isNotificationOpen, handleNotificationsClose, menuId }) {

    const classes = useStyles();

    //Aqui eu pego as compras antigas para mostrar nas notificações
    const { oldPurchase } = useSelector(state => state.user);

    return (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isNotificationOpen}
            onClose={handleNotificationsClose}
            className={classes.teste}
            >
            <h2 className={classes.title}>Compras antigas</h2>
            <hr />
            {oldPurchase.map((purchase, index) => {
                return (
                    <MenuItem onClick={handleNotificationsClose} key={Math.random() * 100000} className={classes.purchaseDiv}>
                        <h2 className={classes.title}>Compra {index + 1}</h2>
                        {purchase.myPokemonList.map(pokemon => {
                            return (
                                <section key={Math.random() * 100000} className={classes.pokemonDiv}>
                                    <img alt={pokemon.pokemonName} src={pokemon.pokemonImage} className={classes.marginImage} />
                                    <h4 className="Capitalize" style={{ marginRight: 34 }}>{pokemon.pokemonName}</h4>
                                    <h4>{pokemon.price}</h4>
                                </section>
                            )
                        })}
                        <h3 className={classes.price}>Total: R${purchase.totalPrice},00</h3>
                        
                    </MenuItem>
                )
            })}
        </Menu>
    )
}
