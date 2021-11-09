import {IUser} from "../../../models/IUser";

export interface IAuthState {
    isAuth: boolean;
    user: IUser;
    isLoading: boolean;
    error: string;

}

export enum AuthActionsEnum {
    SET_AUTH = 'SET_AUTH',
    SET_USER = 'SET_USER',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

interface  ISetAuthStatusAction {
    type: AuthActionsEnum.SET_AUTH;
    payload: boolean;
}

interface  ISetErrorAction {
    type: AuthActionsEnum.SET_ERROR;
    payload: string;
}

interface  ISetUserAction {
    type: AuthActionsEnum.SET_USER;
    payload: IUser;
}

interface  ISetIsLoadingAction {
    type: AuthActionsEnum.SET_IS_LOADING;
    payload: boolean;
}

export type TAuthAction =
    ISetAuthStatusAction |
    ISetIsLoadingAction |
    ISetErrorAction |
    ISetUserAction;