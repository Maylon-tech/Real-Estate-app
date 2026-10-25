"use client"

import { useCreatePropertyModalStore } from "@/store/useCreatePropertyStore"
import Modal from "./Modal"
import { useState } from "react"
import Button from "../ui/Button"

const STEPS = {
  TYPE: 0,
  LOCATION: 1,
  DETAILS: 2,
  FEATURES: 3,
  IMAGE: 4,
  PRICING: 5,
}

const CreatePropertyModal = () => {
  const [steps, setSteps] = useState(0)
  const { isOpen, close } = useCreatePropertyModalStore()
  const [loading, setLoading] = useState(false)
 
  const stepTitle = () => {
    switch (steps) {
      case STEPS.TYPE:
        return "Select property type";
      case STEPS.LOCATION:
        return "Where is the property l0cated";
        case STEPS.DETAILS:
        return "Share some basics about your place";
        case STEPS.FEATURES:
        return "Property description";
        case STEPS.IMAGE:
        return "Upload property image";
        case STEPS.PRICING:
        return "Set Property price";
      
        default:
          return ""
    }
  }

  const createListing = async() => {

  }
 
  return (
    <Modal 
      onClose={close}
      isOpen={isOpen}
      title="Create a new listing"
    >
      <div className="mb-6 flex items-center justify-between text-sm text-gray-500">
        <span>Step {steps + 1} of 6</span>
        <span className="font-medium text-gray-700">{stepTitle()}</span>
      </div>

      <div className="min-h-55 rounded-xl text-gray-400 p-6 border border-dashed border-gray-300">
        {
          steps === STEPS.TYPE && (
            <div className=""></div>
          )
        }
      </div>

      <div className="mt-8 flex gap-3">
        {
          steps > STEPS.TYPE && (
            <Button variant="outline" fullWidth onClick={() => setSteps((prev) => prev - 1)}>
              Back
            </Button>
          )
        }

        <Button 
          fullWidth
          onClick={() => 
            steps < STEPS.PRICING 
            ? setSteps((prev) => prev + 1)
            : createListing()}
          loading={loading}
        >
          { steps === STEPS.PRICING ? "Create listing" : "Next"}
        </Button>
      </div>
    </Modal>
  )

}

export default CreatePropertyModal
