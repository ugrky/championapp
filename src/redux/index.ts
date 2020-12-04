import { createStore as createStoreRedux, Store } from 'redux';
import { reducer } from './reducers';


let singletonStore: Store | null = null;

const initialState = {};

export const getStore = () => {
  if (!singletonStore) {
    return createStore();
  }

  return singletonStore;
};

export const createStore = () => {

  const store = createStoreRedux(reducer, initialState);

  singletonStore = store;

  return singletonStore;
};