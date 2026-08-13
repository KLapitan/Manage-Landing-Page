
import { useState } from "react";

const ImageSlider = () => {

const [currentIndex , setCurrentIndex] =useState(1)

const manageSlider =[
{id:0 , name:"Anisha Li", profileLogo:"/images/avatar-anisha.png", feedback:' “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.” '},
{id:1 , name:"Ali Bravo", profileLogo:"/images/avatar-ali.png",feedback:' “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much  more focused.” '},
{id:2 , name:"Richard Watts", profileLogo:"/images/avatar-richard.png",feedback:' “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!” '},
{id:3 , name:"Shanai Gough", profileLogo:"/images/avatar-shanai.png", feedback: ' “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”  '
},
];


const personFeedbacks = manageSlider[currentIndex];


const handleMoveSlider = () => {
setCurrentIndex((prev) => 
prev === manageSlider.length -1 ? 0 : prev + 1
)

}




return(
<section className="h-auto w-full  font-Be-Vietnam-Pro ">

      <div className="flex flex-col h-auto p-2 sm:hidden">
          {personFeedbacks && (
          <div key={personFeedbacks.id} className="relative flex flex-col items-center  h-55 w-full justify-center gap-4  bg-gray-300/20" onClick={handleMoveSlider}>
            <img src={personFeedbacks.profileLogo} alt={personFeedbacks.name} className="w-20 h-20 absolute -top-10" />  
            <span className="text-P-Blue950 font-bold mt-20">{personFeedbacks.name}</span>
              <span className="text-xs  text-center text-black/80 w-68  p-2 leading-6 mb-7 ">{personFeedbacks.feedback }</span>
          </div>
          )} 

          
       <div className="flex flex-row gap-1  w-full h-10 items-center justify-center ">
         {[0,1,2,3].map((_,index) => (
            <span key={index} className={`border-2 border-P-Orange400 w-2 h-2 rounded-full ${currentIndex === index ? "bg-P-Orange400" : "bg-white"} `} ></span>
            ))}
         </div>     
      </div>


      <ul className="hidden sm:grid md:grid-cols-2 lg:grid-cols-4  gap-4 sm:gap-12 lg:gap-3 w-full p-2 lg:p-0 lg:mb-5">
        {manageSlider.map((feedback) => (
        <li  className="relative h-auto  lg:h-45 bg-gray-300/20 p-2 lg:p-1">
          <span className="flex flex-col gap-2  items-center justify-center">
            <img src={feedback.profileLogo} alt={feedback.name} className="w-20 h-20 lg:w-15 lg:h-15 sm:absolute sm:-top-10" />          
            <span className="text-P-Blue950 sm:mt-15 lg:mt-10 font-bold text-md">{feedback.name}</span>
            <span className="text-sm lg:text-xs   text-center w-80 sm:w-auto leading-5 text-black/60 mb-10  ">{feedback.feedback}</span>
          
          </span>
        
        </li>
        ))}
      
      </ul>

    
</section>
)
}
export default ImageSlider