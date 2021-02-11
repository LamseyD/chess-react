import { AUTH, LOGOUT } from '../constants/actionTypes';
import cookies from 'react-cookies';
const reducer =  (state = { authData: null}, action) => {
    switch (action.type){
        case AUTH:
            // localStorage.setItem('profile', JSON.stringify({...action?.payload}));
            cookies.save('profile', {...action?.payload});
            return {...state, authData: action?.payload};
        case LOGOUT:
            // localStorage.clear();
            cookies.remove('profile');
            return {...state, authData: null};
        default:
            return state;
    }
}


export default reducer