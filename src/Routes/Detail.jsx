import React, { useContext, useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { ContextGlobal } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const [loading, setLoading] = useState(true);
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const { getUserById, handleDenstist, state } = useContext(ContextGlobal);

    const { id } = useParams();

    useEffect(() => {
        getUserById(id).then((datos) => {
            handleDenstist(datos);
            setLoading(false);
        });
    }, []);
    console.log(state);
    return (
        <div>
            <h1>Detail Dentist id </h1>
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

            {!loading && (
                <div>
                    <p>{state.denstist.name}</p>
                    <p>{state.denstist.email}</p>
                    <p>{state.denstist.phone}</p>
                    <p>{state.denstist.website}</p>
                </div>
            )}
        </div>
    );
};

export default Detail;
