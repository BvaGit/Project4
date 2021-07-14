import { put, takeEvery, select, call } from "redux-saga/effects";
import cookie from "js-cookie";
import { SEND_AUTH } from './actionTypes';
import history from "../../helpers/history";
import { getAuthFieldsStore } from './selectors'

const fetchAuth = async (body: any): Promise<Response> => {
    const answer = await fetch('http://35.176.167.155:8089/authorization/auth',{
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(body)
    })
    
    return answer;
}

function* AuthWorker(): any {
    try {
        const data = yield select(getAuthFieldsStore);
        const body = {
            login: data.login,
            password: data.password
        }
        const answer = yield call(fetchAuth, body)
        
        if(answer.status === 200){
            const token = yield answer.text()
            cookie.set("token", token);
            history.push('/main');
        }
    } catch (e) {
        console.log(e)
    }
}

export function* authWatcher(): any {
    yield takeEvery(SEND_AUTH, AuthWorker)
}
