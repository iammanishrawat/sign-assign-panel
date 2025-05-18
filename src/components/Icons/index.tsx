import { ArrowRight, CircleArrowRight, Plus } from 'lucide-react'

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
    }
  }

  return <span onClick={onClick ? onClick : () => {}}>{renderIcon(name)}</span>
}
