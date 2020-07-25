import { takeLatest, put } from 'redux-saga/effects';

//Worker set params search
function* setSearchResult(action) {
    try {
        yield put({ type: 'LOADING_UI' });
        yield put({ type: 'SET_SEARCH_RESULT', payload: action.payload });
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
    catch(err) {
        console.error(err);
        yield put({ type: 'CLEAR_LOADING_UI' });
    }
}

//Watcher set params
export function* watchSetSearchResult() {
    yield takeLatest('SET_SEARCH_RESULT_SAGA', setSearchResult)
}