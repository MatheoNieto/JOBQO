import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers/index';

const store = createStore(
  reducer, //reducers
  {}, // estado inicial
  applyMiddleware(reduxThunk),
);

export default store ;
