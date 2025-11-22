import { Suspense } from "react"
import { Route, Routes, useLocation } from "react-router"
import { routerConfig } from "../config/routerConfig"


export const AppRouter = () => {
    const location = useLocation();
    
    return (
        <Suspense  key={location.pathname} fallback={<p>Loading...</p>}>
            <Routes>
                {
                    routerConfig.map(route => <Route key={route.path} path={route.path} element={(
                                <div className="page-wrapper">{route.element}</div>
                    )} />)
                }
            </Routes>
        </Suspense>
    )
}