import { useEffect } from "react"


interface ModalProps {
    isOpen:boolean,
    onClose:() => void,
    title: string,
    children: React.ReactNode
}

const Modal = ({ isOpen, onClose, title,children }: ModalProps) => {


    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto"

        return () => {
            document.body.style.overflow = "auto"
        }

    }, [isOpen])

  return (
    <div 
        aria-hidden={isOpen} 
        className={`
            fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-500
            ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {/* backdrop */}
      <div className={`absolute inset-0 bg-black/30 transition-all duration-500`} />
    </div>
  )
}

export default Modal
