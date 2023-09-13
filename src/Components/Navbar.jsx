import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
    const { handleTheme } = useContext(ContextGlobal);

    return (
        <>
            <nav>
                <h2>DH Odonto</h2>
                <div className="ul-button ">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="contacto">Contact</Link>
                        </li>
                        <li>
                            <Link to="favs">Favs</Link>
                        </li>
                    </ul>
                    {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
                    <button onClick={handleTheme}>Change theme</button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
