import { Link } from "react-router-dom";
import doctorImg from "../images/doctor.jpg";
import { useContext } from "react";
import { ContextGlobal } from "./utils/global.context";
const Card = ({ name, username, id }) => {
    const { state, handleFavs } = useContext(ContextGlobal);
    const addFav = () => {
        if (state.favs.some((fav) => fav.id === id)) {
            const newFavs = state.favs.filter((fav) => fav.id !== id);
            handleFavs(newFavs);
        } else {
            const fav = {
                name,
                username,
                id,
            };
            const arr = [...state.favs, fav];
            handleFavs(arr);
            console.log(arr);
        }
    };

    return (
        <div className="card-container">
            <div className="card">
                {/* En cada card deberan mostrar en name - username y el id */}

                <Link to={`/dentist/${id}`}>
                    <div className="divImgDoctor">
                        <img
                            className="imgDoctor"
                            src={doctorImg}
                            alt="imagen de un doctor"
                        />
                    </div>
                    <p>{name}</p>
                    <p>{username}</p>
                </Link>

                {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

                {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
                <button onClick={addFav} className="favButton">
                    Add fav
                </button>
            </div>
        </div>
    );
};

export default Card;
