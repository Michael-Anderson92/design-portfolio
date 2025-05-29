import ButtonAppBar from "@/components/appbar";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="">
      <ButtonAppBar/>
      
      {/* Hero Section - Full Screen */}
      <section className="bg-[url('/media/cloudy-blue-background.jpg')] bg-cover bg-center relative h-screen flex items-center justify-between overflow-hidden">
        
        {/* Left Section - Main Content */}
        <div className="flex-1 flex items-center justify-center py-16 z-50">
          <div className="max-w-4xl px-8">
            {/* Main Headline */}
            <h1 className="text-white font-bold leading-tight mb-6">
              <span className="block text-5xl lg:text-7xl xl:text-8xl">
                Defend in Silence.
              </span>
              <span className="block text-5xl lg:text-7xl xl:text-8xl mt-2">
                Prevail in Shadows.
              </span>
            </h1>
            
            {/* Subtitle */}
            <h2 className="text-white/90 text-xl lg:text-2xl xl:text-3xl font-light leading-relaxed mb-12 max-w-3xl">
              AI-powered threat detection that moves at the speed of attackers
            </h2>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              {/* Primary CTA */}
              <Button
                variant="contained"
                size="large"
                className="h-14 px-8 text-lg font-semibold"
                style={{
                  backgroundColor: 'rgb(0, 212, 255)',
                  color: 'rgb(15, 23, 42)',
                  borderRadius: '8px',
                  textTransform: 'none',
                  boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
                }}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgb(0, 190, 230)',
                    boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                Enter the Command Layer
              </Button>
              
              {/* Secondary CTA */}
              <Button
                variant="outlined"
                size="large"
                className="h-14 px-8 text-lg font-semibold"
                style={{
                  borderColor: 'rgb(243, 43, 78)',
                  color: 'rgb(243, 43, 78)',
                  borderRadius: '8px',
                  textTransform: 'none',
                  borderWidth: '2px',
                }}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(243, 43, 78, 0.1)',
                    borderColor: 'rgb(243, 43, 78)',
                    boxShadow: '0 0 20px rgba(243, 43, 78, 0.3)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease-in-out',
                }}
              >
                See Platform Demo
              </Button>
            </div>
            
            {/* Optional: Trust indicators or additional info */}
            <div className="mt-12 flex items-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Real-time protection</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm">AI-powered detection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Ninja Image */}
        <div className="flex-1 flex items-center justify-center relative right-25 bottom-0">
          <img
            className="w-full max-w-2xl h-auto object-contain"
            src="/media/cyber-ninja-v1.png"
            alt="Cyber Ninja"
          />
        </div>
      </section> 

      {/* Rest of your sections */}
      <section className="h-screen flex items-center justify-center bg-gray-300">
        <h2>Section 2</h2>
      </section>

      <section className="h-screen flex items-center justify-center bg-gray-300">
        <h2>Scroll down to see more</h2>
      </section>
    </div>
  );
}