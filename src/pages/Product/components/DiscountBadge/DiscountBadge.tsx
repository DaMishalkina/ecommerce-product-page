import "./DiscountBadge.scss";

interface Props {
    discount: string
}

export const DiscountBadge = ({discount}: Props) => {
    return (
        <span className="badge">{discount}</span>
    )
}