import { Link, useLocation } from "react-router-dom";
import doctorImg from "../images/doctor.jpg";
const Card = ({ name, username, id, setFavs, favs }) => {
    const { pathname } = useLocation();
    const addFav = () => {
        if (!favs.some((fav) => fav.id === id)) {
            const fav = {
                name,
                username,
                id,
            };
            const arr = [...favs, fav];
            setFavs(arr);
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
                {pathname !== "/favs" && (
                    <button onClick={addFav} className="favButton">
                        Add fav
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;
