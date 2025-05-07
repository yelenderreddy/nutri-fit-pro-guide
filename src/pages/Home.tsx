
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, Weight, User } from "lucide-react";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="hero-gradient absolute inset-0 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">
          <div className="text-center md:text-left md:w-3/4 lg:w-2/3 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Your Journey to a <span className="text-nutri-blue">Stronger</span>, <span className="text-nutri-orange">Healthier</span> You
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl md:mx-0 mx-auto">
              Personalized nutrition calculations, weight gain strategies, and muscle building guidance based on scientific principles.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-nutri-blue hover:bg-blue-600">
                <Link to="/calculator">
                  <Calculator className="mr-2 h-5 w-5" /> Calculate Your Needs
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/weight-gain">
                  <Weight className="mr-2 h-5 w-5" /> Weight Gain Guide
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">How NutriFit Pro Helps You</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Take the guesswork out of nutrition with our scientifically-backed tools and resources
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Calculator className="h-6 w-6 text-nutri-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personalized Calculations</h3>
                <p className="text-gray-600">
                  Get your BMR, TDEE, and personalized macro recommendations based on your unique attributes and goals.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="rounded-full bg-orange-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Weight className="h-6 w-6 text-nutri-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Weight Gain Strategies</h3>
                <p className="text-gray-600">
                  Learn effective, healthy approaches to gaining weight with nutritionally dense foods and optimal meal timing.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-nutri-green" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Muscle Building Nutrition</h3>
                <p className="text-gray-600">
                  Discover the optimal protein intake, nutrient timing, and supplementation strategies for muscle growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
            <p className="mt-4 text-gray-600">
              See how NutriFit Pro has helped others achieve their goals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">MJ</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael J.</h4>
                    <p className="text-sm text-gray-500">Gained 15 lbs of muscle</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The calculator helped me figure out exactly how many calories and how much protein I needed. Following the muscle building guide made all the difference in my training results."
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">SL</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah L.</h4>
                    <p className="text-sm text-gray-500">Reached healthy weight</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "As someone who has always struggled to gain weight, the strategies on this site finally helped me reach a healthy weight without resorting to junk food."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-nutri-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Ready to Transform Your Nutrition?</h2>
          <p className="mt-4 text-lg">
            Get your personalized nutrition plan based on scientific calculations, not guesswork.
          </p>
          <Button asChild size="lg" className="mt-6 bg-white text-nutri-blue hover:bg-gray-100">
            <Link to="/calculator">
              Get Started Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
