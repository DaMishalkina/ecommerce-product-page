import "./CartComponent.scss";
import {CartButton} from "./CartButton/CartButton";
import * as classNames from "classnames";
import {ReactElement, useState} from "react";
import {useOutsideClick} from "../../hooks/useOutsideClick";

interface Props {
    cartClassName?: string,
    cartItemsNumber?: number,
    cartDropdown?: ReactElement
}

export const CartComponent = ({
                                  cartClassName = "",
                                  cartItemsNumber = 0,
                                  cartDropdown}: Props) => {
    const [isCartOpened, setIsCartOpened] = useState(false);
    const toggleCart = () => {
        setIsCartOpened((prevState) => !prevState);

    }
    const cartRef = useOutsideClick(() => {
        setIsCartOpened(false);
    });
    return (
        <section ref={cartRef} className={classNames(cartClassName, "cart-section")}>
            <CartButton
                onClick={toggleCart}
                isCartEmpty={cartItemsNumber == 0}
                cartItemsNumber={cartItemsNumber}
            />
            {isCartOpened && typeof cartDropdown !== "undefined" &&
                cartDropdown
            }
        </section>
    )

}