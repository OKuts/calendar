import {IUser} from "../../../models/IUser";
import {AuthActionsEnum, TAuthAction} from "./types";
import {AppDispatch} from "../../index";
import axios from "axios";

export const authAC = {

    setUser: (user: IUser): TAuthAction => ({
        type: AuthActionsEnum.SET_USER,
        payload: user,
    }),

    setIsAuth: (isAuth: boolean): TAuthAction => ({
        type: AuthActionsEnum.SET_AUTH,
        payload: isAuth,
    }),

    setIsLoading: (isLoading: boolean): TAuthAction => ({
        type: AuthActionsEnum.SET_IS_LOADING,
        payload: isLoading,
    }),

    setError: (message: string): TAuthAction => ({
        type: AuthActionsEnum.SET_ERROR,
        payload: message,
    }),

    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(authAC.setIsLoading(true));
            setTimeout(async () => {
                const response = await axios.get<IUser[]>('./users.json');
                const currentUser = response.data.find((user: IUser) => user.username === username && user.password === password);
                if (currentUser) {
                    localStorage.setItem('username', currentUser.username);
                    dispatch(authAC.setUser(currentUser));
                    dispatch(authAC.setIsAuth(true));
                    console.log('Success')
                } else {
                    dispatch(authAC.setError('Error login or password'));
                }
            }, 2000)
            dispatch(authAC.setIsLoading(true));
        } catch (e) {
            dispatch(authAC.setError('Error login'));
        }
    }

}