import {useState} from "react";
import {NavType} from "../Navigation/types/types";
import {NavigationList} from "../Navigation/NavigationList/NavigationList";
// import CartIcon from "../../assets/images/icon-cart.svg";
import AvatarImage from "../../assets/images/image-avatar.png";
// import CloseIcon from "../../assets/images/icon-close.svg";
import {CartIcon} from "../svgs/CartIcon";
import {CancelIcon} from "../svgs/CancelIcon";
import "./Header.scss";
import * as classNames from "classnames";

interface Props {
    label: string,
    navMenu?: NavType,
    isLogged?: boolean,
    cartItems?: number
}

export const Header = ({label, navMenu, isLogged = false, cartItems = 3}: Props) => {
    const [isCartOpened, setIsCartOpened] = useState(false);
    const [isNavigationOpened, setIsNavigationOpened] = useState(false);
    const toggleCart = () => {
        setIsCartOpened((prevState) => !prevState);
    }
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
                        <section className={classNames("header-navigation header__navigation",
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
                <button
                    className={classNames(
                        "header-cart header__button",
                        cartItems > 0 && "header-cart--full")}
                    onClick={toggleCart}
                >
                    <div className="header-cart__container">
                        <CartIcon
                            color="currentColor"
                            className="header-cart__icon"
                        />
                        <span className="header-cart__counter">{cartItems}</span>
                    </div>
                </button>
                {isCartOpened && (
                    "I'm opened"
                )}
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