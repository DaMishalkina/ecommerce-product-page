import "./Modal.scss";
import {ReactNode} from "react";
import {CancelIcon} from "../svgs/CancelIcon";
import {useOutsideClick} from "../../hooks/useOutsideClick";
import * as classNames from "classnames";

interface Props {
    handleClose: () => void,
    className?: string,
    children?: ReactNode
}

export const Modal = ({handleClose, children, className = ""}: Props) => {
    const modalRef = useOutsideClick(()=> {
        handleClose();
    })
    return (
        <section className={classNames("modal__wrapper", className)}>
            <div ref={modalRef} className="modal__container">
                <button className="modal__close-button" onClick={handleClose}>
                    <CancelIcon color="currentColor" />
                </button>
                {children}
            </div>
        </section>
    )
}