import React from "react";
import Form from "../Components/Form";
import Layout from "../Components/Layout";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
    return (
        <Layout>
            <div>
                <h2>Want to know more?</h2>
                <p>Send us your questions and we will contact you</p>
                <Form />
            </div>
        </Layout>
    );
};

export default Contact;
