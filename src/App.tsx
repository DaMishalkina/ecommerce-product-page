import {HashRouter, Route, Routes} from "react-router-dom";

import {Layout} from "./components/Layout/Layout";
import {ROUTES} from "./components/Navigation/constants/constants";

import {RouteItem} from "./components/Navigation/types/types";

import "./App.css"




function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        {ROUTES.map((route: RouteItem) => (
                            route.subRoutes ? route.subRoutes.map((item: RouteItem) => (
                                    <Route
                                        key={`${item.key}`}
                                        path={`${item.path}`}
                                        Component={item.component}
                                    />
                                )) :
                                <Route
                                    key={`${route.key}`}
                                    path={`${route.path}`}
                                    Component={route.component}
                                />
                        ))}
                    </Route>
                </Routes>
            </HashRouter>
        </>
    )
}

export default App
