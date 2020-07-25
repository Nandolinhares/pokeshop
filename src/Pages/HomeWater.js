import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//Lib para consultar a API
import axios from 'axios';
//Redux
import { useDispatch } from 'react-redux';
//Actions
import { changeTheme, clearShopCar } from '../Redux/actions/userActions';

//Components
import HomeGrid from '../Components/HomeGrid';

const useStyles = makeStyles((theme) => ({
    main: {
        [theme.breakpoints.up('sm')]: {
            marginTop: '8%'
        }
    }, 
}))

export default function HomeWater() {
    //Hook para usar o makeStyles do Material Ui
    const classes = useStyles();
    const dispatch = useDispatch();
    //Todos os Pokemon do tipo escolhido pelo user
    const [allPokeTypes, setAllPokeTypes] = useState([]);
    //Tipos de Pokemon carregados a cada 12
    const [pokemonType, setPokemonType] = useState([]);
    const [offset, setOffset] = useState(0);
    //Padrão de Pokemon mostrados por load
    const [perLoad] = useState(12);
    //Fim dos Pokemon
    const [end, setEnd] = useState(false);

    useEffect(() => {   
        //Pegando o array contendo informações do pokemon do tipo grass na PokeApi usando o axios get. Depois, salvo no estado pokemonType do component.
        const getPokemon = axios.get('https://pokeapi.co/api/v2/type/water')
            .then(res => {
                //Todos os pokemon do tipo Planta
                const pokeType = res.data.pokemon;
                setAllPokeTypes(pokeType);
                //O novo offset será igual ao valor do offset inicial = 0 + a quantidade de Pokemon carregado por vez
                const newOffset = offset + perLoad;
                //Aqui eu seleciono os 12 pokemon da respectiva página
                setPokemonType(pokeType.slice(offset, newOffset));
                setOffset(newOffset);
            })
            .catch(err => {
                //Se algo der errado no acesso a api
                console.error(err);
            })
         //Mudar o tema do css para tipo planta    
         dispatch(changeTheme('water'));
         //Limpar o carringo, para cada loja ser independente
         dispatch(clearShopCar());
        //Unmount do component
        return () => getPokemon;    
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //Função para pegar mais Pokemon quando o usuário clicar em Carregar mais na lista
    const loadMore = () => {
        let oldPokeType = pokemonType;
        let newOffset = offset + perLoad;
        //Aqui eu pego os próximos 12 Pokemon
        const newPokeType = allPokeTypes.slice(offset, newOffset);
        //Os próximos 12 Pokemons vão ser concatenados no array contendo os Pokemon já carregados na tela
        let updatedPokeType = oldPokeType.concat(newPokeType);
        //Enquanto não alcançar o fim da lista de Pokemon, vai atualizando a cada clique. Senão, Set end para mostrar o fim do array
        if(newPokeType.length === 0) {
            setEnd(true);
        } else {
            setPokemonType(updatedPokeType);
            setOffset(newOffset);
        }
    }

    return (
        <main className={classes.main}>
            <HomeGrid pokemonType={pokemonType} end={end} loadMore={loadMore} />
        </main>
    )
}
