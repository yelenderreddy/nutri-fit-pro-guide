
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-nutri-blue text-xl font-bold">NutriFit</span>
              <span className="text-nutri-orange text-xl font-bold">Pro</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Your trusted resource for nutrition information, weight gain strategies, and muscle building guidance.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-nutri-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-gray-600 hover:text-nutri-blue">
                  Nutrition Calculator
                </Link>
              </li>
              <li>
                <Link to="/weight-gain" className="text-gray-600 hover:text-nutri-blue">
                  Weight Gain Guide
                </Link>
              </li>
              <li>
                <Link to="/muscle-growth" className="text-gray-600 hover:text-nutri-blue">
                  Muscle Growth Nutrition
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-gray-600 text-sm">
              The information provided on this website is for educational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider before starting any nutrition or exercise program.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} NutriFit Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
