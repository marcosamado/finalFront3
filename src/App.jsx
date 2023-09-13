import { useContext } from "react";
import AppRouter from "./Routes/AppRouter";
import { ContextGlobal } from "./Components/utils/global.context";

function App() {
    const { state } = useContext(ContextGlobal);
    return (
        <div className={state.theme ? "dark" : null}>
            <AppRouter />;
        </div>
    );
}

export default App;
