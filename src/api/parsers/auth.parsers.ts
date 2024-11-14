import { SignInForm, SignUpForm, UserData } from "../../types";
import { AuthApiResponse } from "../../types/api.interfaces";


export const parseLoginDataToApi = (loginData: SignInForm): FormData => {
    const formData = new FormData();
    formData.append('username', loginData.username);
    formData.append('password', loginData.password);
    return formData;
};

export const parseRegisterDataToApi = (registerData: SignUpForm): SignUpForm => {
    return {
        email: registerData.email,
        username: registerData.username,
        password: registerData.password,
    }
};

export const parseUserInfoResponseFromApi = (userInfoResponse: AuthApiResponse): UserData => {
    return {
        id: userInfoResponse.user.id,
        username: userInfoResponse.user.username,
        email: userInfoResponse.user.email,
        role: userInfoResponse.user.role,
        createdAt: userInfoResponse.user.created_at,
        updatedAt: userInfoResponse.user.updated_at,
    };
};