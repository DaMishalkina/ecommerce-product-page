
interface Props {
    label: string
    link?: string,
}

export const NavigationItem = ({label}: Props) => {
    return (
        <li>
            {label}
        </li>
    )

}