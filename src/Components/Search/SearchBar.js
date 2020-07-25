import React from 'react';
import InputBase from '@material-ui/core/InputBase';
//Redux
import { useDispatch } from 'react-redux';
//Actions
import { searchPokemon } from '../../Redux/actions/userActions';


export default function SearchBar({ classes }) {

    const dispatch = useDispatch();

    const handleSearch = (event) => {
        dispatch(searchPokemon(event.target.value));
    }

    return (
        <InputBase
            placeholder="Buscar"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
            onChange={(e) => handleSearch(e)}
        />
    )
}
