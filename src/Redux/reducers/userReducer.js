import {
    SET_POKEMON,
    SET_TOTAL_PRICE
} from '../types';

//Lista dos Pokemon 
const initialState = {
    myPokemonList: [],
    totalPrice: 0
}

export default function(state = initialState, action) {
    switch(action.type) {
        
        case SET_POKEMON:
            return {
                ...state,
                myPokemonList: [...state.myPokemonList, action.payload]
            }
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: state.totalPrice + action.payload
            }    
        
        default: 
            return state;
    }
}