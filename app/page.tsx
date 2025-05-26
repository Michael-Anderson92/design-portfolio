

export default function Home() {
  return (
    <div>
      {/* Hero Section - Full Screen */}
      <section className="relative bg-slate-800 h-screen flex items-center justify-center overflow-hidden">
        <h1 className="text-white text-center satoshi-regular text-3xl sm:text-3xl md:text-5xl lg:text-7xl z-50">
          Engineered... with excellence
        </h1>

        {/* Hero Element Starting Flat at Bottom */}
        <div
          id="hero"
          className="text-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-[125%] scale-x-750 scale-y-1000 text-6xl flow-circular-regular !font-flow-circular-regular"
        >
          1234
        </div>
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