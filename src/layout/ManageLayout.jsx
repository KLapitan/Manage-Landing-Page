
import Header from "../components/header";
import Hero from "../components/Hero/Hero";
import CTA from "../components/CTA";
import Footer from "../components/footer";


const Layout = () => {
return(
<div className="relative overflow-x-hidden max-h-auto h-screen border-4 border-green-800  ">

<div className="absolute z-0 w-90 h-90  -top-10  -right-20  sm:w-190 sm:h-195  sm:-right-15 sm:-top-29 ">
{/* bandage like pattern   */}
<picture >
<img src="/images/bg-tablet-pattern.svg" alt="pattern-logo" className="w-full h-full"/>
</picture>

</div>

<div className="absolute z-2 w-70 h-80  -bottom-24 -right-42  md:hidden">
{/* bandage like pattern   */}
<picture >
<img src="/images/bg-tablet-pattern.svg" alt="pattern-logo" className="w-full h-full"/>
</picture>
</div>
  


<div className="relative z-10 w-full sm:flex sm:flex-col sm:items-center   ">
<Header/>

<Hero/>
<CTA/>
<Footer/> 
</div>

 {/* largeview left side */}
<div className="absolute z-2 w-133 h-130  md:-bottom-183  md:-left-53 ">
{/* bandage like pattern   */}
<picture >
<img src="/images/bg-tablet-pattern.svg" alt="pattern-logo" className="w-full h-full"/>
</picture>
</div>
</div>

)
}
export default Layout;