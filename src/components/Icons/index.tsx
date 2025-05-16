import {
    // Gauge,
    // User,
    // NotebookTabs,
    // ShoppingCart,
    // Scale3d,
    // UserCog,
    ArrowRight,
} from "lucide-react"

type Props = {
    name: string
    size?: number
    onClick?: any
    color?: string
}

export default function Icons({ name, size, onClick, ...rest }: Props) {
    function renderIcon(name: string) {
        switch (name) {
            // case "Gauge": return <Gauge size={size ?? 20} strokeWidth={1.5} {...rest} />
            // case "User": return <User size={size ?? 20} strokeWidth={1.5} {...rest} />
            // case "NotebookTabs": return <NotebookTabs size={size ?? 20} strokeWidth={1.5} {...rest} />
            // case "ShoppingCart": return <ShoppingCart size={size ?? 20} strokeWidth={1.5} {...rest} />
            // case "Scale3d": return <Scale3d size={size ?? 20} strokeWidth={1.5} {...rest} />
            // case "UserCog": return <UserCog size={size ?? 20} strokeWidth={1.5} {...rest} />
            case "ArrowRight": return <ArrowRight size={size ?? 16} strokeWidth={2} {...rest} />
        }
    }

    return <span onClick={onClick ? onClick : () => { }}>{renderIcon(name)}</span>
}
