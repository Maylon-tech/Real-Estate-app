
"use client"
import { useState } from 'react'
import { useAuthModal } from "@/store/useAuthModalStore"
import Modal from "./Modal"

interface LoginValue {
    email: string,
    password: string
}

type LoginErrors = Partial<Record<keyof LoginValue, string>>

const LoginModal = () => {
    const [values, setValues] = useState<LoginValue>({
        email: "",
        password: ""
    })
    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState<LoginErrors>({})
    const { openRegister, isLoginOpen, closeLogin } = useAuthModal()

    const handleChange =(e:React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        setValues((prev) => ({
            ...prev,
            [name]:value
        }))

        setErrors((prev) => ({
            ...prev,
            [name]:undefined
        }))
    }

    const validate = () => {
        const newErrors: LoginErrors = {}
    }

    // validate the email
    if(!values.email.trim()) {
        newErrors.email = "Email is required.!"
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        newErrors.email = "Enter a valid email address."
    }

    // validate the password field
    if(!values.password.trim()) {
        newErrors.password = "password is required.!"
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        newErrors.password = "Enter a valid email address."
    }
    

  return (
    <Modal 
        title="Login"
        onClose={closeLogin}
        isOpen={isLoginOpen}
    >
      Login to account 
    </Modal>
  )
}

export default LoginModal
