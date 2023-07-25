import {useState, ReactElement} from "react";
import {NavType} from "../Navigation/types/types";
import {NavigationList} from "../Navigation/NavigationList/NavigationList";
import AvatarImage from "../../assets/images/image-avatar.png";
import {CartComponent} from "../Cart/CartComponent/CartComponent";
import {CancelIcon} from "../svgs/CancelIcon";
import "./Header.scss";
import * as classNames from "classnames";

interface Props {
    label: string,
    navMenu?: NavType,
    isLogged?: boolean,
    cartItemsNumber?: number,
    cartDropdown?: ReactElement
}

export const Header = ({
                           label,
                           navMenu,
                           isLogged = false,
                           cartItemsNumber = 0,
                           cartDropdown}: Props) => {
    const [isNavigationOpened, setIsNavigationOpened] = useState(false);
    return (
        <header className="header">
            <div className="header__item">
                <strong className="header__label">{label}</strong>
                {typeof navMenu !== "undefined" && (
                    <>
                        <label
                            aria-label="Collapse or expand the menu"
                            className="hamburger-button header__button"
                        >
                            <input
                                aria-haspopup="true"
                                aria-expanded={isNavigationOpened}
                                className="hamburger-button__input"
                                type="checkbox"
                                onChange={() => setIsNavigationOpened(true)}
                            />
                            <span aria-hidden="true" className="hamburger-button__span"></span>
                            <span aria-hidden="true" className="hamburger-button__span"></span>
                            <span aria-hidden="true" className="hamburger-button__span"></span>
                        </label>
                        <section
                            className={classNames("header-navigation header__navigation",
                            isNavigationOpened && "header-navigation--opened")}>
                            <button
                                className="header-navigation__button"
                                onClick={() => setIsNavigationOpened(false)}
                            >
                                <CancelIcon
                                    className="header-navigation__icon"
                                    color="currentColor"
                                />
                            </button>
                            <NavigationList navMenu={navMenu} />
                        </section>
                    </>
                )}
            </div>
            <section className="header-user-container header__item">
                <CartComponent
                    cartDropdown={cartDropdown}
                    cartItemsNumber={cartItemsNumber}
                />
                {isLogged && (
                    <img
                        className="header__avatar-image"
                        src={AvatarImage}
                        alt="Avatar Image"
                    />
                )}
            </section>
        </header>
    )
}