// src/components/RequiredDocuments.js
import {
  FaCertificate,
  FaFileAlt,
  FaIdCard,
  FaImage,
  FaMobileAlt,
  FaRing,
} from "react-icons/fa";

const RequiredDocuments = () => {
  const documents = [
    {
      icon: <FaIdCard className="text-2xl" />,
      title: "AADHAAR NUMBER",
      description: "Provide Aadhaar card details for identity verification.",
      color: "bg-blue-500"
    },
    {
      icon: <FaRing className="text-2xl" />,
      title: "MARRIAGE PROOF",
      description: "Submit marriage certificate (PDF under 1MB).",
      color: "bg-red-500"
    },
    {
      icon: <FaCertificate className="text-2xl" />,
      title: "RD NUMBER OF CASTE CERTIFICATE",
      description: "Enter RD number from your caste certificate.",
      color: "bg-green-500"
    },
    {
      icon: <FaImage className="text-2xl" />,
      title: "MARRIAGE PHOTO",
      description: "Upload wedding photo (JPG/PNG under 1MB).",
      color: "bg-purple-500"
    },
    {
      icon: <FaFileAlt className="text-2xl" />,
      title: "RD NUMBER OF INCOME CERTIFICATE",
      description: "Provide RD number from income certificate.",
      color: "bg-yellow-500"
    },
    {
      icon: <FaMobileAlt className="text-2xl" />,
      title: "MOBILE NUMBER",
      description: "Active mobile number for communication.",
      color: "bg-teal-500"
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            DOCUMENT CHECKLIST
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Required Documents
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ensure you have these documents ready before starting your application process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${doc.color} p-4`}>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-800">
                    {doc.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{doc.title}</h3>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Required for application</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white"></div>
            <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Submit Your Application?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Ensure all documents are scanned clearly before uploading. Contact support if you need assistance.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="bg-white text-blue-800 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all shadow-lg flex items-center">
                Start Application
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="bg-blue-800/50 text-white px-6 py-3 rounded-lg font-bold border border-blue-400/30">
                REGISTER: 3.0e00d8
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequiredDocuments;


