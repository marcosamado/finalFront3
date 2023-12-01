import { createContext, useReducer, useState } from "react";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(false);
    const [user, setUser] = useState();
    function reducer(state, action) {
        switch (action.type) {
            case "setAllDestist":
                return {
                    ...state,
                    allDestist: action.payload,
                };
            case "setDentist":
                return {
                    ...state,
                    denstist: action.payload,
                };
            case "setTheme":
                return {
                    ...state,
                    theme: !state.theme,
                };

            default:
                return state;
        }
    }
    const initialValue = {
        allDestist: {},
        denstist: {},
        theme: false,
    };
    const [state, dispatch] = useReducer(reducer, initialValue);

    const handleSetUsers = (datos) => {
        dispatch({ type: "setAllDestist", payload: datos });
    };
    const handleDenstist = (datos) => {
        dispatch({ type: "setDentist", payload: datos });
    };
    const handleTheme = () => {
        dispatch({ type: "setTheme" });
    };

    const getUsuarios = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        return data;
    };

    const getUserById = async (id) => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await res.json();
        return data;
    };

    return (
        <ContextGlobal.Provider
            value={{
                getUsuarios,
                getUserById,
                user,
                setUser,
                handleSetUsers,
                state,
                handleDenstist,
                handleTheme,
            }}
        >
            {children}
        </ContextGlobal.Provider>
    );
};
