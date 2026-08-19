import Button from "../button";
import ImageSlider from "../ImageSlider/imageSlider";


const About = () => {

const manageAboutDesc = [
{id:1, 
  title:"Track company-wide progress",
  description:"  See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",

 },
 {id:2,
  title:"Advanced built-in reports",
  description:"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
 
 },

 {
 id:3,
 title:"Everything you need in one place",
 description:"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
 }


];

return (
<section className=" border h-auto w-full " >

<div className="sm:flex sm:flex-row sm:h-screen sm:items-start sm:mt-20  sm:justify-between">
  <div className="flex items-center flex-col mb-5 border sm:items-start sm:p-2 sm:gap-7">

  {/* mobile view header */}
    <h2 className="text-2xl mt-21 sm:mt-0 text-center text-P-Blue950 font-bold tracking-tight leading-9 border w-auto sm:text-left  sm:hidden ">What’s different  <span className="text-2xl tracking-tighter inline-block">about Manage?</span></h2>

{/* larger than mobile */}
    <h2 className="text-3xl w-100 text-left text-P-Blue950 font-Be-Vietnam-Pro font-bold border sm:inline-block">What's different about Manage?</h2>

    <span className="text-xs  text-center text-black/50  p-4 leading-6 sm:text-left sm:p-0 sm:w-69">  Manage provides all the functionality your team needs, without 
  the complexity. Our software is tailor-made for modern digital 
  product teams. </span>

  </div>

    <ul className=" h-auto flex flex-col gap-10 font-Be-Vietnam-Pro pl-3 sm:w-150">
    {manageAboutDesc.map((item) =>(
    <li className=" flex flex-col  gap-1 justify-start items-center  h-auto w-full "> 
   
    

    <span className=" flex flex-row gap-4 justify-start  w-full items-center rounded-l-full sm:bg-white bg-N-Orange50 ">
    <span className=" py-2 px-4 rounded-full bg-P-Orange400  text-N-Graye50 text-xs">0{item.id}</span>
    
     <span className="text-P-Blue950 text-sm tracking-tighter font-bold ">{item.title}</span>
    </span>
    <span className="text-xs text-black/50 text-left w-full leading-6 sm:text-sm sm:border sm:w-sm">{item.description}</span>
    </li>
    
    ))}
    </ul>

</div>

  <div className="h-auto w-full flex flex-col gap-1  items-center  mt-10 mb-10 p-2 border">
    <div className="w-full flex flex-col gap-17 items-center border">
    <h2 className="text-2xl text-P-Blue950 font-bold"> What they’ve said </h2>


  <ImageSlider/>
    </div>
  
   <Button className="bg-P-Orange400 shadow-md shadow-P-Orange400/75 rounded-full py-3  w-29 text-xs font-medium text-N-Graye50">Get Started</Button>
  </div>



</section>

)
}
export default About;