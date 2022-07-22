import { persistStore, persistReducer } from "redux-persist";

import { createStore, applyMiddleware, compose, combineReducers } from "redux";

import storage from "redux-persist/lib/storage";

import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import thunk from "redux-thunk";

import { core } from "./core";

import { catalogue } from "./catalogue";

import slugify from "slugify";

import { createLogger } from "redux-logger";

function slug(data, separator = "_") {
  return slugify(String(data), {
    replacement: separator,
    remove: /[*+~.()'"!:@]/g,
    lower: false,
  });
}

const log = createLogger({
  diff: false,
  collapsed: true,
});

const persistConfig = {
  key: "posEduwork",
  storage,
  stateReconciler: hardSet,
};

const rootReducer = combineReducers({ core, catalogue });

let middleware = [thunk];

if (process.env.REACT_APP_ENVIRONMENT !== "production") {
  middleware = [thunk, log];
}

const enhancers = [];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middleware), ...enhancers)
);

const persistor = persistStore(store);

export { store, persistor, slug };
