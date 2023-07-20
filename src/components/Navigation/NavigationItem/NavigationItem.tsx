import {NavItemType} from "../types/types";

interface Props {
   item: NavItemType
}

export const NavigationItem = ({item}: Props) => {
    return (
        <li>
            {item}
        </li>
    )

}