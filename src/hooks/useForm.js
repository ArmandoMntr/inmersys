import { useState } from "react";

export const useForm = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm);
    // name: "description"
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    // cleaning the input
    const onResetForm = () => {
        setFormState(initialForm);
    };

    return { ...formState, formState, onInputChange, onResetForm };
};
