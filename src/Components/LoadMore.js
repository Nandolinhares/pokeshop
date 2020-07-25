import React from 'react';
//Styles
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    buttonGrass: {
        display: 'flex',
        margin: '0 auto',
        color: '#fff',
        backgroundColor: '#49896F',
        '&:hover': {
            backgroundColor: '#4c9175'
        }
    },
    buttonWater: {
        display: 'flex',
        margin: '0 auto',
        color: '#fff',
        backgroundColor: '#42a5de',
        '&:hover': {
            backgroundColor: '#42a6fe'
        }
    }
})

export default function LoadMore({ loadMore, theme }) {
    //Hook do Material Ui para styles
    const classes = useStyles();
    return (
        <Button variant="contained" className={theme === 'grass' ? classes.buttonGrass : classes.buttonWater} onClick={loadMore}>Carregar mais</Button>
    )
}
