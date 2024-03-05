import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

const reducers = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

export default reducers;
