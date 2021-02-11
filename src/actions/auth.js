import CryptoJS from 'crypto-js'
import * as api from '../api';
import { AUTH } from '../constants/actionTypes' ;

export const signIn = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        // data = CryptoJS.AES.encrypt(data, 'I like pies');
        dispatch({type: AUTH, payload: data});
        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
} 

export const signUp = (formData, history) => async (dispatch) => {
    
    try {   
        const { data } = await api.signUp(formData);
        // data = CryptoJS.AES.encrypt(data, 'I like pies');
        dispatch({type: AUTH, payload: data});
        history.push('/');
    } catch (error) {
        console.log(error.message);
    }
}