import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';

export default function AppBarI({ classes, menuId, handleNotificationsMenuOpen }) {
    return (
        <AppBar position="static">
            <Toolbar>
                {/* Logo da Pokeshop */}
                <Typography className={classes.title} variant="h6" noWrap>
                    Pokeshop
                </Typography>
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
