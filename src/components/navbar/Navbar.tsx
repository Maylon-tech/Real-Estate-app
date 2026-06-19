import Link from "next/link"


interface NavbarProps {
    variant?: "transparent" | "solid"
}

const navLinks = [
    "Home",
    "Proprieties",
    "MarketPlace"
]


const Navbar = (
    { variant = "transparent" }: NavbarProps) => {
    
    const isTransparent = variant === "transparent"
    
  return (
      <section className={
          `absolute top-0 left-0 w-full z-50  
          ${isTransparent ? "absolute" : "sticky border-b border-black/5 bg-card"}`
      }>
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <nav className={`flex h-20 items-center justify-between ${isTransparent ? "mt-6 rounded-3xl border-white/10 bg-white/5 px-6 backdrop-blur-2xl" : "px-0"}`}>
            {/* LOGO */}
            <Link
                href="/"
                className="flex items-center text-2xl font-semibold"
            >
                <span className={isTransparent ? "text-gray-300" : "text-text"}>
                    Next
                </span>
                <span className="bg-primary text-white px-2 py-1 rounded-tr-2xl rounded-bl-2xl">
                    Estate
                </span>
            </Link>
            
            {/* DESKTOP LINKS */}
            <div className="hidden items-center gap-8 lg:flex">
                {
                    navLinks.map((item) => (
                        <Link
                            key={item}
                            href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                            className={`text-sm font-medium transition hover:text-primary ${isTransparent ? "text-white/80" : "text-text/70"}`}
                        >
                         {item}   
                        </Link>
                    ))
                }
            </div>
            
            {/* DESKTOP BUTTONS */}
            <div className="hidden items-center gap-4 lg:flex">
                <button className={`rounded-full px-4 py-2 text-sm font-medium transition hover:bg-primary/10 ${isTransparent ? "text-white/80" : "text-text/70"}`}>
                    Sign In
                </button>
                <button className={`rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/80 ${isTransparent ? "text-white/80" : "text-text/70"}`}>
                    Sign Up
                </button>
            </div>
        </nav>
      </div>
    </section>
  )
}

export default Navbar
