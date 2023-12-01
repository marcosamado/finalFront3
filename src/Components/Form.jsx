import { useState } from "react";

const Form = () => {
    //Aqui deberan implementar el form completo con sus validaciones
    const [error, setError] = useState(false);
    const [succesMsg, setSuccesMsg] = useState(false);
    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
    });

    const { name, email } = dataForm;

    const handleChange = ({ target }) => {
        setError(false);
        const { name, value } = target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.length > 5 && regexEmail.test(email)) {
            setError(false);
            setSuccesMsg(true);
        } else {
            setError(true);
            setSuccesMsg(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre Completo</label>
                <input
                    type="text"
                    name="name"
                    value={dataForm.name}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={dataForm.email}
                    onChange={handleChange}
                />
                <button type="input">Enviar</button>
            </form>
            {succesMsg && (
                <p>
                    {`Gracias ${name}, te contactaremos cuanto antes via Email`}
                </p>
            )}
            {error && <p>Por favor verifica tu informacion nuevamente</p>}
        </div>
    );
};

export default Form;
