import { useState } from "react"
import Button from "./button"
import NavModal from "./navModal"
import { useEffect } from "react"
const Nav = () => {

const manageLinks =[" Pricing", 
  "Product",
  "About Us",
  "Careers",
  "Community"]

const [mobileNavOpen ,setMobileNavOpen]=useState(false)


const openModal = () => { setMobileNavOpen(prev => !prev)}



useEffect(() => {
  const handleEscapeMenuNav =(event) => {
    if(event.key === "Escape"){
      
      setMobileNavOpen(false)
    }


  }
      window.addEventListener('keydown' , handleEscapeMenuNav )



    return ()=> window.removeEventListener('keydown' ,handleEscapeMenuNav)
},[])


return (
<nav className="h-22 flex items-center w-full justify-center ">
  <section className="flex flex-row justify-between items-center   max-w-6xl w-full mx-auto px-4 md:px-6 ">
        <picture>
          <img src="/images/logo.svg" alt="logo"  className="shrink-0"/>
        </picture>

        <ul className="hidden sm:flex flex-row gap-3 md:gap-6 lg:gap-10 lg:mx-22 w-fit   ">
            {manageLinks.map((link,index) => (
            <li key={index} className="text-P-Blue950 text-xs md:text-sm lg:text-base font-medium hover:underline underline-offset-6 cursor-pointer ">
              {link}
            
            
            </li>
            
            ))}
        
        </ul>

      <div className="relative">
        <picture> 
          <img src={`${mobileNavOpen ? "/images/icon-close.svg" : "/images/icon-hamburger.svg"}`} alt={`${mobileNavOpen ?"close-icon":"hamburger-icon"}`} className="sm:hidden" onClick={openModal} />
        </picture>


       { mobileNavOpen  && <NavModal links={manageLinks}/>}
      </div>

        <Button className=" hidden sm:inline-block bg-P-Orange400 shadow-md shadow-P-Orange400/75 rounded-full py-3  w-29 text-xs font-medium text-N-Graye50">Get Started</Button>
  </section>

</nav>
)

}
export default Nav