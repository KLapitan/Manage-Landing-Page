import Input from "./input";
import Button from "./button";

const Footer = () => {
const footerLinks =
[ "Home",
  "Careers",
  "Pricing",
  "Community",
  "Products",
  "Privacy Policy",
  "About Us",]

const manageSocialMedia = [
{ name:"facebook" , logo:"./images/icon-facebook.svg" , url: "https://www.facebook.com" },
{ name:"www.youtube.com" ,logo:"./images/icon-youtube.svg",url: "https://youtube.com" },
{ name:"twitter/x", logo:'./images/icon-twitter.svg', url: "https://www.twitter.com" },
{ name:"pinterest", logo:'./images/icon-pinterest.svg', url: "https://www.pinterest.com" },
{ name:"instagram", logo:"./images/icon-instagram.svg", url: "https://www.instagram.com" }
]

return(
<footer className="h-auto w-full  bg-N-Gray950 font-Be-Vietnam-Pro flex items-center justify-center">
  <section className="h-auto md:h-50 w-full max-w-7xl flex flex-col items-center justify-center gap-4 md:flex-row-reverse md:gap-10 md:justify-between p-7 md:p-2">

      {/* largeview inputand copyright */}
      <div className="flex flex-col gap-8 border border-P-Orange400 items-end ">
      <div className="flex flex-row  items-center justify-center w-auto  gap-1 h-auto p-2  border border-white md:items-start">
      <Input className={`border bg-N-Graye50 py-1 pl-3 px-2 rounded-full w-auto placeholder:text-xs placeholder:text-left md:w-40 lg:w-xs`}/>

      <Button className={`bg-P-Orange400 py-1 px-6 rounded-full`}>Go</Button>
      </div>
         <span className="hidden md:inline-block text-gray-500 text-xs w-fit tracking-tighter text-rig">Copyright 2020. All Rights Reserved</span>

      </div>
      <ul className="max-w-full w-fit  grid grid-cols-2 p-2 h-auto gap-3  gap-x-11 lg:gap-x-30">
      {footerLinks.map((link,index) => (
      <li key={index} className="text-white text-xs font-normal hover:underline hover:underline-offset-5 cursor-pointer md:tracking-normal md:text-sm"><a href="/" target="_blank">{link}</a></li>
      ))}
      </ul>

      <div className=" flex flex-col gap-9 items-center border border-green-950 w-full md:flex-col-reverse md:w-30">
      <ul className=" w-fit flex flex-row gap-7 md:gap-4 ">
      {manageSocialMedia.map((item) => (
      <li key={item.name} className="shrink-0">
      
      <a href={item.url}><img src={item.logo} className="w-6 h-6"/></a>
      </li>
      ))}
      </ul>


      <picture>
        <img src="./images/logo-white.svg" alt="managelogo" className="w-full h-5" />
      </picture>


      <span className="text-gray-500 text-xs w-fit tracking-tighter sm:hidden">Copyright 2020. All Rights Reserved</span>
        </div>


  </section>
</footer>
)
}
export default Footer;