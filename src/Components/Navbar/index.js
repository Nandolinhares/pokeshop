import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

//Components
import AppBar from './AppBar';
import NotificationsMenu from './NotificationsMenu';
import SearchMobile from './SearchMobile';

export default function Navbar() {
 //Hook para usar o Css
  const classes = useStyles();
  //Âncora quando ocorre mudança no estado do clique sobre a notificação
  const [anchorEl, setAnchorEl] = useState(null);
  //Notificação clicada? Retorna True ou false da âncora acima
  const isNotificationOpen = Boolean(anchorEl);

  //Função executada quando o usuário clica em Notificações
  const handleNotificationsMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //Função que muda o estado da âncora para o inicial
  const handleNotificationsClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';

  //Menu interno, quando o usuáro clica e exibe a notificação
  
  const notificationsMenu = (
    <NotificationsMenu anchorEl={anchorEl} menuId={menuId} isNotificationOpen={isNotificationOpen} handleNotificationsClose={handleNotificationsClose} />
  );

//Navbar Principal

  return (
    <div className={classes.grow}>
      <AppBar classes={classes} menuId={menuId} handleNotificationsMenuOpen={handleNotificationsMenuOpen} />
      {/* Busca Mobile */}
      <SearchMobile classes={classes} />
      {/* Menu dentro do íconde notificações */}
      {notificationsMenu}
    </div>
  );
}

//Aqui fica o Css do Navbar
const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  
    // Background Navbar
    //Grass
    appbarGrass: {
      backgroundColor: '#49896F' 
    },
    //Water
    appbarWater: {
      backgroundColor: '#42a5de'
    },
    
    //Logo
    logo: {
      display: 'flex',
      alignSelf: 'center',
      [theme.breakpoints.down('xs')]: {
        marginLeft: '10%',
      },
    },  
  
    //Poke
    pokeshop:{
      width: 140,
      height: 58,
      alignSelf: 'center'
    },      

    //Barra de busca
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      marginLeft: theme.spacing(3),
      width: '50%',

      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },

      
      //Barra de busca quando o tamanho da tela for sm +
      [theme.breakpoints.up('sm')]: {
        width: '64%',
      },
    },

    //Barra de busca mobile
    searchMobile: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      border: '1px solid #49896F',
      marginLeft: theme.spacing(3),
      width: '80%',
      marginTop: 18,

      //Barra de busca quando o tamanho da tela for sm +
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    //Ícone da busca
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    //Input da busca
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // Padding Vertical + font size para o ícone da busca
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));