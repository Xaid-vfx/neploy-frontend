export default function Home() {
  return (
    <main className="h-screen bg-black text-white overflow-hidden">
      <div className="h-full flex flex-col items-center justify-center px-4 relative">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50"></div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 tracking-[-0.03em] font-outfit animate-fade-in">
            Neploy
          </h1>
          <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 text-gray-300 font-light tracking-[-0.02em] animate-fade-in-delay-1">
            Deploy Next.js apps in seconds
          </p>
          <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-10 text-gray-400 font-extralight tracking-wide max-w-xl mx-auto leading-relaxed animate-fade-in-delay-2">
            One-click deployment for GitHub repos. No accounts, no config, just instant previews.
          </p>
          <div className="flex gap-6 justify-center animate-fade-in-delay-3">
            <button className="group px-5 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 text-xs sm:text-sm md:text-base tracking-wide relative overflow-hidden">
              <span className="relative z-10 font-outfit">Coming Soon</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center animate-fade-in-delay-4">
          <p className="text-[9px] xs:text-[10px] sm:text-xs font-extralight tracking-wide">Built for developers who move fast</p>
        </div>
      </div>
    </main>
  );
}
