import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { AuthStore, UserData } from '../../types';

export const useAuthStore = create<AuthStore>()(
    devtools(
        (set) => ({
            userData: undefined,

            setUserData: (userData: UserData) => {
                set({ userData });
            },
            deleteUserData: () => set({ userData: undefined }),
        }),
        { name: 'AuthStore' }
    )
);
