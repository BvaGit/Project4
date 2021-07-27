import { routes } from '../constants/routes';
import cookie from "js-cookie";

export const fetchRegisterAuth = async (url: string, body: any): Promise<Response> => {
    const answer = await fetch(`${routes.baseUrl}${url}`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    return answer;
}

export const fetchGet = async (url: string): Promise<Response> => {
    try {
        const answer =  await fetch(`${routes.baseUrl}${url}`);
        return answer;
    } catch (e) {
        console.log(e);
    }
}

export const fetchPostRequest = async (url: string, body: any): Promise<Response> => {
    try {
        const token = cookie.get("token");
        console.log(token)
        const answer = await fetch(`${routes.baseUrl}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token,
            },
            body: JSON.stringify(body)
        })
        return answer;
    } catch (e) {
        console.log(e)
    }
}

