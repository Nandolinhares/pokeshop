import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
//Redux
import { useSelector } from 'react-redux';

//Components
import Logo from '../../assets/images/poke.png';
import SearchBar from '../../Components/Search/SearchBar';

export default function AppBarI({ classes, menuId, handleNotificationsMenuOpen }) {

    //Aqui eu pego o array contendo as compras antigas, salvas no localstorage armazenadas no reducer pelo Auth Provider
    const { oldPurchase, theme } = useSelector(state => state.user);

    return (
        <AppBar position="fixed" className={theme === 'grass' ? classes.appbarGrass : classes.appbarWater}>
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
                    {/* Barra de busca */}
                    <SearchBar classes={classes} />
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
                    {/* O número de notifications vai ser equivalente ao tamanho do array de oldPurchase */}
                    <Badge badgeContent={oldPurchase.length} color="secondary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>

            </Toolbar>
       </AppBar>
    )
}
