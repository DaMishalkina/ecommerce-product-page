import "./Badge.scss";

interface Props {
    discount: string
}

export const Badge = ({discount}: Props) => {
    return (
        <span className="badge">{discount}</span>
    )
}