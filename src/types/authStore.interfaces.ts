export interface AuthStore {
    // Properties
    userData?: UserData;

    // Computed Properties
    // isLoggedIn: boolean;

    // Methods
    setUserData: (userData: UserData) => void;
    deleteUserData: () => void;
}

export interface UserData {
    id: number;
    username: string;
    email: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}
