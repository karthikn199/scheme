import { useEffect, useState } from "react";
import {
  FiBookOpen,
  FiHelpCircle,
  FiHome,
  FiMenu,
  FiUser,
  FiX,
} from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import {
  MdOutlineAnalytics,
  MdOutlinePayment,
  MdOutlineSchool,
} from "react-icons/md";
import { TbCalendarStats } from "react-icons/tb";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Dashboard",
      href: "/",
      icon: <FiHome className="mr-2 text-lg" />,
    },
    {
      name: "Edit Application",
      href: "/academics",
      icon: <FiBookOpen className="mr-2 text-lg" />,
    },
    {
      name: "Track Status",
      href: "/admissions",
      icon: <MdOutlineSchool className="mr-2 text-lg" />,
    },
    {
      name: "Payments",
      href: "/payments",
      icon: <MdOutlinePayment className="mr-2 text-lg" />,
      current: true,
    },
    {
      name: "Statistics",
      href: "/events",
      icon: <MdOutlineAnalytics className="mr-2 text-lg" />,
    },
    {
      name: "Support",
      href: "/support",
      icon: <FiHelpCircle className="mr-2 text-lg" />,
    },
  ];

  return (
    <>
      {/* Industrial-style Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900 shadow-xl py-2 border-b border-gray-700"
            : "bg-gray-900/95 backdrop-blur-sm py-4"
        }`}
        style={{
          backgroundImage: `linear-gradient(rgba(30, 30, 30, 0.95), url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23333' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo - Industrial style */}
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="flex items-center group">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-lg mr-3 border border-gray-600">
                  <HiOutlineLightningBolt className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white tracking-tight">
                    Minority
                  </span>
                  <div className="flex items-center">
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Government Services Portal
                    </span>
                    <div className="ml-2 h-0.5 w-8 bg-cyan-500"></div>
                  </div>
                </div>
              </a>
            </div>

            {/* Desktop Navigation - Industrial style */}
            <div className="hidden lg:flex items-center space-x-1">
              <nav className="flex space-x-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 group ${
                      item.current
                        ? "text-white bg-gray-800 border border-gray-700 shadow-inner"
                        : "text-gray-400 hover:text-white hover:bg-gray-800/50 border border-transparent"
                    }`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {!item.current && (
                      <span className="ml-2 w-1 h-1 bg-gray-500 rounded-full group-hover:bg-cyan-400"></span>
                    )}
                  </a>
                ))}
              </nav>

              {/* Login Button */}
              <div className="ml-4">
                <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2.5 rounded-lg text-white hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 border border-cyan-500/30 shadow-md">
                  <FiUser className="h-4 w-4" />
                  <span className="text-sm font-medium">Login</span>
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-3 rounded-lg text-gray-300 hover:text-white focus:outline-none bg-gray-800 border border-gray-700"
              >
                {isOpen ? (
                  <FiX className="h-5 w-5" />
                ) : (
                  <FiMenu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Industrial style */}
        {isOpen && (
          <div className="lg:hidden bg-gray-800 border-t border-gray-700 shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    item.current
                      ? "text-white bg-gray-700 border border-gray-600"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50 border border-transparent"
                  }`}
                >
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </a>
              ))}
              <div className="pt-3">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 border border-cyan-500/30">
                  <FiUser className="h-5 w-5" />
                  <span>Login</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section with Industrial Elements */}
      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-900/30 rounded-full border border-cyan-700/50">
                  GOVERNMENT SERVICE PORTAL
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Modern <span className="text-cyan-400">Industrial-Grade</span>{" "}
                Minority Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl">
                Robust, secure, and efficient management of Minority programs
                with industrial-grade reliability and precision.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 border border-cyan-500/30 shadow-lg">
                  Get Started
                </button>
                <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-all duration-300 border border-gray-700">
                  Learn More
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="bg-cyan-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-cyan-700/30">
                  <MdOutlinePayment className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Payment Processing
                </h3>
                <p className="text-gray-400">
                  Secure transaction system with industrial-grade encryption
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 mt-8">
                <div className="bg-blue-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-blue-700/30">
                  <MdOutlineAnalytics className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Data Analytics
                </h3>
                <p className="text-gray-400">
                  Real-time statistics and program monitoring
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300">
                <div className="bg-purple-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-purple-700/30">
                  <MdOutlineSchool className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Application Tracking
                </h3>
                <p className="text-gray-400">
                  Monitor your application status in real-time
                </p>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-all duration-300 mt-8">
                <div className="bg-green-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-green-700/30">
                  <TbCalendarStats className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Program Calendar
                </h3>
                <p className="text-gray-400">
                  Important dates and deadlines for all programs
                </p>
              </div>
            </div>
          </div>

          {/* Industrial Divider */}
          <div className="mt-24 flex items-center">
            <div className="h-0.5 bg-gradient-to-r from-gray-800 via-cyan-500 to-gray-800 flex-grow"></div>
            <div className="px-4 text-sm text-gray-500 font-medium">
              TRUSTED BY GOVERNMENT AGENCIES
            </div>
            <div className="h-0.5 bg-gradient-to-r from-gray-800 via-cyan-500 to-gray-800 flex-grow"></div>
          </div>

          {/* Partner Logos */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 opacity-80">
            <div className="bg-gray-800/50 border border-gray-700 w-32 h-16 rounded-lg flex items-center justify-center text-gray-400 font-bold">
              GOVT LOGO
            </div>
            <div className="bg-gray-800/50 border border-gray-700 w-32 h-16 rounded-lg flex items-center justify-center text-gray-400 font-bold">
              STATE Department
            </div>
            <div className="bg-gray-800/50 border border-gray-700 w-32 h-16 rounded-lg flex items-center justify-center text-gray-400 font-bold">
              NATIONAL
            </div>
            <div className="bg-gray-800/50 border border-gray-700 w-32 h-16 rounded-lg flex items-center justify-center text-gray-400 font-bold">
              Minority INC
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
