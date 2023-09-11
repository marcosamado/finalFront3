import React from "react";
import { Link } from "react-router-dom";
import doctorImg from "../images/doctor.jpg";
const Card = ({ name, username, id }) => {
    const addFav = () => {
        // Aqui iria la logica para agregar la Card en el localStorage
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
