import {ReactNode, FunctionComponent} from "react"
import { Header } from "../Header/Header";
import {Outlet} from "react-router-dom";
import layoutContent from "../../data/layoutContent.json";

interface Props {
    children?: ReactNode,
    pageClassName?: string
}


export const Layout:FunctionComponent<Props> = ({children, pageClassName = ""}) => {
    return (
        <div className={pageClassName}>
            <Header
                label={layoutContent?.shopName}
                navMenu={layoutContent?.navs}
                isLogged={true}
            />
            <main>
                {children}
            </main>
            <Outlet/>
        </div>
    )
}