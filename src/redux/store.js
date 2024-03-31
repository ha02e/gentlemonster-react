// import { createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import rootReducer from "./reducers/index";
// import { composeWithDevTools } from "@redux-devtools/extension";

import productReducer from "./reducers/productSlice";
import authenticateReducer from "./reducers/authenticateReducer";

import { configureStore } from "@reduxjs/toolkit";

// let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

//configureStore는
//comninereducer, thunk, applyMiddleware, composeWithDevTools 를 모두 자동으로 셋업
const store = configureStore({
  reducer: {
    auth: authenticateReducer,
    product: productReducer,
  },
});

export default store;
