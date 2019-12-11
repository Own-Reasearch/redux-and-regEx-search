import * as Types from '../actions/types';
const productReducer = (state = {} , action) => {
    switch(action.type){
        case Types.FETCH_API:
            return action.payload;
            
        case Types.SEARCH_PRODUCT:
            console.log(state)
            console.log(action.payload)
            //   return action.payload
             const result = state.filter(keywords => keywords.name.toLowerCase() === action.payload.toLowerCase())
             console.log(result)
            
            
        default :
        return state
    }
}

export default productReducer;