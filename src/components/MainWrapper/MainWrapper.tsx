import {ReactNode} from "react";
import * as classNames from "classnames";

import "./MainWrapper.scss";

interface Props {
    header: string,
    children?: ReactNode,
    className?: string
}

export const MainWrapper = ({header, children, className}: Props) => {
    return (
        <main className={classNames(className, "page__wrapper")}>
            <header className="page__header">{header}</header>
            {children}
        </main>
    )
}