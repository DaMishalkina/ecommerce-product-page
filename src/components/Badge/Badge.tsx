import {ReactNode} from "react";

import "./Badge.scss";


interface Props {
    children: ReactNode
}

export const Badge = ({children}: Props) => {
    return (
        <span className="badge">{children}</span>
    )
}