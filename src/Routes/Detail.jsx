import React, { useContext, useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { ContextGlobal } from "../Components/utils/global.context";
import { useParams } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
    const [loading, setLoading] = useState(true);
    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
    const { getUserById, user, setUser } = useContext(ContextGlobal);

    const { id } = useParams();

    useEffect(() => {
        getUserById(id).then((datos) => {
            setUser(datos);
            setLoading(false);
        });
    }, []);
    console.log(user);
    return (
        <Layout>
            <h1>Detail Dentist id </h1>
            {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
            {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}

            {!loading && (
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                </div>
            )}
        </Layout>
    );
};

export default Detail;
