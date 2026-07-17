import { Property } from "@/types/property"
import Image from "next/image"
import Link from "next/link"

interface PropertyCardProps { 
    property: Property
}


const PropertyCard = ({ property }:PropertyCardProps) => {
  return (
    <Link
        href={`/property/${property.id}`}
        className="group relative h-125 overflow-hidden rounded-4xl"
    >
      <div className="w-full h-full relative">
        <Image 
            src={property.image} 
            alt={property.title}
            className="inset-0 object-cover transition duration-700 group-hover:scale-110"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/20 to-transparent" />

        {/* Top Badge */}
        <div className="absolute left-5 top-5 z-20 rounded-full bg-white-/80 px-4 py-2 text-sm font-semibold text-primary">
            {
               property.status === 'rent' ? "For Rent" : "For Sale" 
            }
        </div>
        
        {/* Content Card */}
        <div className="absolute bottom-5 left-5 right-5 z-20 rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-2xl">
            <div className="">
                <div>
                    {
                        property.status === "rent" ? (
                            <h3 className="text-3xl font-bold text-white flex ">
                                { 
                                    property.price.toLocaleString()
                                }
                                <span className="text-sm text-white">
                                    /Month
                                </span>
                            </h3>
                              ) : (
                                    <h3 className="text-3xl font-bold text-white">
                                { 
                                    property.price.toLocaleString()
                                }
                                
                            </h3>
                        )
                    }
                    <p>{ property.location }</p>
                </div>
            </div>
        </div>
      </div>
    </Link>
  )
}

export default PropertyCard
