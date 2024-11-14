// import { enqueueSnackbar } from 'notistack';

import { callLoginApi, callRegisterApi } from '../api/auth.api';
import { removeToken, removeUserData, saveUserData } from '../helpers';
import { useAuthStore } from '../stores/auth/auth.store';
import { SignInForm, SignUpForm } from '../types';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
    const userData = useAuthStore((store) => store.userData);
    const setUserData = useAuthStore((store) => store.setUserData);
    const deleteUserData = useAuthStore((store) => store.deleteUserData);
    const navigate = useNavigate();

    const login = async (loginData: SignInForm) => {
        try {
            const userData = await callLoginApi(loginData);
            saveUserData(userData);
            setUserData(userData);
            navigate('/');

            // enqueueSnackbar(`Welcome back ${loginData.username}`, { variant: 'success' });
        } catch (error) {
            // enqueueSnackbar(`${error}`, { variant: 'error' });
            console.error(error);
        }
    };

    const register = async (registerData: SignUpForm) => {
        try {
            const userData = await callRegisterApi(registerData);
            saveUserData(userData);
            setUserData(userData);
            navigate('/');

            // enqueueSnackbar(`Welcome back ${loginData.username}`, { variant: 'success' });
        } catch (error) {
            // enqueueSnackbar(`${error}`, { variant: 'error' });
            console.error(error);
        }
    };

    const logout = () => {
        deleteUserData();
        removeUserData();
        removeToken();
    };

    return {
        userData,

        login,
        register,
        logout,
    };
};
