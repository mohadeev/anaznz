import { createStore } from "redux";
import {rooteReducer} from './rooteReducer'
export const store =createStore(rooteReducer);
