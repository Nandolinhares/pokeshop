import { takeLatest, put } from 'redux-saga/effects';

//Worker get old
function* getOldPurchaseSaga(action) {
    try {
        yield put({ type: 'LOADING_UI' });
        yield put({ type: 'SET_OLD_PURCHASE', payload: action.payload });
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
    catch(err) {
        console.error(err);
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
}

//Watcher get old
export function* watchGetOldPurchase() {
    yield takeLatest('SET_OLD_PURCHASE_SAGA', getOldPurchaseSaga)
}