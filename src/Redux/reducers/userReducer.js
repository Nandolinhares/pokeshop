import {
    SET_POKEMON,
    REMOVE_POKEMON,
    SET_TOTAL_PRICE,
    SET_OLD_PURCHASE,
    CHANGE_THEME,
    CLEAR_SHOP_CAR,
    SET_ALL_POKEMON,
    SET_SEARCH_RESULT
} from '../types';

//Lista dos Pokemon 
const initialState = {
    myPokemonList: [],
    totalPrice: 0,
    oldPurchase: [],
    theme: 'grass',
    allPokemon: [],
    searchParams: ""
}

export default function(state = initialState, action) {
    switch(action.type) {
        
        case SET_POKEMON:
            return {
                ...state,
                myPokemonList: [...state.myPokemonList, action.payload]
            }
        case REMOVE_POKEMON:
            return {
                ...state,
                myPokemonList: state.myPokemonList.filter(pokemon => action.payload !== pokemon),
            }    
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload
            }    
        case SET_OLD_PURCHASE:
            return {
                ...state,
                oldPurchase: action.payload
            }
        case CHANGE_THEME:
            return {
                ...state,
                theme: action.payload
            }
        case CLEAR_SHOP_CAR:
            return {
                ...state,
                myPokemonList: [],
                totalPrice: 0
            }
        case SET_ALL_POKEMON:
            return {
                ...state,
                allPokemon: action.payload
            }
        case SET_SEARCH_RESULT:
            return {
                ...state,
                searchParams: action.payload
            }                
        default: 
            return state;
    }
}