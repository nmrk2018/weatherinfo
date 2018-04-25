import { FETCH_SEARCH_DATA } from '../actions/types';

const initialState = {
    items: {},
    name: "",
    date: "",
    humidity: "",
    temp: "",
    temp_max: "",
    temp_min: "",
    error: ""
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_SEARCH_DATA:
        if(action.error) {
            return {
                ...state,
                error: action.error

            }
        } else {
        return {
            ...state,
            name: action.payload.name,
            date: new Date(action.payload.dt*1000).toLocaleDateString(),
            humidity: action.payload.main.humidity,
            temp: (action.payload.main.temp-273.15),
            temp_max: (action.payload.main.temp_max-273.15),
            temp_min: (action.payload.main.temp_min-273.15),
            error: ""
        }
    }
        default:
        return state;
    }
}