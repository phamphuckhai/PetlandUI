import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesState = {
  vaccine: [],
  data: [],
  error: false,
  loading: false,
  idDelete: '',
};

const reducer: Reducer<RepositoriesState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_SUCCCES:
      return {
      ...state, loading: false, error: false, data: action.payload.data,
      };
    case RepositoriesTypes.LOAD_FAILURE:
      return {
      ...state, loading: false, error: true, data: [],
      };
    case RepositoriesTypes.LOAD_POST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_PET:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_VACCINE:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_VACCINE_SUCCCES:
        return { 
          ...state, loading: false, error: false, vaccine: action.payload.vaccine, 
         };
    case RepositoriesTypes.DELETE_VACCINE:
      return{
        ...state, idDelete: action.payload.id
      }
    default:
      return state;
  }
};

export default reducer;


