import { all } from 'redux-saga/effects';

//Sagas
import { watchAddPokemonToCar, watchUpdateTotalPrice } from './shopcarSaga';

export default function* rootSaga() {
    yield all([
        watchAddPokemonToCar(),
        watchUpdateTotalPrice(),
    ]);
}