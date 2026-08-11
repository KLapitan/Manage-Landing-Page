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




const manageSlider =[
{id:0 , name:"Anisha Li", profileLogo:"/images/avatar-anisha.png"},
{id:1 , name:"Ali Bravo", profileLogo:"/images/avatar-ali.png"},
{id:2 , name:"Richard Watts", profileLogo:"/images/avatar-richard.png"},
{id:3 , name:"Shanai Gough", profileLogo:"/images/avatar-shanai.png"},
]

return (
<section className=" border h-auto w-full " >

  <div className="flex items-center flex-col mb-5">
    <h2 className="text-2xl mt-21 text-center text-P-Blue950 font-bold tracking-tight leading-9 border w-auto  ">What’s different  <span className="text-2xl tracking-tighter inline-block">about Manage?</span></h2>

    <span className="text-xs  text-center text-black/50  p-4 leading-6">  Manage provides all the functionality your team needs, without 
  the complexity. Our software is tailor-made for modern digital 
  product teams. </span>

  </div>

    <ul className=" h-auto flex flex-col gap-10 font-Be-Vietnam-Pro pl-3">
    {manageAboutDesc.map((item) =>(
    <li className=" flex flex-col  gap-1 justify-start items-center  h-auto w-full "> 
   
    

    <span className=" flex flex-row gap-4 justify-start  w-full items-center rounded-l-full bg-N-Orange50 ">
    <span className=" py-2 px-4 rounded-full bg-P-Orange400 text-N-Graye50 text-xs">0{item.id}</span>
    
     <span className="text-P-Blue950 text-sm tracking-tighter font-bold ">{item.title}</span>
    </span>
    <span className="text-xs text-black/50 text-left w-full leading-6">{item.description}</span>

    
    
    </li>
    
    ))}
    </ul>









</section>

)
}
export default About