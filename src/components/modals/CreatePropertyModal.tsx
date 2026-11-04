"use client"

import { useCreatePropertyModalStore } from "@/store/useCreatePropertyStore"
import Modal from "./Modal"
import { useState } from "react"
import Button from "../ui/Button"
import Counter from "../properties/Counter"
import PropertyTypeCard from "../properties/PropertyTypeCard"
import { propertyTypes } from "@/constants/PropertyTypes"
import Input from "../ui/Input"

const STEPS = {
  TYPE: 0,
  LOCATION: 1,
  DETAILS: 2,
  FEATURES: 3,
  IMAGE: 4,
  PRICING: 5,
}

const CreatePropertyModal = () => {
  const [steps, setSteps] = useState(STEPS.TYPE)
  const { isOpen, close } = useCreatePropertyModalStore()
  const [loading, setLoading] = useState(false)

  const [propertyType, setPropertyType] = useState("")
  const [location, setLocation] = useState("")
  const [address, setAddress] = useState("")
  const [bedrooms, setBedrooms] = useState(1)
  const [bathrooms, setBathrooms] = useState(1)
  const [parkingSpaces, setParkingSpaces] = useState(0)
  const [area, setArea] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
 
  const stepTitle = () => {
    switch (steps) {
      case STEPS.TYPE:
        return "Select property type";
      case STEPS.LOCATION:
        return "Where is the property located";
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
            <div className="grid grid-cols-2 gap-4 w-full max-h-[50vh] overflow-y-scroll no-scrollbar">
              {
                propertyTypes.map((item) => (
                  <PropertyTypeCard 
                    label={item.label}
                    icon={item.icon}
                    selected={propertyType === item.slug}
                    onClick={() => setPropertyType(item.slug)}
                    key={item.slug}
                  />
                ))}
            </div>
          )}
          {
            steps === STEPS.LOCATION && (
              <div className="space-y-6 w-full">
                <Input 
                  name="location"
                  label="Location"
                  value={location}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
                />
                <Input 
                  name="address"
                  label="Adress"
                  value={address}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value)}
                />
              </div>
          )}

          {
            steps === STEPS.DETAILS && (
              <div className="space-y-4">
                <Counter 
                  title="Bedrooms"
                  subTitle="How many bedrooms "
                  value={bedrooms}
                  onChange={setBedrooms}
                />
                <Counter 
                  title="Bathrooms"
                  subTitle="How many bathrooms "
                  value={bathrooms}
                  onChange={setBathrooms}
                />
                <Counter 
                  title="Parking Spaces"
                  subTitle="How many parking spaces "
                  value={parkingSpaces}
                  onChange={setParkingSpaces}
                />

                <Input 
                  name="area"
                  label="Property Area (sqftare)"
                  value={area}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setArea(e.target.value)}
                />
              </div>
          )}

          {
            steps === STEPS.FEATURES && (
              <div className="space-y-6">
                <Input 
                  name="title"
                  label="Property Title"
                  value={title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                />
                <Input 
                  name="description"
                  label="Property Description"
                  value={description}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                />
              </div>
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
