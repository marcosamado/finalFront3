//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

import Card from "../Components/Card";

const Favs = () => {
    const favorites = JSON.parse(localStorage.getItem("favs"));

    return (
        <div>
            <main className="">
                <h1>Home</h1>
                <div className="card-grid">
                    {favorites.map((item) => (
                        <Card key={item.id} {...item} disableAddButton />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Favs;
