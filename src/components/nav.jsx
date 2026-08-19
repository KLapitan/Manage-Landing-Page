import Button from "./button"
const Nav = () => {

const manageLinks =[" Pricing", 
  "Product",
  "About Us",
  "Careers",
  "Community"]



return (
<nav className="h-30 border border-amber-500 flex items-center w-full justify-center ">
  <section className="flex flex-row justify-between items-center  border max-w-6xl w-full  ">
        <picture>
          <img src="/images/logo.svg" alt="logo" />
        </picture>

        <ul className="hidden sm:flex flex-row gap-10 w-auto border  ">
            {manageLinks.map((link,index) => (
            <li key={index}>
              {link}
            
            
            </li>
            
            ))}
        
        </ul>

        <Button className=" hidden sm:inline-block bg-P-Orange400 shadow-md shadow-P-Orange400/75 rounded-full py-3  w-29 text-xs font-medium text-N-Graye50">Get Started</Button>
  </section>

</nav>
)

}
export default Nav