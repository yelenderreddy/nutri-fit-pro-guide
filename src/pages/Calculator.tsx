
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  calculateBMR,
  calculateTDEE,
  calculateCalorieNeeds,
  calculateProteinNeeds,
  calculateMacros,
  calculateBMI,
  getBMICategory,
  inchesToCm,
  lbsToKg,
} from "@/utils/calculationUtils";

const Calculator = () => {
  const { toast } = useToast();
  const [measurementSystem, setMeasurementSystem] = useState<string>("metric");

  // Form inputs
  const [formData, setFormData] = useState({
    age: "",
    gender: "male",
    weight: "",
    weightUnit: "kg",
    height: "",
    heightUnit: "cm",
    feet: "",
    inches: "",
    activityLevel: "moderatelyActive",
    goal: "maintain",
  });

  // Results
  const [results, setResults] = useState<{
    bmr: number;
    tdee: number;
    calorieNeeds: number;
    proteinRange: { min: number; max: number };
    macros: { protein: number; carbs: number; fats: number };
    bmi: number;
    bmiCategory: string;
  } | null>(null);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle select changes
  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  // Handle measurement system change
  const handleMeasurementSystemChange = (system: string) => {
    setMeasurementSystem(system);
    setFormData({
      ...formData,
      weightUnit: system === "metric" ? "kg" : "lbs",
      heightUnit: system === "metric" ? "cm" : "ft/in",
    });
  };

  // Calculate results
  const calculateResults = () => {
    try {
      // Validate inputs
      const age = parseInt(formData.age);
      if (isNaN(age) || age <= 0 || age > 120) {
        toast({
          title: "Invalid Age",
          description: "Please enter a valid age between 1 and 120.",
          variant: "destructive",
        });
        return;
      }

      let weightKg: number;
      let heightCm: number;

      // Convert weight to kg if needed
      if (formData.weightUnit === "lbs") {
        weightKg = lbsToKg(parseFloat(formData.weight));
      } else {
        weightKg = parseFloat(formData.weight);
      }

      // Convert height to cm if needed
      if (formData.heightUnit === "ft/in") {
        const feet = parseInt(formData.feet) || 0;
        const inches = parseInt(formData.inches) || 0;
        heightCm = inchesToCm(feet, inches);
      } else {
        heightCm = parseFloat(formData.height);
      }

      // Validate converted values
      if (isNaN(weightKg) || weightKg <= 0) {
        toast({
          title: "Invalid Weight",
          description: "Please enter a valid weight.",
          variant: "destructive",
        });
        return;
      }

      if (isNaN(heightCm) || heightCm <= 0) {
        toast({
          title: "Invalid Height",
          description: "Please enter a valid height.",
          variant: "destructive",
        });
        return;
      }

      // Calculate BMR
      const bmr = Math.round(calculateBMR(weightKg, heightCm, age, formData.gender));

      // Calculate TDEE
      const tdee = Math.round(calculateTDEE(bmr, formData.activityLevel));

      // Calculate calorie needs based on goal
      const calorieNeeds = Math.round(calculateCalorieNeeds(tdee, formData.goal));

      // Calculate protein needs
      const proteinNeeds = calculateProteinNeeds(weightKg, formData.goal);

      // Calculate macronutrients
      const macros = calculateMacros(calorieNeeds, formData.goal, weightKg);

      // Calculate BMI
      const bmi = parseFloat(calculateBMI(weightKg, heightCm).toFixed(1));
      const bmiCategory = getBMICategory(bmi);

      // Set results
      setResults({
        bmr,
        tdee,
        calorieNeeds,
        proteinRange: { min: proteinNeeds.minProtein, max: proteinNeeds.maxProtein },
        macros,
        bmi,
        bmiCategory,
      });

      // Show success toast
      toast({
        title: "Calculation Complete",
        description: "Your personalized nutrition values have been calculated.",
      });
    } catch (error) {
      console.error("Calculation error:", error);
      toast({
        title: "Calculation Error",
        description: "There was an error calculating your results. Please check your inputs.",
        variant: "destructive",
      });
    }
  };

  // Print results
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Nutrition Calculator
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Get personalized nutrition recommendations based on your body metrics,
          activity level, and fitness goals.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card>
          <CardHeader>
            <CardTitle>Your Information</CardTitle>
            <CardDescription>
              Enter your details to calculate your personalized nutrition plan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              defaultValue="metric"
              value={measurementSystem}
              onValueChange={handleMeasurementSystemChange}
              className="mb-6"
            >
              <TabsList className="w-full">
                <TabsTrigger value="metric" className="flex-1">
                  Metric (kg/cm)
                </TabsTrigger>
                <TabsTrigger value="imperial" className="flex-1">
                  Imperial (lbs/ft)
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Years"
                    value={formData.age}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    value={formData.gender}
                    onValueChange={(value) =>
                      handleSelectChange("gender", value)
                    }
                  >
                    <SelectTrigger id="gender">
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Weight Input */}
              <div className="space-y-2">
                <Label htmlFor="weight">Weight</Label>
                {measurementSystem === "metric" ? (
                  <div className="relative">
                    <Input
                      id="weight"
                      name="weight"
                      type="number"
                      placeholder="Weight in kg"
                      value={formData.weight}
                      onChange={handleInputChange}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">kg</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative">
                    <Input
                      id="weight"
                      name="weight"
                      type="number"
                      placeholder="Weight in lbs"
                      value={formData.weight}
                      onChange={handleInputChange}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">lbs</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Height Input */}
              <div className="space-y-2">
                <Label htmlFor="height">Height</Label>
                {measurementSystem === "metric" ? (
                  <div className="relative">
                    <Input
                      id="height"
                      name="height"
                      type="number"
                      placeholder="Height in cm"
                      value={formData.height}
                      onChange={handleInputChange}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500">cm</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <div className="relative">
                      <Input
                        id="feet"
                        name="feet"
                        type="number"
                        placeholder="Feet"
                        value={formData.feet}
                        onChange={handleInputChange}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">ft</span>
                      </div>
                    </div>
                    <div className="relative">
                      <Input
                        id="inches"
                        name="inches"
                        type="number"
                        placeholder="Inches"
                        value={formData.inches}
                        onChange={handleInputChange}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">in</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="activityLevel">Activity Level</Label>
                <Select
                  value={formData.activityLevel}
                  onValueChange={(value) =>
                    handleSelectChange("activityLevel", value)
                  }
                >
                  <SelectTrigger id="activityLevel">
                    <SelectValue placeholder="Select activity level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="sedentary">
                        Sedentary (little or no exercise)
                      </SelectItem>
                      <SelectItem value="lightlyActive">
                        Lightly Active (light exercise 1-3 days/week)
                      </SelectItem>
                      <SelectItem value="moderatelyActive">
                        Moderately Active (moderate exercise 3-5 days/week)
                      </SelectItem>
                      <SelectItem value="veryActive">
                        Very Active (hard exercise 6-7 days/week)
                      </SelectItem>
                      <SelectItem value="extremelyActive">
                        Extremely Active (very hard exercise, physical job)
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="goal">Your Goal</Label>
                <Select
                  value={formData.goal}
                  onValueChange={(value) => handleSelectChange("goal", value)}
                >
                  <SelectTrigger id="goal">
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="maintain">Maintain Weight</SelectItem>
                      <SelectItem value="lose">Lose Weight</SelectItem>
                      <SelectItem value="gain">Gain Weight</SelectItem>
                      <SelectItem value="buildMuscle">Build Muscle</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculateResults} className="w-full">
                Calculate
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className={`${results ? "opacity-100" : "opacity-50"}`}>
          <CardHeader>
            <CardTitle>Your Results</CardTitle>
            <CardDescription>
              Based on your age, body metrics, activity level, and goals
            </CardDescription>
          </CardHeader>
          <CardContent>
            {results ? (
              <div className="space-y-6">
                {/* BMI */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Label>Your BMI</Label>
                    <span className="font-bold">{results.bmi}</span>
                  </div>
                  <Progress value={(results.bmi / 40) * 100} className="h-3" />
                  <div className="text-sm text-gray-500 text-right">
                    Category: {results.bmiCategory}
                  </div>
                </div>

                <Separator />

                {/* Energy Needs */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Energy Needs</h3>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-500">BMR</div>
                      <div className="font-bold text-xl">{results.bmr}</div>
                      <div className="text-xs text-gray-500">calories/day</div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-500">TDEE</div>
                      <div className="font-bold text-xl">{results.tdee}</div>
                      <div className="text-xs text-gray-500">calories/day</div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-700">Target</div>
                      <div className="font-bold text-xl text-nutri-blue">{results.calorieNeeds}</div>
                      <div className="text-xs text-gray-700">calories/day</div>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Protein Needs */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Protein Needs</h3>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-500">Daily Protein Intake</span>
                      <span className="font-bold">
                        {results.proteinRange.min}-{results.proteinRange.max} g
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">
                      For optimal {formData.goal === "buildMuscle" ? "muscle building" : formData.goal === "lose" ? "muscle preservation while losing weight" : "health"}
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Macronutrients */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Macronutrient Breakdown</h3>
                  
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-700">Protein</div>
                      <div className="font-bold text-lg">{results.macros.protein}g</div>
                      <div className="text-xs text-gray-700">{Math.round((results.macros.protein * 4 / results.calorieNeeds) * 100)}% of calories</div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-700">Carbs</div>
                      <div className="font-bold text-lg">{results.macros.carbs}g</div>
                      <div className="text-xs text-gray-700">{Math.round((results.macros.carbs * 4 / results.calorieNeeds) * 100)}% of calories</div>
                    </div>
                    
                    <div className="bg-yellow-50 p-4 rounded-lg text-center">
                      <div className="text-sm text-gray-700">Fats</div>
                      <div className="font-bold text-lg">{results.macros.fats}g</div>
                      <div className="text-xs text-gray-700">{Math.round((results.macros.fats * 9 / results.calorieNeeds) * 100)}% of calories</div>
                    </div>
                  </div>
                </div>

                <Button onClick={handlePrint} variant="outline" className="mt-6 w-full">
                  Print / Save Results
                </Button>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  Fill in your information and click "Calculate" to see your personalized results here.
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Information Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-6">Understanding Your Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>What do these numbers mean?</CardTitle>
            </CardHeader>
            <CardContent>
              <dl className="space-y-4">
                <div>
                  <dt className="font-semibold">BMR (Basal Metabolic Rate):</dt>
                  <dd className="text-gray-600">
                    The number of calories your body needs to maintain basic physiological functions while at rest.
                  </dd>
                </div>
                
                <div>
                  <dt className="font-semibold">TDEE (Total Daily Energy Expenditure):</dt>
                  <dd className="text-gray-600">
                    Your BMR plus additional calories burned through daily activities and exercise.
                  </dd>
                </div>
                
                <div>
                  <dt className="font-semibold">Target Calories:</dt>
                  <dd className="text-gray-600">
                    Adjusted calorie intake based on your goal (maintenance, weight loss, weight gain, or muscle building).
                  </dd>
                </div>
                
                <div>
                  <dt className="font-semibold">BMI (Body Mass Index):</dt>
                  <dd className="text-gray-600">
                    A measure of body fat based on height and weight. While useful, it doesn't account for muscle mass or body composition.
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>These calculations are estimates based on established formulas.</li>
                <li>Individual results may vary based on metabolism, genetics, and other factors.</li>
                <li>For weight gain, aim for 0.25-0.5kg (0.5-1lb) per week for healthy progress.</li>
                <li>For weight loss, a maximum deficit of 500-1000 calories per day is recommended.</li>
                <li>Protein needs are higher for active individuals and those looking to build muscle.</li>
                <li>Consult with a healthcare professional before making significant changes to your diet.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
