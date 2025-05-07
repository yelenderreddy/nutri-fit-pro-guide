
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const WeightGain = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Weight Gain Guide
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Evidence-based strategies to help you gain weight in a healthy, sustainable way
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 mb-12">
        <div className="md:flex md:items-center md:space-x-8">
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Your Path to Healthy Weight Gain</h2>
            <p className="text-gray-700 mb-6">
              Gaining weight can be as challenging for some people as losing weight is for others.
              This guide provides scientifically-backed strategies to help you increase your weight
              in a healthy way, focusing on building muscle and gaining strength rather than 
              accumulating unhealthy fat.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white font-bold">1</div>
                <p className="ml-3 text-gray-700">Create a caloric surplus of 300-500 calories per day</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white font-bold">2</div>
                <p className="ml-3 text-gray-700">Focus on nutrient-dense, whole foods</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white font-bold">3</div>
                <p className="ml-3 text-gray-700">Combine with strength training for muscle growth</p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white font-bold">4</div>
                <p className="ml-3 text-gray-700">Be consistent and patient with your approach</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-3">Need to know your calorie target?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Use our calculator to determine exactly how many calories you need to consume daily for healthy weight gain.
              </p>
              <Button asChild className="w-full">
                <Link to="/calculator">Calculate Your Needs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="basics" className="mb-12">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
          <TabsTrigger value="basics">The Basics</TabsTrigger>
          <TabsTrigger value="challenges">Common Challenges</TabsTrigger>
          <TabsTrigger value="foods">Best Foods</TabsTrigger>
          <TabsTrigger value="mealplans">Meal Plans</TabsTrigger>
        </TabsList>
        
        {/* The Basics Tab */}
        <TabsContent value="basics" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Understanding Healthy Weight Gain</h2>
            <p className="text-gray-700">
              Healthy weight gain focuses on increasing muscle mass along with some essential fat stores, rather than
              simply accumulating body fat. The key principle is creating a caloric surplus—consuming more calories
              than your body burns—while providing the proper nutrients for muscle growth and overall health.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Caloric Surplus</h3>
                <p className="text-gray-600 mb-4">
                  For healthy weight gain, aim for a moderate caloric surplus of 300-500 calories above your maintenance level daily.
                  This typically results in weight gain of 0.25-0.5 kg (0.5-1 lb) per week, which is an ideal rate for minimizing fat gain.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Too small a surplus: Weight gain will be very slow or nonexistent</li>
                  <li>Too large a surplus: Excessive fat gain rather than muscle</li>
                  <li>Optimal: 300-500 calories above maintenance daily</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Macronutrient Balance</h3>
                <p className="text-gray-600 mb-4">
                  Distribute your calories appropriately among the three macronutrients for optimal results:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li><span className="font-medium">Protein:</span> 1.6-2.2g per kg of bodyweight (0.7-1g per lb)</li>
                  <li><span className="font-medium">Carbohydrates:</span> 45-55% of total calories</li>
                  <li><span className="font-medium">Fats:</span> 25-35% of total calories</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-3">Timing & Frequency</h3>
            <p className="text-gray-700 mb-4">
              For those struggling to gain weight, meal timing and frequency can make a significant difference:
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                  <div>
                    <p className="font-medium">Eat more frequently</p>
                    <p className="text-gray-600 text-sm">Aim for 4-6 smaller meals instead of 2-3 large ones if you struggle with appetite</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                  <div>
                    <p className="font-medium">Never skip breakfast</p>
                    <p className="text-gray-600 text-sm">Starting your day with a substantial meal sets the tone for higher calorie intake</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                  <div>
                    <p className="font-medium">Eat before bed</p>
                    <p className="text-gray-600 text-sm">A protein-rich snack before sleep can support muscle recovery and growth</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white text-xs font-bold mr-3">✓</div>
                  <div>
                    <p className="font-medium">Post-workout nutrition</p>
                    <p className="text-gray-600 text-sm">Consume protein and carbohydrates within 45 minutes after training</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
        
        {/* Challenges Tab */}
        <TabsContent value="challenges" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Overcoming Common Weight Gain Challenges</h2>
            <p className="text-gray-700">
              Many people who struggle to gain weight face similar obstacles. Understanding these challenges
              and implementing specific strategies can help you overcome them and achieve your weight gain goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Small Appetite</h3>
                <p className="text-gray-600 mb-4">
                  One of the most common challenges for those trying to gain weight is simply not feeling hungry enough to eat the required calories.
                </p>
                <h4 className="font-semibold mb-2">Solutions:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Eat calorie-dense foods that don't fill you up as quickly</li>
                  <li>Drink calories (smoothies, milk, juice) between meals</li>
                  <li>Use larger plates to encourage larger portions</li>
                  <li>Add healthy fats like olive oil, avocado, or nuts to meals</li>
                  <li>Set meal reminders if you tend to forget to eat</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Fast Metabolism</h3>
                <p className="text-gray-600 mb-4">
                  Some people naturally have a higher metabolic rate, making it harder to maintain a caloric surplus.
                </p>
                <h4 className="font-semibold mb-2">Solutions:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Increase calorie intake beyond the standard surplus</li>
                  <li>Focus on resistance training over cardio exercise</li>
                  <li>Track calories meticulously to ensure you're actually in a surplus</li>
                  <li>Be patient—consistency over time is key</li>
                  <li>Consider adding an extra meal before bedtime</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Early Satiety</h3>
                <p className="text-gray-600 mb-4">
                  Feeling full quickly can make it challenging to consume enough calories in a sitting.
                </p>
                <h4 className="font-semibold mb-2">Solutions:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Eat more frequent, smaller meals throughout the day</li>
                  <li>Drink liquids between meals rather than with meals</li>
                  <li>Start with calorie-dense foods before filling up on vegetables</li>
                  <li>Use calorie-rich condiments and toppings</li>
                  <li>Wait 30 minutes after feeling full, then try to eat a bit more</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Inconsistency</h3>
                <p className="text-gray-600 mb-4">
                  Many weight gain attempts fail due to inconsistent eating patterns or giving up too soon.
                </p>
                <h4 className="font-semibold mb-2">Solutions:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Meal prep to ensure you always have food available</li>
                  <li>Track your progress to stay motivated</li>
                  <li>Create a structured eating schedule</li>
                  <li>Pack snacks for when you're away from home</li>
                  <li>Set realistic expectations—weight gain takes time</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Foods Tab */}
        <TabsContent value="foods" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Best Foods for Healthy Weight Gain</h2>
            <p className="text-gray-700">
              Focus on nutrient-dense, calorie-rich foods that provide not just energy, but also the vitamins,
              minerals, and macronutrients needed for overall health and muscle growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Protein-Rich Foods</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-blue rounded-full mr-2"></span>
                    <span>Lean meats (chicken, beef)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-blue rounded-full mr-2"></span>
                    <span>Fatty fish (salmon, mackerel)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-blue rounded-full mr-2"></span>
                    <span>Eggs (whole with yolks)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-blue rounded-full mr-2"></span>
                    <span>Greek yogurt</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-blue rounded-full mr-2"></span>
                    <span>Cottage cheese</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-blue rounded-full mr-2"></span>
                    <span>Whey protein</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Healthy Carbohydrates</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-green rounded-full mr-2"></span>
                    <span>Brown rice</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-green rounded-full mr-2"></span>
                    <span>Sweet potatoes</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-green rounded-full mr-2"></span>
                    <span>Oats</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-green rounded-full mr-2"></span>
                    <span>Whole grain pasta</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-green rounded-full mr-2"></span>
                    <span>Quinoa</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-green rounded-full mr-2"></span>
                    <span>Bananas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Healthy Fats</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-orange rounded-full mr-2"></span>
                    <span>Avocados</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-orange rounded-full mr-2"></span>
                    <span>Nuts (almonds, walnuts)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-orange rounded-full mr-2"></span>
                    <span>Seeds (chia, flax)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-orange rounded-full mr-2"></span>
                    <span>Olive oil</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-orange rounded-full mr-2"></span>
                    <span>Nut butters</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-nutri-orange rounded-full mr-2"></span>
                    <span>Full-fat dairy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-3">Calorie-Dense Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                    <span>Trail mix</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                    <span>Dried fruits</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                    <span>Granola</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                    <span>Smoothies</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                    <span>Dark chocolate</span>
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 bg-gray-500 rounded-full mr-2"></span>
                    <span>Whole milk</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Weight Gain Smoothie Recipes</h3>
            <p className="text-gray-700 mb-6">
              Liquid calories are an excellent way to increase your intake without feeling overly full. Try these nutrient-dense smoothies:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Peanut Butter Banana Smoothie</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>2 bananas</li>
                    <li>2 tbsp peanut butter</li>
                    <li>1 cup whole milk</li>
                    <li>1 scoop vanilla protein powder</li>
                    <li>1 tbsp honey</li>
                    <li>1/2 cup oats (optional)</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-500">
                    Approximately 700-800 calories
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Chocolate Avocado Smoothie</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>1 avocado</li>
                    <li>1 banana</li>
                    <li>2 tbsp cocoa powder</li>
                    <li>1 cup whole milk</li>
                    <li>1 scoop chocolate protein powder</li>
                    <li>1 tbsp maple syrup</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-500">
                    Approximately 650-750 calories
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">Berry Nut Smoothie</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>1 cup mixed berries</li>
                    <li>1/4 cup almonds</li>
                    <li>1 banana</li>
                    <li>1 cup Greek yogurt</li>
                    <li>1 tbsp honey</li>
                    <li>1 tbsp chia seeds</li>
                  </ul>
                  <p className="mt-3 text-sm text-gray-500">
                    Approximately 550-650 calories
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* Meal Plans Tab */}
        <TabsContent value="mealplans" className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Sample Meal Plans for Weight Gain</h2>
            <p className="text-gray-700">
              These meal plans provide examples of how to structure your eating for various calorie targets.
              Adjust portion sizes to meet your specific calorie needs as calculated in the nutrition calculator.
            </p>
          </div>
          
          <div className="space-y-8">
            {/* 2500 Calorie Plan */}
            <div>
              <h3 className="text-xl font-bold mb-3">2500 Calorie Plan</h3>
              <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foods</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calories</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Breakfast</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="list-disc list-inside">
                          <li>3 eggs scrambled</li>
                          <li>2 slices whole grain toast</li>
                          <li>1 tbsp butter</li>
                          <li>1 cup Greek yogurt with honey</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">650</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Snack</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="list-disc list-inside">
                          <li>1 apple</li>
                          <li>2 tbsp peanut butter</li>
                          <li>1 protein bar</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">400</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lunch</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="list-disc list-inside">
                          <li>Sandwich with 150g chicken breast</li>
                          <li>2 slices whole grain bread</li>
                          <li>1 tbsp mayonnaise</li>
                          <li>Lettuce, tomato, avocado</li>
                          <li>Side of mixed nuts (30g)</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">650</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Snack</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="list-disc list-inside">
                          <li>Protein shake (1 scoop whey)</li>
                          <li>1 banana</li>
                          <li>1 cup whole milk</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">350</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dinner</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="list-disc list-inside">
                          <li>200g salmon fillet</li>
                          <li>1 cup brown rice</li>
                          <li>1 tbsp olive oil</li>
                          <li>Mixed vegetables</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">650</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Total: Approximately 2500 calories, 140g protein, 280g carbs, 85g fats
              </p>
            </div>
            
            {/* 3000 Calorie Plan */}
            <div>
              <h3 className="text-xl font-bold mb-3">3000 Calorie Plan</h3>
              <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Meal</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Foods</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Calories</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Breakfast</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="list-disc list-inside">
                          <li>4 eggs scrambled</li>
                          <li>3 slices whole grain toast</li>
                          <li>2 tbsp butter</li>
                          <li>1 cup Greek yogurt with honey and granola</li>
                          <li>1 banana</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">850</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Snack</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="list-disc list-inside">
                          <li>1/2 cup trail mix</li>
                          <li>1 protein bar</li>
                          <li>1 cup whole milk</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">450</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Lunch</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="list-disc list-inside">
                          <li>200g chicken breast</li>
                          <li>1.5 cups brown rice</li>
                          <li>2 tbsp olive oil</li>
                          <li>Large avocado</li>
                          <li>Mixed vegetables</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">750</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Snack</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="list-disc list-inside">
                          <li>Peanut butter banana smoothie (recipe above)</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">700</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Dinner</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="list-disc list-inside">
                          <li>250g steak</li>
                          <li>Large sweet potato</li>
                          <li>2 tbsp butter</li>
                          <li>Side salad with olive oil dressing</li>
                        </ul>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">700</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Total: Approximately 3000 calories, 170g protein, 330g carbs, 105g fats
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-bold mb-3">Tips for Meal Planning Success</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-nutri-blue mr-2">•</span>
                <span>Prepare meals in advance to ensure you always have food available</span>
              </li>
              <li className="flex items-start">
                <span className="text-nutri-blue mr-2">•</span>
                <span>Eat even when not hungry if you're struggling to meet your calorie goals</span>
              </li>
              <li className="flex items-start">
                <span className="text-nutri-blue mr-2">•</span>
                <span>Track your calories for at least the first few weeks to ensure accuracy</span>
              </li>
              <li className="flex items-start">
                <span className="text-nutri-blue mr-2">•</span>
                <span>Focus on whole, nutrient-dense foods over processed "junk" calories</span>
              </li>
              <li className="flex items-start">
                <span className="text-nutri-blue mr-2">•</span>
                <span>Weight yourself weekly, not daily, to track progress consistently</span>
              </li>
            </ul>
          </div>
        </TabsContent>
      </Tabs>
      
      {/* Progress Tracking Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Tracking Your Progress</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">What to Track</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white text-xs font-bold mt-0.5">1</div>
                  <div className="ml-3">
                    <p className="font-medium">Body Weight</p>
                    <p className="text-sm text-gray-600">Weigh yourself once a week, at the same time of day (preferably morning after using the bathroom)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white text-xs font-bold mt-0.5">2</div>
                  <div className="ml-3">
                    <p className="font-medium">Calorie Intake</p>
                    <p className="text-sm text-gray-600">Track your daily calorie consumption to ensure you're consistently in a surplus</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white text-xs font-bold mt-0.5">3</div>
                  <div className="ml-3">
                    <p className="font-medium">Strength Progress</p>
                    <p className="text-sm text-gray-600">Monitor your performance in the gym to ensure you're gaining strength alongside weight</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-nutri-blue flex items-center justify-center text-white text-xs font-bold mt-0.5">4</div>
                  <div className="ml-3">
                    <p className="font-medium">Measurements</p>
                    <p className="text-sm text-gray-600">Take regular measurements of your chest, arms, waist, and legs to track muscle growth</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3">Making Adjustments</h3>
              <p className="text-gray-600 mb-4">
                Your body will adapt to your nutrition plan over time, which means you'll need to make adjustments to continue progressing:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-nutri-blue mr-2">•</span>
                  <span><strong>If not gaining weight:</strong> Increase daily calories by 200-300 and reassess after 1-2 weeks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nutri-blue mr-2">•</span>
                  <span><strong>If gaining too quickly:</strong> Reduce daily calories by 100-200 to slow the rate of gain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nutri-blue mr-2">•</span>
                  <span><strong>If gaining mostly fat:</strong> Ensure you're resistance training and slightly reduce calories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-nutri-blue mr-2">•</span>
                  <span><strong>If hitting plateaus:</strong> Consider cycling between higher and lower calorie periods</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to Start Your Weight Gain Journey?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Use our nutrition calculator to determine your exact calorie needs,
          then implement the strategies outlined in this guide for healthy, sustainable weight gain.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-nutri-blue hover:bg-blue-600">
            <Link to="/calculator">Calculate Your Needs</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/muscle-growth">Muscle Growth Guide</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WeightGain;
