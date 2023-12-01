import { createContext, useEffect, useReducer } from "react";

export const ContextGlobal = createContext(undefined);

const initialState = {
    allDestist: {},
    denstist: {},
    theme: false,
    favs: [],
};
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
        case "setFavs":
            return {
                ...state,
                favs: action.payload,
            };

        default:
            return state;
    }
}
export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSetUsers = (datos) => {
        dispatch({ type: "setAllDestist", payload: datos });
    };
    const handleDenstist = (datos) => {
        dispatch({ type: "setDentist", payload: datos });
    };
    const handleTheme = () => {
        dispatch({ type: "setTheme" });
    };

    const handleFavs = (datos) => {
        dispatch({ type: "setFavs", payload: datos });
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

    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(state.favs));
    }, [state.favs]);

    return (
        <ContextGlobal.Provider
            value={{
                getUsuarios,
                getUserById,
                handleSetUsers,
                state,
                handleDenstist,
                handleTheme,
                handleFavs,
            }}
        >
            {children}
        </ContextGlobal.Provider>
    );
};
