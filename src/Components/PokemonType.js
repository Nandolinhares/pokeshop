import React, { useState } from 'react';
//Material Ui
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
//Redux
import { useSelector } from 'react-redux';

export default function PokemonType() {
    //Hook do Material Ui
    const classes = useStyles();
    const { theme } = useSelector(state => state.user);
    //Tipo de Pokemon do select
    const [pokemonType, setPokemonType] = useState('');
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setPokemonType(event.target.value);
    };

    //Abrir o select
    const handleClose = () => {
        setOpen(false);
    };
    //Fechar o select
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <section>
            <h2>Escolha a loja Pokemon</h2>
            <div className={classes.divPokemonType}>
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Pokemon</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={pokemonType}
                        onChange={handleChange}
                    >
                    <MenuItem value="grass">Planta</MenuItem>
                    <MenuItem value="water">Água</MenuItem>
                    </Select>
                </FormControl>
                <Button variant="contained" component={Link} to={pokemonType} className={theme === 'grass' ? classes.buttonGrassOk : classes.buttonWaterOk}>Ok</Button>
            </div>
        </section>
    )
}

const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    divPokemonType: {
        display: 'flex',
        justifyContent: 'space-evenly'
    },
    buttonGrassOk: {
        backgroundColor: '#49896F',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#49884f'
        },
        borderRadius: 80,
        height: 35,
        alignSelf: 'center'
    },
    buttonWaterOk: {
        backgroundColor: '#42a5de',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#42a4ef'
        },
        borderRadius: 80,
        height: 35,
        alignSelf: 'center'
    }
}));