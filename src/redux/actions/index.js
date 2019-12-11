import Axios from "axios"
import * as Types from './types';
export const fetchProduct = () => dispatch=>{
    Axios.get('http://localhost:3333/api/product/all-books/1/8')
    .then(res =>dispatch({
        type:Types.FETCH_API,
        payload: res.data.data
    })).catch(error=>console.error(error));
    
}

export const searchProduct = (keyword) => {
    return {
        type: Types.SEARCH_PRODUCT,
        payload: keyword
    }
}