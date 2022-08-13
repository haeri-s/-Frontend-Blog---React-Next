import { requestAPI } from "./requestAPI"


export const subscribeNewsletterAPI = (email) => {
    return requestAPI('POST', '/blogs/subscribe', {email})
}