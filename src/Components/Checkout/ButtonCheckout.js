import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
//Modal de Finalização
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

//Logo
import Logo from '../../assets/images/poke.png';

const useStyles = makeStyles({
    finalButton: {
        backgroundColor: '#49896F',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#4e9679'
        },
        marginTop: 18
    },
    logoSection: {
        display: 'flex',
        justifyContent: 'center'
    },
    logo: {
        width: '40%',
        marginTop: '28px',
    },
    modalTitle: {
        textAlign: 'center',
        color: '#fff'
    },
    ok: {
        color: '#fff'
    }
})

export default function ButtonCheckout({ myPokemonList, totalPrice, oldPurchase }) {
    const classes = useStyles();
    //Modal Aberto
    const [open, setOpen] = useState(false);

    //Função para finalizar compra
    const handleCheckout = () => {
        //Defino um array local para receber as antigas compras
        let oldPurchaseLocal = oldPurchase;
        //Crio um objeto resultado da compra atual, contendo os Pokemon e o preço total
        const result = {
            myPokemonList,
            totalPrice
        }

        //Salvo o resultad no array de compras que vai ficar armazenado no localstorage do navegador
        oldPurchaseLocal.push(result);

        localStorage.setItem("Compras", JSON.stringify(oldPurchaseLocal));

        setOpen(true);
    }

    const handleRedirect = () => {
        window.location.href = "/";
    }
    
    return (
        <>
            <Button variant="contained" className={classes.finalButton} onClick={handleCheckout}>Finalizar compra</Button>
            <Dialog
                open={open}
                //onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <section className={classes.logoSection}>
                    <img alt="Pokeshop Logo" src={Logo} className={classes.logo} />
                    <img alt="Pikachu" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />
                </section>
                <DialogTitle id="alert-dialog-title" className={classes.modalTitle}>Compra finalizada com sucesso!</DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description" className={classes.modalTitle}>
                    Bem vindo ao mundo de treinadores, aguardamos a sua volta!
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button autoFocus onClick={handleRedirect} className={classes.ok}>
                    Ok
                </Button>
                </DialogActions>
            </Dialog>
        </>    
    )
}
