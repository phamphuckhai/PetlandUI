import { all, takeEvery } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositories/types';
import { load, loadPost } from './repositories/sagas';

export default function* rootSaga() {
  return yield all([
    takeEvery(RepositoriesTypes.LOAD_REQUEST, load),
    takeEvery(RepositoriesTypes.LOAD_POST, loadPost),
  ]);
}


