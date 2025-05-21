import {
  ArrowRight,
  CircleArrowRight,
  Plus,
  MapPin,
  ReceiptText,
  Star,
  ArrowUpRight,
} from 'lucide-react'

type Props = {
  name: string
  size?: number
  onClick?: any
  color?: string
}

export default function Icons({ name, size, onClick, ...rest }: Props) {
  function renderIcon(name: string) {
    switch (name) {
      case 'ArrowRight':
        return <ArrowRight size={size ?? 16} strokeWidth={2} {...rest} />
      case 'CircleArrowRight':
        return <CircleArrowRight size={size ?? 16} strokeWidth={2} {...rest} />
      case 'Plus':
        return <Plus size={size ?? 20} strokeWidth={2} {...rest} />
      case 'MapPin':
        return <MapPin size={size ?? 20} strokeWidth={2} {...rest} />
      case 'ReceiptText':
        return <ReceiptText size={size ?? 20} strokeWidth={1.5} {...rest} />
      case 'Star':
        return <Star size={size ?? 20} strokeWidth={2} {...rest} />
      case 'ArrowUpRight':
        return <ArrowUpRight size={size ?? 20} strokeWidth={2} {...rest} />
    }
  }

  return <span onClick={onClick ? onClick : () => {}}>{renderIcon(name)}</span>
}
