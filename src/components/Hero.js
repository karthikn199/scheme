// src/components/Hero.js
const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Modern badge */}
          {/* <div className="inline-flex items-center bg-gradient-to-r from-amber-400 to-yellow-300 text-blue-900 px-4 py-1.5 rounded-full text-xs font-bold mb-6 shadow-lg animate-pulse">
            <span className="mr-2">🔔</span>
            Register: 3.0e00d8
          </div> */}

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-300">
              INCENTIVE FOR INTRA-CASTE MARRIAGE
            </span><br />
            <span className="text-2xl md:text-3xl">Within Scheduled Caste Community</span>
          </h1>

          {/* Feature card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 shadow-2xl mb-8 transform transition hover:scale-[1.01]">
            <div className="flex items-start mb-4">
              <div className="bg-yellow-400 text-blue-900 font-bold px-3 py-1 rounded-lg mr-3">
                WBC CAM APPLY
              </div>
              <div className="bg-blue-500 h-0.5 flex-grow mt-3"></div>
            </div>
            
            <p className="mb-6 text-blue-100 text-lg">
              Social Welfare Department, Government of Karnataka provides incentives to Scheduled Caste couples meeting the following criteria:
            </p>
            
            <ul className="space-y-3">
              {[
                "✓ Couple belonging to different sub-castes",
                "✓ Scheme applicable within one year of marriage",
                "✓ Family income below ₹2.00 lakhs",
                "✓ Both spouses must be Karnataka residents"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-2 text-xl">•</span>
                  <span className="text-blue-50">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
          <div className="group relative inline-block w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
            <button className="relative w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-blue-900 font-extrabold text-lg py-4 px-6 rounded-xl hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 transform group-hover:-translate-y-0.5">
              APPLY FOR INTRA-CASTE MARRIAGE INCENTIVE
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;