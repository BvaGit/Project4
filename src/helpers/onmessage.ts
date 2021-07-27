
import { store } from '../index';
import { stepG, setLogin, setField } from '../store/connectWS/actions';

export const onmessage = (message: any) => {
    const mes = message.body
    console.log("onmessage", JSON.parse(mes));
    if (message.body.charAt(0) === '{') {
        const parsedBody = JSON.parse(message.body);
        if(parsedBody.field){
            store.dispatch(setField(parsedBody.field));
        }
        if(parsedBody.stepDto){
            store.dispatch(setLogin(parsedBody.stepDto.login));
            store.dispatch(stepG(parsedBody.stepDto.step));
        }
    }
}