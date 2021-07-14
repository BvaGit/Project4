import { put, takeEvery, select, call } from "redux-saga/effects";
import { regValues } from "./selectors";
import { SEND_REGISTRATION } from './actionTypes';
import history from "../../helpers/history";

const fetchRegister = async (body: any): Promise<Response> => {
    const answer = await fetch('http://35.176.167.155:8089/registration/reg',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    return answer;
}

function* RegisterWorker(): any {
    try {
        const data = yield select(regValues);
        const body = {
            login: data.login,
            password: data.password
        }
        const answer = yield call(fetchRegister, body)
        if(answer.status === 201){
            history.push('/')
        }
    } catch (e) {
        console.log(e)
    }
}

export function* registerWatcher(): any {
    yield takeEvery(SEND_REGISTRATION, RegisterWorker)
}