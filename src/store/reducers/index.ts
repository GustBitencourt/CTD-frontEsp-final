import { combineReducers } from 'redux';
import { fetchCharactersReducer } from '../reducers/fetchCharactersReducer';

export const reducers = combineReducers({
  person: fetchCharactersReducer,
});
