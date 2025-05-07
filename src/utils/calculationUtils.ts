
// Weight and height conversion functions
export const lbsToKg = (lbs: number): number => {
  return lbs * 0.453592;
};

export const kgToLbs = (kg: number): number => {
  return kg * 2.20462;
};

export const inchesToCm = (feet: number, inches: number): number => {
  const totalInches = feet * 12 + inches;
  return totalInches * 2.54;
};

export const cmToFeetInches = (cm: number): { feet: number; inches: number } => {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches };
};

// Activity level multipliers
export const activityMultipliers = {
  sedentary: 1.2, // Little or no exercise
  lightlyActive: 1.375, // Light exercise 1-3 days per week
  moderatelyActive: 1.55, // Moderate exercise 3-5 days per week
  veryActive: 1.725, // Heavy exercise 6-7 days per week
  extremelyActive: 1.9, // Very heavy exercise, physical job or twice daily training
};

// Goal-based calorie adjustments
export const goalAdjustments = {
  maintain: 0, // No adjustment for maintenance
  lose: -500, // 500 calorie deficit for weight loss
  gain: 500, // 500 calorie surplus for weight gain
  buildMuscle: 300, // 300 calorie surplus for muscle building
};

// Macronutrient ratios based on goals (protein/carbs/fats)
export const macroRatios = {
  maintain: { protein: 0.25, carbs: 0.45, fats: 0.3 },
  lose: { protein: 0.3, carbs: 0.4, fats: 0.3 },
  gain: { protein: 0.25, carbs: 0.5, fats: 0.25 },
  buildMuscle: { protein: 0.3, carbs: 0.45, fats: 0.25 },
};

// BMR calculation functions (Mifflin-St Jeor Equation)
export const calculateBMR = (
  weight: number, // in kg
  height: number, // in cm
  age: number,
  gender: string
): number => {
  if (gender === "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
};

// TDEE calculation
export const calculateTDEE = (bmr: number, activityLevel: string): number => {
  const multiplier = activityMultipliers[activityLevel as keyof typeof activityMultipliers] || activityMultipliers.sedentary;
  return bmr * multiplier;
};

// Calculate calorie needs based on goals
export const calculateCalorieNeeds = (tdee: number, goal: string): number => {
  const adjustment = goalAdjustments[goal as keyof typeof goalAdjustments] || 0;
  return tdee + adjustment;
};

// Calculate protein needs (g/day)
export const calculateProteinNeeds = (
  weightKg: number, 
  goal: string
): { minProtein: number; maxProtein: number } => {
  let minMultiplier = 1.6; // default minimum
  let maxMultiplier = 2.0; // default maximum
  
  if (goal === "buildMuscle") {
    minMultiplier = 1.8;
    maxMultiplier = 2.2;
  } else if (goal === "lose") {
    minMultiplier = 1.8;
    maxMultiplier = 2.2;
  }
  
  return {
    minProtein: Math.round(weightKg * minMultiplier),
    maxProtein: Math.round(weightKg * maxMultiplier),
  };
};

// Calculate macronutrients in grams
export const calculateMacros = (
  calories: number, 
  goal: string,
  weightKg: number
): { protein: number; carbs: number; fats: number } => {
  const ratios = macroRatios[goal as keyof typeof macroRatios] || macroRatios.maintain;
  
  // For protein, use the calculated protein needs
  const proteinNeeds = calculateProteinNeeds(weightKg, goal);
  const proteinCalories = proteinNeeds.minProtein * 4; // 4 calories per gram of protein
  
  // Adjust carbs and fats based on remaining calories
  const remainingCalories = calories - proteinCalories;
  const carbsRatio = ratios.carbs / (ratios.carbs + ratios.fats);
  const fatsRatio = ratios.fats / (ratios.carbs + ratios.fats);
  
  const carbsCalories = remainingCalories * carbsRatio;
  const fatsCalories = remainingCalories * fatsRatio;
  
  return {
    protein: proteinNeeds.minProtein,
    carbs: Math.round(carbsCalories / 4), // 4 calories per gram of carbs
    fats: Math.round(fatsCalories / 9), // 9 calories per gram of fats
  };
};

// Calculate BMI
export const calculateBMI = (weightKg: number, heightCm: number): number => {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
};

// Interpret BMI category
export const getBMICategory = (bmi: number): string => {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
};
