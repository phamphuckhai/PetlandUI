import { call, put } from 'redux-saga/effects';
import {api, getTestGQL} from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';


export function* load() {
  try {
    // const response = yield call(api.get, 'users/diego3g/repos');
    
    const response =  yield call(getTestGQL);
    // console.log("hello");
    
    // console.log(typeof(response));

    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}


