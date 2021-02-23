import axios from 'axios';
import * as Config from './Config';

export default function callApi(address, method, body) {
    return axios({
        method: method,
        url: Config.API_URL + address,
        data: body
    })
    .catch(err => {
        console.log(err);
    });
};