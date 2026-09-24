
import Layout from "@/components/layouts/Layout"
import Navbar from "@/components/navbar/Navbar"


const PropertyPage = () => {
  return (
    <Layout>
        <Navbar variant="solid" />

        <section className="py-15">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
                            For Sale
                        </p>

                        <h2 className="mt-3 text-4xl font-bold text-text md:text-5xl">
                            Modern Luxury Apartment
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default PropertyPage
