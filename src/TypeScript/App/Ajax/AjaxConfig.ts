import axios from 'axios';

export class AjaxConfig {
    constructor () {
        window['axios'] = axios;
        axios.defaults.baseURL = location.origin;
    }
}
