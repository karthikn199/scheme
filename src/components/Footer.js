// src/components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-4">
            © 2016 Social Minority Department, Government of Karnataka.
          </p>
          <p className="text-gray-400">
            Design & Development by NIC, Karnataka
          </p>

          <div className="mt-6 flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Accessibility
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
