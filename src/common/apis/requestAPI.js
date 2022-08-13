import api, { getCookie } from "mixins/api"

export const requestAPI = (method, url, data, contentType='application/json') => {
    const csrftoken = getCookie('csrftoken')
    let headers = {
        'Content-Type': contentType ? contentType : 'application/json', 
        'X-CSRFToken': csrftoken,
    };
    
    return api({method, url, data, headers}).then((res) => {
        if(res.status === 'error') {
            return res.data
        } else if(res.data?.result) {
            return {status: 'success', ...res.data.result}
        }
        if([204, 205].indexOf(res.status) > -1) return {status: 'success'}
 
        return res.data
    }).catch(err => {
        if([403, 404].indexOf(err?.response?.status) > -1) {
            throw err
        }
        
        if(err?.response?.data && err?.response?.data?.status) return err.response.data
        return {status: 'error'}
    })
}

export const SERVER_ERROR_MSG = <>문제가 발생했네요. :(<br />잠시 후에 다시 시도해주세요.</>;