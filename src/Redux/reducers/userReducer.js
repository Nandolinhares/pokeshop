import {
    SET_POKEMON,
    REMOVE_POKEMON,
    SET_TOTAL_PRICE,
    SET_OLD_PURCHASE
} from '../types';

//Lista dos Pokemon 
const initialState = {
    myPokemonList: [],
    totalPrice: 0,
    oldPurchase: []
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
        default: 
            return state;
    }
}