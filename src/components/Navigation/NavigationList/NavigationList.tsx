import {NavigationItem} from "../NavigationItem/NavigationItem";
import {NavType} from "../types/types";

interface Props {
    navMenu: NavType;
}

export  const NavigationList = ({navMenu}: Props) => {
    return (
        <nav>
            <ul>
                {navMenu?.map((item, index) => (
                    <NavigationItem item={item} key={index} />
                ))}
            </ul>
        </nav>
    )
}