import { createContext, useState, useContext } from 'react';

const InputContext = createContext();

export const useInputContext = () => useContext(InputContext);

export const InputProvider = ({ children }) => {
    const [inputs, setInputs] = useState({
        initialInvestment: '',
        annualInvestment: '',
        expectedReturn: '',
        duration: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputs(inputs => ({
            ...inputs,
            [name]: value
        }));
    };

    return (
        <InputContext.Provider value={{ inputs, handleInputChange }}>
            {children}
        </InputContext.Provider>
    );
};
