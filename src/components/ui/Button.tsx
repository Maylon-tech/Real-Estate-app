import { ButtonHTMLAttributes, ReactNode } from "react"


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant: "primary" | "outline",
    icon?: ReactNode,
    iconPosition?: "left" | "right",
    fullWidth?: boolean,
    loading?: boolean
}


const Button = ({
    variant = "primary",
    children,
    icon,
    iconPosition = "left",
    fullWidth = false,
    loading = false,
    disabled,
    className,
    ...props
}:ButtonProps) => {
  return (
    <button 
        disabled={loading || disabled}
        className={``}
    >
      BUTTON
    </button>
  )
}

export default Button
