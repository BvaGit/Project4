import { routes } from '../constants/routes';

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

