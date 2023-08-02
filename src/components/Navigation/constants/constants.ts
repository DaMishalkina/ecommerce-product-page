import {About} from "../../../pages/About";
import {Collections} from "../../../pages/Collections";
import {Contact} from "../../../pages/Contact";
import {Home} from "../../../pages/Home";
import {Men} from "../../../pages/Men";
import {Product} from "../../../pages/Product";
import {Women} from "../../../pages/Women";

import {RouteItem} from "../types/types";

/*PAGES TITLE*/
export const PAGE_TITLE_ABOUT = "About";
export const PAGE_TITLE_COLLECTIONS = "Collections";
export const PAGE_TITLE_CONTACT = "Contact";
export const PAGE_TITLE_HOME = "Home";
export const PAGE_TITLE_MEN = "Men";
export const PAGE_TITLE_PRODUCT = "Product";
export const PAGE_TITLE_WOMEN = "Women";

export const ROUTES: Array<RouteItem> = [
    {
        key: "router-contact",
        title: PAGE_TITLE_CONTACT,
        tooltip: PAGE_TITLE_CONTACT,
        path: "/contact",
        enabled: true,
        component: Contact,
        appendDivider: true,
        type: "guest"
    },
    {
        key: "router-about",
        title: PAGE_TITLE_ABOUT,
        tooltip: PAGE_TITLE_ABOUT,
        path: "/about",
        enabled: true,
        component: About,
        appendDivider: true,
        type: "guest"
    },
    {
        key: "router-collections",
        title: PAGE_TITLE_COLLECTIONS,
        tooltip: PAGE_TITLE_COLLECTIONS,
        path: "/collections",
        enabled: true,
        component: Collections,
        appendDivider: true,
        type: "guest"
    },
    {
        key: "router-women",
        title: PAGE_TITLE_WOMEN,
        tooltip: PAGE_TITLE_WOMEN,
        path: "/women",
        enabled: true,
        component: Women,
        appendDivider: true,
        type: "guest",
    },
    {
        key: "router-product",
        title: PAGE_TITLE_PRODUCT,
        tooltip: PAGE_TITLE_PRODUCT,
        path: "/women/:id",
        enabled: true,
        component: Product,
        appendDivider: true,
        type: "guest"
    },
    {
        key: "router-men",
        title: PAGE_TITLE_MEN,
        tooltip: PAGE_TITLE_MEN,
        path: "/men",
        enabled: true,
        component: Men,
        appendDivider: true,
        type: "guest"
    },
    {
        key: "router-product",
        title: PAGE_TITLE_PRODUCT,
        tooltip: PAGE_TITLE_PRODUCT,
        path: "men/:id",
        enabled: true,
        component: Product,
        appendDivider: true,
        type: "guest"
    },
    {
        key: "router-home",
        title: PAGE_TITLE_HOME,
        tooltip: PAGE_TITLE_HOME,
        path: "/",
        enabled: true,
        component: Home,
        appendDivider: true,
        type: "guest"
    }
]