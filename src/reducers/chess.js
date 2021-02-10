import { GET_INFO } from '../constants/actionTypes'

const reducer = (state = {}, action) => {
    switch (action.type){
        case GET_INFO:
            return action.payload;
        default:
            return state;
    }
}

export default reducer;