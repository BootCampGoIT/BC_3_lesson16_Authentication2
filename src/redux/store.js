// ========================== redux ===============================
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const middleWares = [thunk];

const enhancer = applyMiddleware(...middleWares);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export const persistor = persistStore(store);

export default store;

