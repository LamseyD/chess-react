import * as api from '../api';

import { GET_INFO } from '../constants/actionTypes';

//Using redux thunk here with () => async (dispatch) => {}
export const getAllInfo = (username) => async (dispatch) => {
    try { 
        //renaming data to info here
        const { data: info } = await api.getUserInfo(username);
        const { data: stats } = await api.getUserStats(username);
        const payload = {...info, ...stats};
        dispatch({type: GET_INFO, payload})
    } catch (error){
        console.log(error);
    }
}