import { Endpoints } from "../enums";
import { removeToken, saveToken } from "../helpers";
import { SignInForm, SignUpForm, UserData } from "../types";
import { AuthApiResponse } from "../types/api.interfaces";
import apiClient from "./apiClient";
import { parseLoginDataToApi, parseRegisterDataToApi, parseUserInfoResponseFromApi } from "./parsers";


export const callLoginApi = async (loginData: SignInForm): Promise<UserData> => {
    removeToken()
    const { data } = await apiClient.post<AuthApiResponse>(Endpoints.AUTH_LOGIN, parseLoginDataToApi(loginData));
    saveToken(data.access_token);
    return parseUserInfoResponseFromApi(data);
};

export const callRegisterApi = async (loginData: SignUpForm): Promise<UserData> => {
    removeToken()
    const { data } = await apiClient.post<AuthApiResponse>(Endpoints.AUTH_REGISTER, parseRegisterDataToApi(loginData));
    saveToken(data.access_token);
    return parseUserInfoResponseFromApi(data);
};

