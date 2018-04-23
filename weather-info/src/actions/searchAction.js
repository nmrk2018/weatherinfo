import { FETCH_SEARCH_DATA, SHARE_INPUT_SEARCH_DATA } from './types';
import axios from 'axios';

const APIKEY = 'a3e9acbd79bf43fa9166149b247ef164'

export const fetchSearchData = (val) => dispatch => {
    axios.get('http://api.openweathermap.org/data/2.5/weather?'+val+'&APPID='+APIKEY)
    .then(res => 
    dispatch({
    type: FETCH_SEARCH_DATA,
    payload: res.data   
    })).catch(error => {
        dispatch({
            type: FETCH_SEARCH_DATA,
            error: "City Not Found"  
            })
    })
}
