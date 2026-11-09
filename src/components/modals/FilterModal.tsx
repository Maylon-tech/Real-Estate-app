"use client";

import { useFilterModalStore } from "@/store/useFilterModalStore"
import Modal from "./Modal"


const FilterModal = () => {
    const { close, isOpen } = useFilterModalStore()


  return (
    <Modal 
        title="Filter Properties" 
        onClose={close} 
        isOpen={isOpen}
    >
      <p>Filter Modals</p>
    </Modal>
  )
}

export default FilterModal
