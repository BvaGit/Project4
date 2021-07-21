export type TPayloadRegistrAuth = {
    login: string;
    password: string;
    confirmPassword?: string;
}

export type TRegistrAuth = {
    fields: TPayloadRegistrAuth;
    errors: TPayloadRegistrAuth;
    isSuccess: boolean
}

export type TAction = {
    type: String;
    payload?: TPayloadRegistrAuth;
}

export type TRoom = {
    creatorLogin: string;
    gameType: string;
    id: string;
}


export type TRoomsState = {
    rooms: TRoom[] | [];
    connectWS: boolean;
    step: string;
    time: string;
    id: string,
    gameType: string;
    createGame: boolean;
}

export type TActionRooms = {
    type: String;
    payload: string;
}