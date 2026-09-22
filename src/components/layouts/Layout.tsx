import Footer from "../general/Footer"


const Layout = ({ children }: { children:React.ReactNode}) => {
  return (
    <>
      { children }
      <Footer />
    </>
  )
}

export default Layout
