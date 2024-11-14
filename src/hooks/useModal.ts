import { useState } from 'react';

export const useModal = (initialState: boolean = false) => {
    const [open, setOpen] = useState(initialState);
    const handleOpen = (isOpen: boolean = !open) => {
        setOpen(isOpen);
    };
    return { open, handleOpen };
};
