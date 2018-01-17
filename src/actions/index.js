import Axios from 'axios'

const API_KEY = '0a82fecb4c042b2e1d19ccd152beb1b2';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
                        
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = Axios.get(url)

    console.log('Request', request)

    return {
        type: FETCH_WEATHER, 
        payload: request

    };
};