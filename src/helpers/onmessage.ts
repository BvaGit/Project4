
import { store } from '../index';
import { stepG, setLogin, setField, botStep, doBotStep, stepOrder, setWinner } from '../store/connectWS/actions';
import { gameTypeContainer } from '../store/user/actions';

export const onmessage = (message: any) => {
    
    if (message.body.charAt(0) === '{') {
        const parsedBody = JSON.parse(message.body);
        if(parsedBody.winner){
            store.dispatch(setWinner(parsedBody.winner));
            store.dispatch(gameTypeContainer('winner'));
            store.dispatch(stepOrder(''));
            store.dispatch(setField([null, null, null, null, null, null, null, null, null]))
        }
        if(parsedBody.field){
            store.dispatch(setField(parsedBody.field));
        }
        if(parsedBody.stepDto){
            store.dispatch(setLogin(parsedBody.stepDto.login));
            store.dispatch(stepG(parsedBody.stepDto.step));
        }
        if(parsedBody.stepOrderLogin === 'Bot'){
            store.dispatch(botStep());
        }
        if(parsedBody.stepOrderLogin){
            store.dispatch(stepOrder(parsedBody.stepOrderLogin));
        }
    }
}

export const onmessageBot = (message: any) => {
    console.log("onmessageBot",message.body)
    store.dispatch(doBotStep(message.body));
}