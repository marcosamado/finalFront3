import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Contact from "./Contact";
import Favs from "./Favs";
import Layout from "../Components/Layout";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="dentist/:id" element={<Detail />} />
                <Route path="contacto" element={<Contact />} />
                <Route path="favs" element={<Favs />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default AppRouter;
