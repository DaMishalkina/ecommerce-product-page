import {ReactNode, useEffect} from "react";
import classNames from "classnames";

import {CancelIcon} from "../svgs/CancelIcon";
import {useOutsideClick} from "../../hooks/useOutsideClick";

import "./Modal.scss";

interface Props {
    isOpened: boolean,
    setIsOpened: (value: boolean) => void,
    className?: string,
    children?: ReactNode
}

export const Modal = ({setIsOpened, children, className = "", isOpened}: Props) => {
    const handleClose = () => {
        setIsOpened(false);
        document.body.style.overflow = 'unset';
    }
    const modalRef = useOutsideClick(()=> {
        handleClose();
    })
    useEffect(() => {
        if(isOpened && typeof window != 'undefined' && window.document){
            document.body.style.overflow = 'hidden';
        }
    }, [isOpened])
    return (
        <div className={classNames("modal__wrapper", className)}>
            <div ref={modalRef} className="modal__container">
                <button
                    className="modal__close-button"
                    onClick={handleClose}
                >
                    <span className="visually-hidden-title">Close Modal Button</span>

                    <CancelIcon />
                </button>
                {children}
            </div>
        </div>
    )
}