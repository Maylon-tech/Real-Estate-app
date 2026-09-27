
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react"

interface BaseProps {
    label: string,
    name: string,
    error?: string,
    as?: "input" | "textarea",
    value: string,
    onchange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>
type TextareaProps = BaseProps & TextareaHTMLAttributes<HTMLTextAreaElement>

const Input = ({ 
    label, 
    name, 
    error, 
    id, 
    value, 
    as = "input",
    className,
    onchange,
    ...props 
}: InputProps | TextareaProps ) => {

    const hasValue = value !== "",

    const inputId = id ?? name

    const sharedClasses = clsx(
        
    )

  return (
    <div>
      Input
    </div>
  )
}

export default Input
