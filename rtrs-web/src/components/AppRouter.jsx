import { BrowserRouter, Route, Routes } from "react-router-dom"
import { publicRoutes } from "../utils/routes";

function AppRouter(){

    return (
        <BrowserRouter  className="App">
            <Routes>
                {publicRoutes.map(item => (
                    <Route key={item.path} path={item.path} element={item.component} />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;