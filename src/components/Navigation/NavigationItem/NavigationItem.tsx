import {NavItemType} from "../types/types";
import "./NavigationItem.scss"

interface Props {
   item: NavItemType
}

export const NavigationItem = ({item}: Props) => {
    return (
        <li className="navigation-list__item">
            {item}
        </li>
    )

}