import {Link} from "react-router-dom";
import {ReactElement, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import classNames from "classnames";

import {CancelIcon} from "../svgs/CancelIcon";
import {CartComponent} from "../../features/Cart/CartComponent";
import {NavigationList} from "../Navigation/NavigationList";
import {useOutsideClick} from "../../hooks/useOutsideClick";

import {NavType} from "../Navigation/types/types";

import {ReactComponent as Logo} from "../../../public/images/logo.svg";
import AvatarImage from "../../../public/images/image-avatar.png";

import "./Header.scss";

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
    const {pathname} = useLocation();
    const navigationContainerRef = useOutsideClick(() => {
        setIsNavigationOpened(false);
    })
    useEffect(() => {

        setIsNavigationOpened(false);
    }, [pathname])
    return (
        <header className="header">
            <div className="header__item">
               <Link className="header__label" to="/">
                   <Logo title={`${label} Logo Icon`} />
               </Link>
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
                            className={classNames("header-navigation__wrapper header__navigation",
                            isNavigationOpened && "opened")}>
                            <div
                                ref={navigationContainerRef}
                                className="header-navigation__container"
                            >
                                <button
                                    className="header-navigation__button"
                                    onClick={() => setIsNavigationOpened(false)}
                                >
                                    <CancelIcon
                                        className="header-navigation__icon"
                                    />
                                </button>
                                <NavigationList navMenu={navMenu} />
                            </div>
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
                    <button className="avatar header__avatar">
                        <img
                            className="avatar__image"
                            src={AvatarImage}
                            alt="Avatar Image"
                        />
                        <span className="visually-hidden-title avatar__hidden-title">
                            Me
                        </span>
                    </button>
                )}
            </section>
        </header>
    )
}