import { useState } from 'react';

export const useForm = <T,>(initialValues: T) => {
    const [values, setValues] = useState<T>(initialValues);

    const handleChange = <K extends keyof T>(name: K, value: T[K]) => {
        setValues({
            ...values,
            [name]: value,
        });
    };

    const reset = () => {
        setValues(initialValues);
    };
    return {
        values,
        handleChange,
        reset,
    };
};
