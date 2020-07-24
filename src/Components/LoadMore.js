import React from 'react';
//Styles
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    button: {
        display: 'flex',
        margin: '0 auto',
        color: '#fff',
        backgroundColor: '#49896F',
        '&:hover': {
            backgroundColor: '#4c9175'
        }
    }
})

export default function LoadMore({ loadMore }) {
    //Hook do Material Ui para styles
    const classes = useStyles();
    return (
        <Button variant="contained" className={classes.button} onClick={loadMore}>Carregar mais</Button>
    )
}
