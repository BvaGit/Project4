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

export type TRoomsState = {
    rooms: string[];
    isRooms: boolean;
}

export type TActionRooms = {
    type: String;
    payload: string[];
}