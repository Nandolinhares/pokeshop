import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

import Logo from '../../assets/images/poke.png';

export default function AppBarI({ classes, menuId, handleNotificationsMenuOpen }) {
    return (
        <AppBar position="fixed" className={classes.appbar}>
            <Toolbar>
                {/* Logo da Pokeshop */}
                <section className={classes.logo}>
                    <img alt="Pokeshop" src={Logo} className={classes.pokeshop} />
                    <img alt="Pikachu" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" />
                </section>
                {/* Barra de busca */}
                <div className={classes.search}>
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
                {/* Grow */}
                <div className={classes.grow} />
            
                {/* Botão Notificação */}

                <IconButton 
                    aria-label="notificações" 
                    color="inherit" 
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleNotificationsMenuOpen}
                >
                    <Badge badgeContent={2} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

            </Toolbar>
       </AppBar>
    )
}
