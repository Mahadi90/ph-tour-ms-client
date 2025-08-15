import type { ISideBarItems } from "@/types";

export const geneRateRoutes = (sideBarItems : ISideBarItems[]) => {
    return sideBarItems.flatMap(section => section.items.map(route => ({
        path : route.url,
        Component : route.component
    })))
}