import Button from "./button";
const CTA = () => {

return(
<section className="bg-P-Orange400 h-75 w-full max-w-full md:h-50 relative flex   items-center justify-center font-Be-Vietnam-Pro p-2 overflow-clip ">

{/* design on mid-large view */}
<div className="absolute inset-0 left-20 hidden md:block w-full md:bg-center md:bg-cover z-0"   style={{ backgroundImage: "url('./images/bg-simplify-section-desktop.svg')"}}/>

<picture>
  <img src="./images/bg-simplify-section-mobile.svg" alt="prefoorter image mobile" className="absolute md:hidden left-0 top-0 z-10" />

</picture>

<div className="relative flex flex-col sm:flex-row items-center  gap-2 sm:justify-between w-full  max-w-7xl  z-10 ">
  <h2 className="text-N-Graye50 text-center max-w-xl lg:w-lg w-55 sm:w-xs sm:text-left p-2 text-2xl md:text-4xl   font-semibold lg:font-medium  ">
  Simplify how your team works today.</h2>
 <Button className="bg-N-Graye50 shadow-md shadow-P-Orange400/75 rounded-full py-3   w-29 text-xs font-medium text-P-Orange400  hover:bg-P-Orange400 hover:text-N-Graye50 ">Get Started</Button>

</div>
</section>
)
}

export default CTA;