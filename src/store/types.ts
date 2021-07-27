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
    gameType: string;
    createGame: boolean;
    gameTypeRoom: string;
    idGame: string;
    step: string;
    stepOrder: string;
    stepG: string;
    login: string;
    field: any;
    bot: boolean;
    stepBot: string;
    winner: string;
}

export type TActionRooms = {
    type: String;
    payload: string;
}