
import { NotFoundPage } from "@/pages/NotFoundPage"
import { OffersPage } from "@/pages/OffersPage"
import type { RouteProps } from "react-router"

export enum AppRoutes {
    OFFERS = 'offers',
    NOTFOUND = 'not_found'
}

export const RouterPath: Record<AppRoutes, string> = {
    [AppRoutes.OFFERS]: '/offers',
    [AppRoutes.NOTFOUND]: '*'
}

export const routerConfig: RouteProps[] = [
    {
        path: RouterPath.offers,
        element: <OffersPage />
    },
    {
        path: RouterPath.not_found,
        element: <NotFoundPage />
    }
]