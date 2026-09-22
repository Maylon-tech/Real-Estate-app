import { properties } from "@/constants/Properties"
import PropertyCard from "../properties/PropertyCard"


const RecentProperties = () => {
  return (
    <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
            {/* header */}
            <div className="max-w-2xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                      New listing
                  </p>
                  <h2 className="text-3xl font-bold text-text md:text-4xl">
                      Discover Recently Added Properties
                  </h2>
                  <p className="mt-5 text-md leading-relaxed text-text/60">
                      Check out our latest listings and find your perfect match.
                  </p>
            </div>
            
            {/* properties grid*/}
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 my-6">    
                {
                    properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                        />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default RecentProperties
