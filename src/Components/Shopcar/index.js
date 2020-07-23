import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//Paper
import Paper from '@material-ui/core/Paper';
//Carrinho
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const useStyles = makeStyles((theme) => ({
    paper: {
        margin: '100px 18px',
        padding: 18,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            margin: '18px 18px'
        },
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    carrinho: {
        textAlign: 'center'
    }
}))

export default function Shopcar() {
    const classes = useStyles();
    return (
        <Paper elevation={3} className={classes.paper}>
            <section className={classes.header}>
                <h2 className={classes.carrinho}>Meu Carrinho</h2>
                <ShoppingCartOutlinedIcon />
            </section>
        </Paper>
    )
}
