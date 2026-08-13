import Button from "../button";
import About from "../About/About";
const Hero = () => {

return(
<main className="border border-P-Blue950 h-auto max-w-7xl w-full font-Be-Vietnam-Pro   ">
    <section className="p-3 h-auto w-full border flex flex-col gap-3 items-center border-cyan-400  ">
        <picture>
          <img src="/images/illustration-intro.svg" alt="hero-image" />
        </picture>

        {/* intro description */}
        <div className="flex flex-col items-center w-full border tracking-tight gap-2 p-1">
          <h2 className="text-center text-3xl font-bold text-P-Blue950">Bring everyone together to build better products.</h2>

            <p className="text-sm text-center p-2 text-gray-400/80 leading-6"> Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>


        </div>
            <Button className="bg-P-Orange400 shadow-md shadow-P-Orange400/75 rounded-full py-3  w-29 text-xs font-medium text-N-Graye50">Get Started</Button>
    </section>

<About/>

</main>
)

}
export default Hero;