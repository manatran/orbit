import { applyMiddleware, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const persistConfig = {
	storage,
	key: "orbit",
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
