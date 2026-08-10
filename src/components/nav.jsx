import Button from "./button"
const Nav = () => {

const manageLinks =[" Pricing", 
  "Product",
  "About Us",
  "Careers",
  "Community"]



return (
<nav className="h-20 border border-amber-500 flex items-center w-full justify-center ">
  <section className="flex flex-row justify-between  border max-w-6xl w-full  ">
        <picture>
          <img src="/images/logo.svg" alt="logo" />
        </picture>

        <ul className="hidden sm:flex flex-row gap-5 w-auto border  ">
            {manageLinks.map((link,index) => (
            <li key={index}>
              {link}
            
            
            </li>
            
            ))}
        
        </ul>

        <Button className="border hidden sm:inline-block">Get Started</Button>
  </section>

</nav>
)

}
export default Nav