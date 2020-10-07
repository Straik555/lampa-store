import request from 'superagent';

export const fetchPhones = async () => {
    const api = 'https://run.mocky.io/v2/5918bc6b120000701040dbec';
    const {body} = await request.get(api)
    return body.phones
}
