import {Link} from "react-router-dom";

import {NavItemType} from "../types/types";

import "./NavigationItem.scss"

interface Props {
   item: NavItemType
}

export const NavigationItem = ({item}: Props) => {
    return (
        <li className="navigation-item navigation-list__item">
            <Link
                className="navigation-item__link"
                to={item.toLowerCase().replace(/\s/g, "" )}>
                {item}
            </Link>
        </li>
    )

}