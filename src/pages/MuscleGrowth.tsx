
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const MuscleGrowth = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Muscle Growth Nutrition
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Evidence-based strategies for optimizing your nutrition to support muscle growth and recovery
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 md:p-12 mb-12">
        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Build Muscle Through Science-Based Nutrition</h2>
            <p className="text-gray-700 mb-6">
              Building muscle requires more than just lifting weights—proper nutrition is equally important.
              This guide covers the key nutritional strategies that can help maximize your muscle growth,
              enhance recovery, and optimize your training results.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white font-bold">1</div>
                <p className="ml-3 text-gray-700">Maintain a moderate caloric surplus</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white font-bold">2</div>
                <p className="ml-3 text-gray-700">Consume adequate protein (1.6-2.2g per kg of bodyweight)</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white font-bold">3</div>
                <p className="ml-3 text-gray-700">Optimize meal timing around workouts</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white font-bold">4</div>
                <p className="ml-3 text-gray-700">Consider strategic supplementation</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-3">Calculate Your Protein Needs</h3>
              <p className="text-gray-600 text-sm mb-4">
                Use our calculator to determine your ideal daily protein and calorie intake for optimal muscle growth.
              </p>
              <Button asChild className="w-full">
                <Link to="/calculator">Calculate Your Needs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="protein" className="mb-12">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="protein">Protein</TabsTrigger>
          <TabsTrigger value="macros">Macronutrients</TabsTrigger>
          <TabsTrigger value="timing">Meal Timing</TabsTrigger>
          <TabsTrigger value="supplements">Supplements</TabsTrigger>
        </TabsList>
        
        {/* Protein Tab */}
        <TabsContent value="protein" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Protein Requirements for Muscle Building</h2>
            <p className="text-gray-700">
              Protein is the primary building block for muscle tissue. Without adequate protein intake,
              your body cannot effectively repair and build new muscle fibers after training. Let's explore how
              much protein you need and the best sources to consider.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">How Much Protein Do You Need?</h3>
                <p className="text-gray-600 mb-4">
                  Research suggests the following protein requirements for muscle building:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-blue rounded-full mr-2"></span>
                    <span><strong>Minimal:</strong> 1.6g per kg of bodyweight (0.73g per lb)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-blue rounded-full mr-2"></span>
                    <span><strong>Optimal:</strong> 1.8-2.2g per kg of bodyweight (0.82-1g per lb)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-blue rounded-full mr-2"></span>
                    <span><strong>Upper limit benefit:</strong> 2.2g per kg of bodyweight</span>
                  </li>
                </ul>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Example:</strong> A 75kg (165lb) person should consume approximately 135-165g 
                    of protein daily for optimal muscle growth.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Protein Distribution</h3>
                <p className="text-gray-600 mb-4">
                  To maximize muscle protein synthesis, consider these guidelines:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-nutri-blue rounded-full mr-2 mt-1"></span>
                    <div>
                      <span className="font-medium">Spread protein throughout the day</span>
                      <p className="text-sm">Consume protein across 4-5 meals spaced 3-4 hours apart</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-nutri-blue rounded-full mr-2 mt-1"></span>
                    <div>
                      <span className="font-medium">Optimal per-meal amount</span>
                      <p className="text-sm">Aim for 0.4-0.5g protein per kg bodyweight per meal</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-nutri-blue rounded-full mr-2 mt-1"></span>
                    <div>
                      <span className="font-medium">Pre-sleep protein</span>
                      <p className="text-sm">Consuming 30-40g of slow-digesting protein before bed can enhance overnight recovery</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quality Protein Sources</h3>
            <p className="text-gray-700 mb-6">
              Not all protein sources are equal. Focus on complete proteins that provide all essential amino acids,
              particularly leucine, which plays a key role in stimulating muscle protein synthesis.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {/* Protein Source Cards */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div className="p-4 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">A+</span>
                  </div>
                  <h4 className="font-semibold text-sm">Chicken Breast</h4>
                  <p className="text-xs text-gray-500 mt-1">31g / 100g</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div className="p-4 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">A+</span>
                  </div>
                  <h4 className="font-semibold text-sm">Lean Beef</h4>
                  <p className="text-xs text-gray-500 mt-1">26g / 100g</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div className="p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">A+</span>
                  </div>
                  <h4 className="font-semibold text-sm">Salmon</h4>
                  <p className="text-xs text-gray-500 mt-1">25g / 100g</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div className="p-4 text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-sm">A</span>
                  </div>
                  <h4 className="font-semibold text-sm">Eggs</h4>
                  <p className="text-xs text-gray-500 mt-1">13g / 2 eggs</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div className="p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">A</span>
                  </div>
                  <h4 className="font-semibold text-sm">Greek Yogurt</h4>
                  <p className="text-xs text-gray-500 mt-1">10g / 100g</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div className="p-4 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">A</span>
                  </div>
                  <h4 className="font-semibold text-sm">Whey Protein</h4>
                  <p className="text-xs text-gray-500 mt-1">24g / 30g scoop</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div className="p-4 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">B+</span>
                  </div>
                  <h4 className="font-semibold text-sm">Tofu</h4>
                  <p className="text-xs text-gray-500 mt-1">8g / 100g</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div className="p-4 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-green-600 font-bold text-sm">B</span>
                  </div>
                  <h4 className="font-semibold text-sm">Legumes</h4>
                  <p className="text-xs text-gray-500 mt-1">9g / 100g</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div className="p-4 text-center">
                  <div className="w-12 h-12 bg-brown-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-yellow-800 font-bold text-sm">B</span>
                  </div>
                  <h4 className="font-semibold text-sm">Quinoa</h4>
                  <p className="text-xs text-gray-500 mt-1">4g / 100g</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div className="p-4 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">A</span>
                  </div>
                  <h4 className="font-semibold text-sm">Cottage Cheese</h4>
                  <p className="text-xs text-gray-500 mt-1">11g / 100g</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div className="p-4 text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-yellow-600 font-bold text-sm">B+</span>
                  </div>
                  <h4 className="font-semibold text-sm">Nuts</h4>
                  <p className="text-xs text-gray-500 mt-1">20g / 100g</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border">
                <div className="p-4 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">A-</span>
                  </div>
                  <h4 className="font-semibold text-sm">Casein Protein</h4>
                  <p className="text-xs text-gray-500 mt-1">24g / 30g scoop</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> Animal proteins typically have a higher biological value and more complete amino acid profile than plant proteins.
                If following a plant-based diet, combine different protein sources to ensure you get all essential amino acids.
              </p>
            </div>
          </div>
        </TabsContent>
        
        {/* Macronutrients Tab */}
        <TabsContent value="macros" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Balancing Macronutrients for Muscle Growth</h2>
            <p className="text-gray-700">
              While protein is crucial for muscle growth, carbohydrates and fats also play important roles in
              fueling workouts, optimizing recovery, and supporting hormone production.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-blue-600">P</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Protein</h3>
                <Separator className="my-2" />
                <p className="text-gray-600 mb-4 text-center">
                  The building blocks of muscle tissue
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>1.6-2.2g per kg of bodyweight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>25-30% of total calories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Prioritize complete protein sources</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Distribute evenly throughout the day</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-green-600">C</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Carbohydrates</h3>
                <Separator className="my-2" />
                <p className="text-gray-600 mb-4 text-center">
                  Primary energy source for intense workouts
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-nutri-green mr-2">•</span>
                    <span>4-7g per kg of bodyweight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-green mr-2">•</span>
                    <span>45-55% of total calories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-green mr-2">•</span>
                    <span>Focus on complex carbs for sustained energy</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-green mr-2">•</span>
                    <span>Higher intake around workouts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-yellow-100 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-yellow-600">F</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Fats</h3>
                <Separator className="my-2" />
                <p className="text-gray-600 mb-4 text-center">
                  Essential for hormone production
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-nutri-orange mr-2">•</span>
                    <span>0.8-1g per kg of bodyweight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-orange mr-2">•</span>
                    <span>20-30% of total calories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-orange mr-2">•</span>
                    <span>Include omega-3 fatty acids</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-orange mr-2">•</span>
                    <span>Focus on unsaturated sources</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">The Importance of Carbohydrates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  Carbohydrates are crucial for muscle building because they:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-bold text-nutri-green mr-2">1.</span>
                    <span>Fuel high-intensity workouts, allowing you to train harder</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-nutri-green mr-2">2.</span>
                    <span>Replenish muscle glycogen stores post-workout</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-nutri-green mr-2">3.</span>
                    <span>Stimulate insulin release, which helps transport nutrients to muscles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-nutri-green mr-2">4.</span>
                    <span>Spare protein, allowing it to be used for muscle repair rather than energy</span>
                  </li>
                </ul>
                
                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <p className="text-sm text-gray-700">
                    <strong>Pro Tip:</strong> Low-carb diets are generally not optimal for maximizing muscle growth. Ensure adequate carbohydrate intake to fuel your workouts and recovery.
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Best Carbohydrate Sources for Muscle Building</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-3 rounded-lg border shadow-sm">
                    <h5 className="font-medium text-sm mb-1">Pre-Workout</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Oatmeal</li>
                      <li>• Bananas</li>
                      <li>• Rice</li>
                      <li>• Whole grain bread</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg border shadow-sm">
                    <h5 className="font-medium text-sm mb-1">Post-Workout</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• White rice</li>
                      <li>• Potatoes</li>
                      <li>• Sports drinks</li>
                      <li>• Fruits</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg border shadow-sm mt-2">
                    <h5 className="font-medium text-sm mb-1">General</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sweet potatoes</li>
                      <li>• Quinoa</li>
                      <li>• Brown rice</li>
                      <li>• Whole grains</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg border shadow-sm mt-2">
                    <h5 className="font-medium text-sm mb-1">Limited</h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Sugary cereals</li>
                      <li>• Candy</li>
                      <li>• Pastries</li>
                      <li>• Soda</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">The Role of Healthy Fats</h3>
            <p className="text-gray-700 mb-4">
              Don't fear dietary fat—it's essential for muscle growth and overall health.
              Healthy fats support hormone production, including testosterone and growth hormone,
              which are crucial for building muscle.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">Best Sources of Healthy Fats</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <h5 className="font-medium text-sm mb-1 text-nutri-orange">Monounsaturated</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Olive oil</li>
                        <li>• Avocados</li>
                        <li>• Nuts (almonds, cashews)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-sm mb-1 text-blue-500">Polyunsaturated</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Fatty fish (salmon, mackerel)</li>
                        <li>• Flaxseeds</li>
                        <li>• Walnuts</li>
                      </ul>
                    </div>
                    
                    <div className="mt-3">
                      <h5 className="font-medium text-sm mb-1 text-yellow-600">Saturated (moderate)</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Eggs</li>
                        <li>• Grass-fed butter</li>
                        <li>• Coconut oil</li>
                      </ul>
                    </div>
                    
                    <div className="mt-3">
                      <h5 className="font-medium text-sm mb-1 text-red-500">Avoid</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Trans fats</li>
                        <li>• Heavily processed oils</li>
                        <li>• Fried foods</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">Fat's Role in Muscle Building</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-nutri-orange rounded-full mr-2 mt-1"></span>
                      <div>
                        <span className="font-medium">Hormone Production</span>
                        <p className="text-sm">Supports natural testosterone and growth hormone levels</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-nutri-orange rounded-full mr-2 mt-1"></span>
                      <div>
                        <span className="font-medium">Vitamin Absorption</span>
                        <p className="text-sm">Helps absorb fat-soluble vitamins A, D, E, and K</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-nutri-orange rounded-full mr-2 mt-1"></span>
                      <div>
                        <span className="font-medium">Recovery Support</span>
                        <p className="text-sm">Omega-3 fatty acids help reduce inflammation from training</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-3 h-3 bg-nutri-orange rounded-full mr-2 mt-1"></span>
                      <div>
                        <span className="font-medium">Energy Source</span>
                        <p className="text-sm">Provides energy during lower-intensity activities</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* Meal Timing Tab */}
        <TabsContent value="timing" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Strategic Meal Timing for Muscle Growth</h2>
            <p className="text-gray-700">
              When you eat can be almost as important as what you eat. Strategic nutrient timing can
              maximize muscle protein synthesis, improve workout performance, and enhance recovery.
            </p>
          </div>
          
          <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Daily Meal Structure for Muscle Growth</h3>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                
                {/* Timeline Events */}
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nutri-blue flex items-center justify-center z-10">
                      <span className="text-white font-bold text-xs">1</span>
                    </div>
                    <div className="ml-6">
                      <h4 className="font-semibold">Breakfast (7-8 AM)</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Break the overnight fast with a protein-rich meal to stop muscle breakdown.
                      </p>
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-600">
                        <strong>Example:</strong> 3 eggs with oatmeal and berries
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nutri-blue flex items-center justify-center z-10">
                      <span className="text-white font-bold text-xs">2</span>
                    </div>
                    <div className="ml-6">
                      <h4 className="font-semibold">Mid-Morning Snack (10-11 AM)</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Maintain protein synthesis and stable energy levels.
                      </p>
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-600">
                        <strong>Example:</strong> Greek yogurt with nuts and honey
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nutri-blue flex items-center justify-center z-10">
                      <span className="text-white font-bold text-xs">3</span>
                    </div>
                    <div className="ml-6">
                      <h4 className="font-semibold">Lunch (1-2 PM)</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Balanced meal with protein, complex carbs, and healthy fats.
                      </p>
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-600">
                        <strong>Example:</strong> Chicken breast, brown rice, vegetables, and avocado
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nutri-green flex items-center justify-center z-10">
                      <span className="text-white font-bold text-xs">4</span>
                    </div>
                    <div className="ml-6">
                      <h4 className="font-semibold">Pre-Workout Meal (30-90 min before training)</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Focus on easily digestible carbs and moderate protein. Limit fat and fiber.
                      </p>
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-600">
                        <strong>Example:</strong> Banana and whey protein shake
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nutri-orange flex items-center justify-center z-10">
                      <span className="text-white font-bold text-xs">5</span>
                    </div>
                    <div className="ml-6">
                      <h4 className="font-semibold">Post-Workout Meal (Within 30-45 min after training)</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Rapidly digestible protein and carbs to kickstart recovery and replenish glycogen.
                      </p>
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-600">
                        <strong>Example:</strong> Whey protein shake with fruit or dextrose
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nutri-blue flex items-center justify-center z-10">
                      <span className="text-white font-bold text-xs">6</span>
                    </div>
                    <div className="ml-6">
                      <h4 className="font-semibold">Dinner (7-8 PM)</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Complete meal with protein, carbs, and vegetables.
                      </p>
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-600">
                        <strong>Example:</strong> Salmon, sweet potatoes, and steamed vegetables
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-nutri-blue flex items-center justify-center z-10">
                      <span className="text-white font-bold text-xs">7</span>
                    </div>
                    <div className="ml-6">
                      <h4 className="font-semibold">Pre-Bed Meal (30-60 min before sleep)</h4>
                      <p className="text-gray-600 text-sm mb-2">
                        Slow-digesting protein to support overnight recovery.
                      </p>
                      <div className="bg-gray-50 p-2 rounded text-sm text-gray-600">
                        <strong>Example:</strong> Casein protein shake or cottage cheese with berries
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">The Anabolic Window</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">The Traditional View</h4>
                  <p className="text-gray-600 mb-4">
                    Traditionally, the "anabolic window" was believed to be a narrow 30-45 minute period
                    after training when muscles were most receptive to nutrients.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-nutri-blue mr-2">•</span>
                      <span>Immediate post-workout nutrition was considered critical</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-nutri-blue mr-2">•</span>
                      <span>Rush to consume protein and fast-acting carbs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-nutri-blue mr-2">•</span>
                      <span>Focus on liquid nutrition for faster absorption</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-3">The Modern Understanding</h4>
                  <p className="text-gray-600 mb-4">
                    Current research suggests the anabolic window is much wider than previously thought.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-nutri-green mr-2">•</span>
                      <span>The window extends several hours before and after training</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-nutri-green mr-2">•</span>
                      <span>If you've eaten a pre-workout meal, post-workout timing is less critical</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-nutri-green mr-2">•</span>
                      <span>Total daily protein intake matters more than precise timing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-nutri-green mr-2">•</span>
                      <span>Still beneficial to eat within 2 hours of training</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h4 className="font-semibold mb-3">Key Takeaways on Meal Timing</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white text-xs font-bold mt-0.5">1</div>
                  <div className="ml-3">
                    <p className="font-medium">Total daily protein is most important</p>
                    <p className="text-sm text-gray-600">Hit your overall protein target across the day</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
                  <div className="ml-3">
                    <p className="font-medium">Distribute protein across 4-5 meals</p>
                    <p className="text-sm text-gray-600">This maximizes muscle protein synthesis throughout the day</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
                  <div className="ml-3">
                    <p className="font-medium">Pre- and post-workout nutrition matters</p>
                    <p className="text-sm text-gray-600">Ensure you have nutrients available around your training window</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white text-xs font-bold mt-0.5">4</div>
                  <div className="ml-3">
                    <p className="font-medium">Don't stress about exact timing</p>
                    <p className="text-sm text-gray-600">Being consistent with overall nutrition is more important than perfect meal timing</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        
        {/* Supplements Tab */}
        <TabsContent value="supplements" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Evidence-Based Supplements for Muscle Growth</h2>
            <p className="text-gray-700">
              While whole foods should form the foundation of your nutrition plan, certain supplements can help
              enhance muscle growth when used correctly. Here we focus only on supplements with strong scientific evidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Protein Powder</h3>
                <div className="text-center mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Strong Evidence
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-center">
                  Convenient way to meet protein requirements
                </p>
                
                <h4 className="font-semibold mb-2">Types:</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <div>
                      <span className="font-medium">Whey</span> - Fast-absorbing, ideal post-workout
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <div>
                      <span className="font-medium">Casein</span> - Slow-digesting, good before bed
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <div>
                      <span className="font-medium">Plant-based</span> - Options for vegetarians/vegans
                    </div>
                  </li>
                </ul>
                
                <h4 className="font-semibold mb-2">Dosage:</h4>
                <p className="text-gray-600 mb-2">
                  20-40g per serving, 1-2 servings daily as needed to meet protein targets
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Creatine</h3>
                <div className="text-center mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Strong Evidence
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-center">
                  The most researched and effective supplement for strength and muscle growth
                </p>
                
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Increases phosphocreatine stores in muscles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Improves strength and power output</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Enhances workout performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Aids in muscle cell volumization</span>
                  </li>
                </ul>
                
                <h4 className="font-semibold mb-2">Dosage:</h4>
                <p className="text-gray-600">
                  3-5g of creatine monohydrate daily, timing doesn't matter
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Beta-Alanine</h3>
                <div className="text-center mb-3">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                    Moderate Evidence
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-center">
                  Improves muscular endurance during high-intensity exercise
                </p>
                
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Increases muscle carnosine levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Buffers lactic acid buildup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Helps you perform more reps in the 8-15 range</span>
                  </li>
                </ul>
                
                <h4 className="font-semibold mb-2">Dosage:</h4>
                <p className="text-gray-600">
                  3-5g daily, can be split into smaller doses to reduce tingling sensation
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Caffeine</h3>
                <div className="text-center mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                    Strong Evidence
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-center">
                  Powerful ergogenic aid that enhances performance and focus
                </p>
                
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Increases alertness and focus</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Reduces perceived exertion</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Improves strength and endurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Enhances fat mobilization</span>
                  </li>
                </ul>
                
                <h4 className="font-semibold mb-2">Dosage:</h4>
                <p className="text-gray-600">
                  3-6mg per kg of bodyweight, 30-60 minutes pre-workout
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-blue-600">5</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Citrulline Malate</h3>
                <div className="text-center mb-3">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                    Moderate Evidence
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-center">
                  Enhances blood flow and reduces muscle soreness
                </p>
                
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Increases nitric oxide production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Improves nutrient delivery to muscles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Reduces post-exercise muscle soreness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>May allow for higher training volume</span>
                  </li>
                </ul>
                
                <h4 className="font-semibold mb-2">Dosage:</h4>
                <p className="text-gray-600">
                  6-8g about 30-60 minutes before training
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                  <span className="font-bold text-blue-600">6</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Vitamin D</h3>
                <div className="text-center mb-3">
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded">
                    Moderate Evidence
                  </span>
                </div>
                <p className="text-gray-600 mb-4 text-center">
                  Important for overall health and optimal testosterone levels
                </p>
                
                <h4 className="font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Supports healthy testosterone levels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Improves bone health</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>Enhances immune function</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-nutri-blue mr-2">•</span>
                    <span>May improve muscle function and recovery</span>
                  </li>
                </ul>
                
                <h4 className="font-semibold mb-2">Dosage:</h4>
                <p className="text-gray-600">
                  1000-2000 IU daily, ideally based on blood test results
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-3">Supplement Safety and Guidelines</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">!</div>
                <div className="ml-3">
                  <p className="font-medium">Supplements are not magic</p>
                  <p className="text-sm text-gray-700">They should complement a solid nutrition and training plan, not replace it</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">!</div>
                <div className="ml-3">
                  <p className="font-medium">Look for quality</p>
                  <p className="text-sm text-gray-700">Choose products that have been third-party tested for purity and label accuracy</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">!</div>
                <div className="ml-3">
                  <p className="font-medium">Be skeptical of extraordinary claims</p>
                  <p className="text-sm text-gray-700">If it sounds too good to be true, it probably is</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-500 flex items-center justify-center text-white text-xs font-bold mt-0.5">!</div>
                <div className="ml-3">
                  <p className="font-medium">Consult healthcare providers</p>
                  <p className="text-sm text-gray-700">Particularly if you have underlying health conditions or take medications</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Overhyped Supplements</h3>
                <p className="text-gray-600 mb-4">
                  These supplements have limited or conflicting evidence for muscle building:
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <div>
                      <span className="font-medium">BCAAs (Branched Chain Amino Acids)</span>
                      <p className="text-sm">Unnecessary if you're consuming adequate protein</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <div>
                      <span className="font-medium">Glutamine</span>
                      <p className="text-sm">Abundant in protein-rich foods, supplementation shows minimal benefits</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <div>
                      <span className="font-medium">Testosterone Boosters</span>
                      <p className="text-sm">Most have minimal effect on testosterone levels in healthy individuals</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    <div>
                      <span className="font-medium">Mass Gainers</span>
                      <p className="text-sm">Often just protein powder with added sugar; whole foods are better</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Building an Effective Stack</h3>
                <p className="text-gray-600 mb-4">
                  If you're considering supplements, here's a sensible approach:
                </p>
                <ol className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="font-bold text-nutri-blue mr-2">1.</span>
                    <span>Start with the basics: protein powder and creatine</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-nutri-blue mr-2">2.</span>
                    <span>Add a pre-workout (caffeine-based) if you train early or need an energy boost</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-nutri-blue mr-2">3.</span>
                    <span>Consider vitamin D if you have limited sun exposure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-nutri-blue mr-2">4.</span>
                    <span>Add other evidence-based supplements one at a time to assess individual effects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold text-nutri-blue mr-2">5.</span>
                    <span>Keep it simple—more supplements doesn't mean better results</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Sample Recipe Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">High-Protein Recipes for Muscle Growth</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-hover">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Protein-Packed Oatmeal</h3>
              <p className="text-gray-600 mb-4">
                A perfect breakfast option with 30g of protein
              </p>
              
              <h4 className="font-medium mb-2">Ingredients:</h4>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>1 cup rolled oats</li>
                <li>1 scoop whey protein powder</li>
                <li>1 tbsp peanut butter</li>
                <li>1 banana, sliced</li>
                <li>1 tbsp honey</li>
                <li>¼ cup Greek yogurt</li>
                <li>Cinnamon to taste</li>
              </ul>
              
              <h4 className="font-medium mb-2">Instructions:</h4>
              <ol className="list-decimal list-inside text-gray-600">
                <li>Cook oats according to package instructions</li>
                <li>Let cool slightly before stirring in protein powder</li>
                <li>Top with remaining ingredients</li>
              </ol>
              
              <div className="mt-4 text-sm text-gray-500">
                Approximately 500 calories, 30g protein, 65g carbs, 15g fat
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Muscle-Building Chicken Bowl</h3>
              <p className="text-gray-600 mb-4">
                Perfect post-workout meal with balanced macros
              </p>
              
              <h4 className="font-medium mb-2">Ingredients:</h4>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>200g chicken breast, grilled</li>
                <li>1 cup brown rice, cooked</li>
                <li>1 cup mixed vegetables</li>
                <li>½ avocado, sliced</li>
                <li>1 tbsp olive oil</li>
                <li>Lemon juice, salt, pepper to taste</li>
              </ul>
              
              <h4 className="font-medium mb-2">Instructions:</h4>
              <ol className="list-decimal list-inside text-gray-600">
                <li>Season and grill chicken until fully cooked</li>
                <li>Arrange rice, vegetables, and chicken in a bowl</li>
                <li>Top with avocado and drizzle with olive oil</li>
                <li>Season with lemon juice, salt, and pepper</li>
              </ol>
              
              <div className="mt-4 text-sm text-gray-500">
                Approximately 650 calories, 45g protein, 55g carbs, 25g fat
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Bedtime Protein Smoothie</h3>
              <p className="text-gray-600 mb-4">
                Slow-digesting protein for overnight muscle recovery
              </p>
              
              <h4 className="font-medium mb-2">Ingredients:</h4>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                <li>1 scoop casein protein powder</li>
                <li>1 cup whole milk</li>
                <li>1 tbsp natural peanut butter</li>
                <li>½ frozen banana</li>
                <li>¼ cup Greek yogurt</li>
                <li>1 tbsp honey</li>
                <li>Ice cubes</li>
              </ul>
              
              <h4 className="font-medium mb-2">Instructions:</h4>
              <ol className="list-decimal list-inside text-gray-600">
                <li>Add all ingredients to a blender</li>
                <li>Blend until smooth and creamy</li>
                <li>Adjust thickness with ice or milk as needed</li>
              </ol>
              
              <div className="mt-4 text-sm text-gray-500">
                Approximately 450 calories, 35g protein, 35g carbs, 18g fat
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Start Building Muscle?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Use our nutrition calculator to determine your exact protein and calorie needs,
          then implement the nutritional strategies outlined in this guide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-nutri-blue hover:bg-blue-600">
            <Link to="/calculator">Calculate Your Needs</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/weight-gain">Weight Gain Guide</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MuscleGrowth;
