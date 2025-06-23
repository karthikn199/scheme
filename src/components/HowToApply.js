// src/components/HowToApply.js
import React from 'react';
import { 
  FaRegRegistered, 
  FaMoneyBillWave, 
  FaChartPie, 
  FaRupeeSign 
} from 'react-icons/fa';

const HowToApply = () => {
  const steps = [
    {
      icon: <FaRegRegistered className="text-3xl" />,
      title: "REGISTRATION",
      description: "Register with your Assistant Care Director and provide all necessary documentation.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: <FaMoneyBillWave className="text-3xl" />,
      title: "COMPENSATION REVIEW",
      description: "Your registration details will be reviewed for compensation eligibility.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <FaChartPie className="text-3xl" />,
      title: "ALLOTMENT PROCESS",
      description: "Upon approval, funds will be allocated to the couple's account.",
      color: "from-amber-500 to-orange-600"
    },
    {
      icon: <FaRupeeSign className="text-3xl" />,
      title: "AMOUNT SANCTION",
      description: "Eligible beneficiaries receive ₹1.50 lakhs upon final approval.",
      color: "from-red-500 to-rose-600"
    }
  ];

  return (
    <div className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            APPLICATION PROCESS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How to Apply for the Scheme
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to apply for the Intra-Caste Marriage Incentive Program
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline connector - hidden on mobile */}
          <div className="absolute left-1/2 top-20 bottom-20 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group"
              >
                {/* Step number */}
                {/* <div className={`absolute -top-7 left-1/2 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full font-bold text-white z-10 bg-gradient-to-r ${step.color} shadow-lg`}>
                  {index + 1}
                </div> */}
                
                {/* Step card */}
                <div className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-xl">
                  {/* Icon container */}
                  <div className={`mb-5 w-16 h-16 rounded-xl flex items-center justify-center mx-auto bg-gradient-to-br ${step.color} text-white`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 flex-grow text-center">
                    {step.description}
                  </p>
                  
                  {/* Animated arrow */}
                  <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="inline-flex items-center text-blue-600 font-medium">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;