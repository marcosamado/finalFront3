//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context";

const Favs = () => {
    const { state } = useContext(ContextGlobal);

    return (
        <div>
            <main className="">
                <h1>Favs</h1>
                <div className="card-grid">
                    {state.favs.map((item) => (
                        <Card key={item.id} {...item} disableAddButton />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Favs;
