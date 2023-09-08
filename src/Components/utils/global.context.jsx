import { createContext, useState } from "react";

export const initialState = { theme: "", data: [] };

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
    //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

    const [data, setData] = useState();
    const [user, setUser] = useState();

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
                data,
                setData,
                getUserById,
                user,
                setUser,
            }}
        >
            {children}
        </ContextGlobal.Provider>
    );
};
