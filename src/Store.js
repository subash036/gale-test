import { createStore } from 'redux';
import data from "./data.json";
import dispatcher from './Reducer';
let store = {...data, ...{}};
export default createStore(dispatcher, store);

