// api.js 
// - API 기본 설정
import Axios from "axios";

let urls = {
    development: 'http://127.0.0.1:8000/api/v1',
    production: 'http://127.0.0.1:8000/api/v1'
}
export const BASE_URL = urls[process.env.NEXT_PUBLIC_NODE_ENV || 'development']

const api = Axios.create({
    baseURL: BASE_URL,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    exposedHeaders: ["set-cookie"]
});
api.defaults.withCredentials = true;
api.defaults.xsrfCookieName = 'csrftoken';
api.defaults.xsrfHeaderName = 'X-CSRFToken';

// 쿠키 설정하기
export const getCookie = (name) => {
    try {
        let cookieValue = null;
        if (document?.cookie && document?.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        } 
        return cookieValue;
    } catch(err) {
        return null
    }
}

export default api;