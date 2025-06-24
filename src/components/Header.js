// src/components/Header.js
import { useEffect, useRef, useState } from "react";
import {
  FaBook,
  FaChartBar,
  FaChevronDown,
  FaHeadset,
  FaHome,
  FaLightbulb,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const menuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setActiveSubmenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    {
      name: "Home",
      icon: <FaHome className="text-lg" />,
      href: "#",
    },
    {
      name: "Applications",
      icon: <FaBook className="text-lg" />,
      href: "#",
      submenu: [
        { name: "New Application", href: "#" },
        { name: "Edit Application", href: "#" },
        { name: "Track Status", href: "#" },
      ],
    },
    // {
    //   name: "Payments",
    //   icon: <FaMoneyBillWave className="text-lg" />,
    //   href: "#",
    //   submenu: [
    //     { name: "Make Payment", href: "#" },
    //     { name: "Payment History", href: "#" },
    //     { name: "Acknowledgement", href: "#" },
    //   ],
    // },
    {
      name: "Statistics",
      icon: <FaChartBar className="text-lg" />,
      href: "#",
    },
    {
      name: "Help",
      icon: <FaHeadset className="text-lg" />,
      href: "#",
      submenu: [
        { name: "FAQs", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Support", href: "#" },
      ],
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 py-3"
          : "bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 py-3"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div
              className={`p-2 rounded-lg mr-3 transition-all ${
                isScrolled
                  ? "bg-white text-blue-700 shadow"
                  : "bg-white text-blue-700 shadow"
              }`}
            >
              <FaLightbulb className="text-xl" />
            </div>
            <div>
              <h1
                className={`text-xl font-bold font-sans ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Minority Welfare Department
              </h1>
              <p
                className={`text-xs ${
                  isScrolled ? "text-white" : "text-white"
                }`}
              >
                Government of Karnataka
              </p>
            </div>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search services..."
                className={`w-full py-2 pl-10 pr-4 rounded-full border focus:outline-none focus:ring-2 transition-all ${
                  isScrolled
                    ? "bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder-blue-100 focus:ring-white/30"
                    : "bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder-blue-100 focus:ring-white/30"
                }`}
              />
              <FaSearch
                className={`absolute left-3 top-3 ${
                  isScrolled ? "text-blue-100" : "text-blue-100"
                }`}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <nav className="flex space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.submenu && setActiveSubmenu(index)}
                  onMouseLeave={() => item.submenu && setActiveSubmenu(null)}
                >
                  <a
                    href={item.href}
                    className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 group ${
                      isScrolled
                        ? "hover:bg-white/10 text-white"
                        : "hover:bg-white/10 text-white"
                    }`}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="ml-2">{item.name}</span>
                    {item.submenu && (
                      <FaChevronDown className="ml-1 text-xs mt-0.5 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </a>

                  {item.submenu && activeSubmenu === index && (
                    <div
                      className={`absolute left-0 mt-1 w-56 rounded-lg shadow-lg py-1 z-50 animate-fadeIn ${
                        isScrolled
                          ? "bg-white border border-gray-100"
                          : "bg-blue-700"
                      }`}
                    >
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className={`flex items-center px-4 py-3 text-sm transition-all ${
                            isScrolled
                              ? "hover:bg-blue-50 text-blue-900"
                              : "hover:bg-blue-600 text-white"
                          }`}
                        >
                          <span className="w-1 h-1 rounded-full bg-blue-400 mr-3"></span>
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="ml-2">
              <button
                className={`flex items-center px-4 py-2.5 rounded-lg font-medium transition-all duration-300 group ${
                  isScrolled
                    ? "bg-white text-blue-700 hover:bg-blue-50 shadow"
                    : "bg-white text-blue-700 hover:bg-blue-50 shadow"
                }`}
              >
                <FaUser className="mr-2 transition-transform group-hover:scale-110" />
                <span>Login</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              className={`p-2 rounded-lg mr-2 ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              <FaSearch className="text-lg" />
            </button>
            <button
              className={`p-2 rounded-lg transition-colors ${
                isScrolled ? "bg-blue-700 text-white" : "bg-white text-blue-700"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${isScrolled ? "bg-blue-800" : "bg-blue-800"}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center">
            <div
              className={`p-2 rounded-lg mr-3 ${
                isScrolled ? "bg-white text-blue-700" : "bg-white text-blue-700"
              }`}
            >
              <FaLightbulb className="text-xl" />
            </div>
            <h2
              className={`text-lg font-bold ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              Minority Portal
            </h2>
          </div>
          <button
            onClick={() => setIsMenuOpen(false)}
            className={`p-2 rounded-full ${
              isScrolled ? "hover:bg-blue-700" : "hover:bg-blue-700"
            }`}
          >
            <HiX
              className={`h-6 w-6 ${isScrolled ? "text-white" : "text-white"}`}
            />
          </button>
        </div>

        <div className="p-4">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search services..."
              className={`w-full py-2.5 pl-10 pr-4 rounded-lg border focus:outline-none focus:ring-2 ${
                isScrolled
                  ? "bg-white/10 border-white/20 text-white placeholder-blue-200 focus:ring-white/30"
                  : "bg-white/10 border-white/20 text-white placeholder-blue-200 focus:ring-white/30"
              }`}
            />
            <FaSearch
              className={`absolute left-3 top-3.5 ${
                isScrolled ? "text-blue-200" : "text-blue-200"
              }`}
            />
          </div>

          <nav className="space-y-1">
            {navItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
                    isScrolled
                      ? "hover:bg-blue-700/80 text-white"
                      : "hover:bg-blue-700/80 text-white"
                  }`}
                  onClick={(e) => {
                    if (item.submenu) {
                      e.preventDefault();
                      setActiveSubmenu(activeSubmenu === index ? null : index);
                    }
                  }}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  {item.submenu && (
                    <FaChevronDown
                      className={`transition-transform duration-200 ${
                        activeSubmenu === index ? "transform rotate-180" : ""
                      }`}
                    />
                  )}
                </a>

                {item.submenu && activeSubmenu === index && (
                  <div
                    className={`ml-8 mt-1 mb-2 space-y-1 rounded-lg p-2 ${
                      isScrolled ? "bg-blue-700/40" : "bg-blue-700/40"
                    }`}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className={`block px-4 py-2.5 rounded-lg text-sm ${
                          isScrolled
                            ? "hover:bg-blue-600 text-white"
                            : "hover:bg-blue-600 text-white"
                        }`}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-4">
            <button
              className={`w-full flex items-center justify-center px-4 py-3 rounded-lg font-medium transition-colors ${
                isScrolled
                  ? "bg-white text-blue-700 hover:bg-blue-50"
                  : "bg-white text-blue-700 hover:bg-blue-50"
              }`}
            >
              <FaUser className="mr-2" />
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => {
            setIsMenuOpen(false);
            setActiveSubmenu(null);
          }}
        ></div>
      )}
    </header>
  );
};

export default Header;
