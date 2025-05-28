import ButtonAppBar from "@/components/appbar";
import { Button } from "@mui/material";

export default function Home() {
  return (
    
    <div className="">
      <ButtonAppBar/>
      {/* Hero Section - Full Screen */}
      <section className="bg-[url('/media/cloudy-blue-background.jpg')] bg-cover bg-center grid grid-cols-12 relative h-screen flex items-center justify-center overflow-hidden">
    

    <div id="left-section" className="flex center flex-col justify-center items-center col-span-7  h-full z-50">
      <h1 className="text-white text-center text-3xl sm:text-3xl md:text-5xl lg:text-7xl">Defend in Silence. <br></br>Prevail in Shadows.</h1>
      <h2 className="inter w-3/4 mt-4 mx-auto align-center text-white text-center col-span-4 text-xl sm:text-xl md:text-3xl lg:text-3xl">AI-powered threat detection that moves <br></br>at the speed of attackers</h2>
      
      <div className="mt-8 w-1/2 mx-auto flex flex-row gap-8">
      <Button
  style={{ backgroundColor: 'rgb(112, 7, 24)', color: 'white' }}
  className="w-full"
  variant="contained"
>
  See Pricing
</Button>

<Button
  style={{ backgroundColor: 'rgb(112, 7, 24)', color: 'white' }}
  className="w-full"
  variant="contained"
>
  See Documentation
</Button>
</div>

    </div>

    

    {/* Right Area */}
    <div className="col-span-5 flex items-center justify-center">
    <img
  className="w-3/4 rounded-3xl border-white object-contain shadow-[0px_10px_10px_3px_rgba(57,93,151,0.5)]"
  src="/media/cyber-ninja.jpg"
  alt="Cyber Ninja"
/>

  </div>


    {/* Hero Element Starting Flat at Bottom */}
    
  </section> 





      <section className="h-screen flex items-center justify-center bg-gray-300">
        <h2>Section 2</h2>
      </section>

      {/* Scrollable Content Section - Full Screen */}
      <section className="h-screen flex items-center justify-center bg-gray-300">
        <h2>Scroll down to see more</h2>
      </section>
    </div>
  );
}