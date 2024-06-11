import { BrowserRouter, Route, Routes } from "react-router-dom"
import { privateRoutes, publicRoutes } from "../utils/routes";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function AppRouter(){
    const {authed} = useContext(AppContext)

    return (
        <BrowserRouter  className="App">
            <Routes>
                {(authed? privateRoutes : publicRoutes ).map(item => (
                    <Route key={item.path} path={item.path} element={item.component} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;