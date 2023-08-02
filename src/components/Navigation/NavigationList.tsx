import {NavigationItem} from "./NavigationItem/NavigationItem";

import {NavType} from "./types/types";

import "./NavigationList.scss"

interface Props {
    navMenu: NavType;
}

export  const NavigationList = ({navMenu}: Props) => {
    return (
        <nav className="navigation-container">
            <ul className="navigation-list navigation-container__list">
                {navMenu?.map((item, index) => (
                    <NavigationItem item={item} key={index} />
                ))}
            </ul>
        </nav>
    )
}