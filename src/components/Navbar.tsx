
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calculator, Weight, User } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-nutri-blue text-xl font-bold">NutriFit</span>
              <span className="text-nutri-orange text-xl font-bold">Pro</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-gray-700 px-3 py-2 hover:text-nutri-blue">
              Home
            </Link>
            <Link to="/calculator" className="text-gray-700 px-3 py-2 hover:text-nutri-blue">
              Calculator
            </Link>
            <Link to="/weight-gain" className="text-gray-700 px-3 py-2 hover:text-nutri-blue">
              Weight Gain
            </Link>
            <Link to="/muscle-growth" className="text-gray-700 px-3 py-2 hover:text-nutri-blue">
              Muscle Growth
            </Link>
            <Button asChild variant="default" className="ml-4">
              <Link to="/calculator">
                <Calculator className="mr-2 h-4 w-4" /> Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-nutri-blue hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden bg-white`}>
        <div className="pt-2 pb-3 space-y-1 shadow-lg">
          <Link 
            to="/" 
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/calculator" 
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Calculator
          </Link>
          <Link 
            to="/weight-gain" 
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Weight Gain
          </Link>
          <Link 
            to="/muscle-growth" 
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Muscle Growth
          </Link>
          <Link 
            to="/calculator" 
            className="flex items-center px-4 py-2 text-base font-medium text-white bg-nutri-blue hover:bg-blue-600"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Calculator className="mr-2 h-4 w-4" /> Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
