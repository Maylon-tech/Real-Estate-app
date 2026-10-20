"use client"

import { useState } from "react"
import { useAuthModal } from "@/store/useAuthModalStore"
import Modal from "./Modal"

interface RegisterValue {
  name: string,
  email: string,
  password: string
}

type RegisterErrors = Partial<Record<keyof RegisterValue, string>>

const RegisterModal = () => {
  const { openLogin, isRegisterOpen, closeRegister } = useAuthModal()
  const [values, setValues] = useState<RegisterValue>({
    name: "",
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<RegisterErrors>({})

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
        const newErrors: RegisterErrors = {}
    
        // validate the name field
        if(!values.name.trim()) {
            errors.name = "Name is required.!"
        } else if (values.name.length < 2) {
            errors.name = "Name must be at least 2 characters!."
        }

        // validate the email field
        if(!values.email.trim()) {
            errors.email = "Email is required.!"
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.email = "Enter a valid email address."
        }

        // validate the password field
        if(!values.password.trim()) {
            errors.password = "Password is required.!"
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            errors.password = "Password must be at least 6 characters!."
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

  return (
    <Modal 
        title="Register"
        onClose={closeRegister}
        isOpen={isRegisterOpen}
    >
      <div className="mb-6 space-y-1">
            <h2 className="text-2xl font-semibold text-gray-900">Welcome to NextState</h2>
            <p className="text-sm text-gray-500">
                Registger now
            </p>
        </div>
    </Modal>
  )
}

export default RegisterModal
