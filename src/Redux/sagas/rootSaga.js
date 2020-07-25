import { all } from 'redux-saga/effects';

//Sagas
import { watchAddPokemonToCar, watchUpdateTotalPrice, watchRemovePokemon } from './shopcarSaga';
import { watchGetOldPurchase } from './purchaseSaga';

export default function* rootSaga() {
    yield all([
        watchAddPokemonToCar(),
        watchUpdateTotalPrice(),
        watchRemovePokemon(),
        watchGetOldPurchase(),
    ]);
}