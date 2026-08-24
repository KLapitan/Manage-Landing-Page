const NavModal = ({links}) => {


return (

<div className="fixed sm:hidden top-20 inset-0 bg-linear-to-b from-black/0 via-black/30 to-black/35 p-4" >
<div className=" w-full max-w-full   inset-x-32 h-63  bg-white flex items-center rounded-xs   " >

<ul className="w-full  h-auto flex flex-col gap-5 items-center" >
{links.map((item) => (
<li className="text-P-Blue950 text-sm font-medium hover:underline underline-offset-8 hover:cursor-pointer">{item}</li>
)
)}

</ul>









</div>

</div>



)

}
export default NavModal