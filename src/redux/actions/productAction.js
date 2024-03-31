import { productActions } from "../reducers/productSlice";

// function getProducts(searchQuery) {
//   return async (dispatch, getState) => {
//     // let url = `http://localhost:5000/products`;
//     let url = `https://my-json-server.typicode.com/ha02e/gentlemonster-react/products?q=${searchQuery}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     // console.log("ddd", data);
//     // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
//     dispatch(productActions.getAllProducts({ data }));
//   };
// }

// function getProductDetail(id) {
//   return async (dispatch) => {
//     // let url = `http://localhost:5000/products/${id}`;
//     let url = `https://my-json-server.typicode.com/ha02e/gentlemonster-react/products/${id}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     // console.log("ddddd", data);
//     // dispatch({ type: "DETAIL_PRODUCT_SUCCESS", payload: { data } });
//     dispatch(productActions.getDetailProduct({ data }));
//   };
// }

export const productAction = {};
