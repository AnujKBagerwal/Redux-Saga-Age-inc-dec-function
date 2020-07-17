import { takeLatest, put, delay, all, fork } from 'redux-saga/effects';
import {
  AGE_UP_ASYNC,
  AGE_DOWN_ASYNC,
  AGE_DOWN,
  AGE_UP,
} from '../store/action';

function* asyncAgeUp() {
  yield delay(4000);
  yield put({ type: AGE_UP_ASYNC, payload: 1 });
}

function* watchAgeUp() {
  yield takeLatest(AGE_UP, asyncAgeUp);
}

function* asyncAgeDown() {
  yield delay(4000);
  yield put({ type: AGE_DOWN_ASYNC, payload: 2 });
}

function* watchAgeDown() {
  yield takeLatest(AGE_DOWN, asyncAgeDown);
}

export function* rootSaga() {
  yield all([fork(watchAgeUp), fork(watchAgeDown)]);
}

// For multiple Saga
// https://www.youtube.com/watch?v=fEjevUGH4BU

// Effect can be used
// https://redux-saga.js.org/docs/api/
