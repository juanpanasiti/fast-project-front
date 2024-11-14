import { UserData } from '../types';

export const saveUserData = (userData: UserData) => {
    localStorage.setItem('userData', JSON.stringify(userData));
};

export const getUserData = () => {
    const userData = localStorage.getItem('userData');
    if (userData) return JSON.parse(userData);
};

export const removeUserData = () => {
    localStorage.removeItem('userData');
};
