import { takeLatest, put } from 'redux-saga/effects';

//Worker Add Shopcar
function* addPokemonToCarSaga(action) {
    try {
        yield put({ type: 'LOADING_UI' });
        yield put({ type: 'SET_POKEMON', payload: action.payload });
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
    catch(err) {
        console.error(err);
    }
}

//Watcher Add Shopcar
export function* watchAddPokemonToCar() {
    yield takeLatest('ADD_NEW_POKEMON', addPokemonToCarSaga)
}

//Worker Remove Pokemon from shopcar
function* removePokemonSaga(action) {
    try {
        yield put({ type: 'LOADING_UI' });
        yield put({ type: 'REMOVE_POKEMON', payload: action.payload });
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
    catch(err) {
        console.error(err);
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
}

//Watcher Remove pokemon from shopcar
export function* watchRemovePokemon() {
    yield takeLatest('REMOVE_POKEMON_SAGA', removePokemonSaga)
}

//Worker Update Total 
function* updateTotalPriceSaga(action) {
    try {
        yield put({ type: 'LOADING_UI' });
        yield put({ type: 'SET_TOTAL_PRICE', payload: action.payload });
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
    catch(err) {
        console.error(err);
    }
}

//Watcher Update Total
export function* watchUpdateTotalPrice() {
    yield takeLatest('UPDATE_TOTAL_PRICE', updateTotalPriceSaga)
}