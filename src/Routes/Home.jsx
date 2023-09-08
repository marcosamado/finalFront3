import React, { useContext, useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
    const [loading, setLoading] = useState(true);
    const { getUsuarios, handleSetUsers, state } = useContext(ContextGlobal);

    useEffect(() => {
        getUsuarios().then((datos) => {
            handleSetUsers(datos);
            setLoading(false);
        });
    }, []);

    return (
        <Layout>
            <main className="">
                <h1>Home</h1>
                <div className="card-grid">
                    {!loading &&
                        state.allDestist.map((item) => (
                            <Card key={item.id} {...item} />
                        ))}
                </div>
            </main>
        </Layout>
    );
};

export default Home;
