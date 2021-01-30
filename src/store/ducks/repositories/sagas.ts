import { call, put, fork, select } from 'redux-saga/effects';
import {api, getTestGQL, getUserGQL, getAllPet, getAllVaccine, deleteVaccine} from '../../../services/api';

import { loadSuccess, loadFailure, loadVaccineSuccess } from './actions';
import store from "../../index"

const data = (store:any) => store.repositories.idDelete;

export function* load() {
  try {
    // const response = yield call(api.get, 'users/diego3g/repos');
    
    const response =  yield call(getUserGQL);
    // console.log("hello");
    
    // console.log(typeof(response));
    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* loadPost() {
  try {    
    const response =  yield call(getTestGQL);    
    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* loadPet(){
  try {        
    const response =  yield call(getAllPet);
    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}

export function* loadVaccine(){
  try {      
      
    const response =  yield call(getAllVaccine);
    
    yield put(loadVaccineSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}


export function* takeDelete(){
  try {      
    //Get store
    const id = yield select(data);
    // fork
    yield fork(deleteVaccine,id);
  } catch (err) {
    // something wrong
  }
}


