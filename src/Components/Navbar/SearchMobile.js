import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

import InputBase from '@material-ui/core/InputBase';

export default function SearchMobile({ classes }) {
    return (
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
            />
        </div>
    )
}
