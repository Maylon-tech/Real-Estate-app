"use client"

import { useAuthModal } from "@/store/useAuthModalStore"
import Modal from "./Modal"



const RegisterModal = () => {
    const { openLogin, isRegisterOpen, closeRegister } = useAuthModal()


  return (
    <Modal 
        title="Register"
        onClose={closeRegister}
        isOpen={isRegisterOpen}
    >
      Register 
    </Modal>
  )
}

export default RegisterModal
