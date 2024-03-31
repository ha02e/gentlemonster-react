function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    // let url = `http://localhost:5000/products`;
    let url = `https://my-json-server.typicode.com/ha02e/gentlemonster-react/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("ddd", data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts };
