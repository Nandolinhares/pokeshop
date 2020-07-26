import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
//Redux
import { useDispatch } from 'react-redux';
//Actions
import { searchPokemon } from '../../Redux/actions/userActions';

const useStyles = makeStyles((theme) => ({ 
    buttonSearch: {
        display: 'flex',
        margin: '18px auto',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    }
}))

export default function SearchMobile({ classes }) {

    const dispatch = useDispatch();

    const styles = useStyles();

    const [pokemon, setPokemon] = useState("");

    const handleChange = (event) => {  
        setPokemon(event.target.value);
    }

    const handleSearch = () => {
        dispatch(searchPokemon(pokemon));
    }

    return (
        <section className={classes.buttonSection}>
            <div className={classes.searchMobile}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Buscar"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onChange={handleChange}
                />
            </div>
            <Button variant="outlined" className={styles.buttonSearch} onClick={handleSearch}>Buscar</Button>
        </section>
    )
}
