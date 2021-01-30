import { all, takeEvery } from 'redux-saga/effects';

import { RepositoriesTypes } from './repositories/types';
import { load, loadPost, loadPet,loadVaccine, takeDelete, loadwiki } from './repositories/sagas';

export default function* rootSaga() {
  return yield all([
    takeEvery(RepositoriesTypes.LOAD_REQUEST, load),
    takeEvery(RepositoriesTypes.LOAD_POST, loadPost),
    takeEvery(RepositoriesTypes.LOAD_PET, loadPet),
    takeEvery(RepositoriesTypes.LOAD_VACCINE, loadVaccine),
    takeEvery(RepositoriesTypes.DELETE_VACCINE, takeDelete),
    takeEvery(RepositoriesTypes.LOAD_WIKI, loadwiki)
  ]);
}


