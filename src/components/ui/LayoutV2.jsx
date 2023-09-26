import Footer from "./Footer"
import Navbar from "./Navbar"
export const LayoutV2 = ({ children }) => {
    return <section>
       <Navbar/>
        <section className=" relative hero  text-black bg-light  min-h-screen flex flex-col px-0 gap-3 ">
            {children}
        </section>
         <Footer/>
    </section>
}

export default LayoutV2
