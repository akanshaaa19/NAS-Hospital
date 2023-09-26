import Footer from "./Footer"
import Navbar from "./Navbar"
export const Layout = ({ children }) => {
    return <section>
        <Navbar/>
        <section className=" relative hero  text-black bg-light  min-h-screen flex flex-col px-20 gap-3 ">
            {children}
        </section>
         <Footer/>
    </section>
}
