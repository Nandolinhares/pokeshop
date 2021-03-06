import {
    LOADING_UI,
    CLEAR_LOADING_UI
} from '../types';

const initialState = {
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {

        case LOADING_UI:
            return {
                ...state,
                loading: true
            }
        case CLEAR_LOADING_UI:
            return {
                ...state,
                loading: false
            }    
        default:
            return state;
    }
}
