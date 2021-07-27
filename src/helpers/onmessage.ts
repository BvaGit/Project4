
import { store } from '../index';
import { stepG, setLogin, setField, botStep, doBotStep } from '../store/connectWS/actions';

export const onmessage = (message: any) => {
    const mes = message.body
    console.log("onmessage", JSON.parse(mes));
    if (message.body.charAt(0) === '{') {
        const parsedBody = JSON.parse(message.body);
        if(parsedBody.field){
            if(parsedBody.field.gameField){
                return store.dispatch(setField(parsedBody.field.gameField))
            }
            store.dispatch(setField(parsedBody.field));
        }
        if(parsedBody.stepDto){
            store.dispatch(setLogin(parsedBody.stepDto.login));
            store.dispatch(stepG(parsedBody.stepDto.step));
        }
        if(parsedBody.stepOrderLogin === 'Bot'){
            console.log('stepOrderLogin-----')
            store.dispatch(botStep());
        }
    }
}

export const onmessageBot = (message: any) => {
    console.log("onmessageBot",message.body)
    store.dispatch(doBotStep(message.body));
}