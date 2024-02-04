import { createStore, applyMiddleware } from "redux";
import travelReducer from "./reducers/travelReduces";
import {thunk} from "redux-thunk";

const store = createStore(travelReducer, applyMiddleware(thunk));

export default store;
