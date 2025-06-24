// src/components/AboutScheme.js
const AboutScheme = () => {
  return (
    <div className="relative py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/5 w-48 h-48 rounded-full bg-yellow-400"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-blue-500"></div>
        <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full bg-indigo-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-blue-900 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
              GOVERNMENT SCHEME
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              About the Incentive Scheme
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-br from-yellow-400 to-amber-500 text-blue-900 rounded-xl p-6 h-full">
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "₹1.50 lakhs financial assistance",
                      "Promotes social harmony",
                      "Supports newly married couples",
                      "Encourages intra-caste marriage",
                      "Reduces financial burden",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 mt-0.5 mr-3 text-blue-900 flex-shrink-0"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:w-2/3">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400 text-center lg:text-left">
                  INCENTIVES FOR INTRA-CASTE MARRIAGE
                </h3>

                <div className="h-1 w-16 bg-gradient-to-r from-yellow-400 to-amber-500 mb-6 mx-auto lg:mx-0"></div>

                <p className="mb-6 text-lg text-blue-100">
                  The Government of Karnataka's Social Minority Department has
                  introduced this scheme to promote social harmony and reduce
                  caste-based discrimination within Scheduled Caste communities.
                  The initiative provides financial support to eligible couples
                  who choose to marry within their caste.
                </p>

                <p className="mb-6 text-lg text-blue-100">
                  This program aims to strengthen community bonds while
                  alleviating the financial burden on newly married couples from
                  economically disadvantaged backgrounds. Eligible couples
                  receive substantial financial assistance to begin their new
                  life together.
                </p>

                <div className="bg-gradient-to-r from-blue-800/50 to-indigo-800/50 border-l-4 border-yellow-400 p-5 rounded-lg">
                  <p className="text-yellow-100 font-medium">
                    <span className="block text-xl font-bold text-white mb-2">
                      Financial Assistance:
                    </span>
                    Eligible couples receive ₹1.50 lakhs to support their new
                    life together. This incentive is designed to promote social
                    cohesion while providing tangible economic support to newly
                    married couples within the Scheduled Caste community.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                {[
                  { title: "Eligibility", value: "Scheduled Caste couples" },
                  { title: "Income Limit", value: "Below ₹2.00 lakhs" },
                  {
                    title: "Application Window",
                    value: "Within 1 year of marriage",
                  },
                ].map((stat, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-xl">
                    <div className="text-yellow-400 font-bold text-xl mb-2">
                      {stat.value}
                    </div>
                    <div className="text-blue-200 text-sm">{stat.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScheme;
