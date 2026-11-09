"use client"

import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import Button from '../ui/Button'
import { useFilterModalStore } from '@/store/useFilterModalStore'

const STEPS = {
  TYPE: 0,
  LOCATION: 1,
  PRICING: 2,
}

export default function FilterButton() {

    
    const { open } = useFilterModalStore()

  return (
    <div>
        <Button 
            onClick={open}
            variant="primary"
            icon={<HiOutlineAdjustmentsHorizontal size={20} />}
        >
            Filter
        </Button>
    </div>
  )
}
