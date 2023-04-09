const transportation = parseFloat(prompt("How many miles do you drive per week?"));
const electricity = parseFloat(prompt("How many kilowatt-hours of electricity do you use per month?"));
const naturalGas = parseFloat(prompt("How many therms of natural gas do you use per month?"));
const diet = parseFloat(prompt("How many servings of meat do you consume per week?"));

// Define conversion factors
const transportationFactor = 0.008887; // metric tons of CO2 equivalent per mile
const electricityFactor = 0.000546; // metric tons of CO2 equivalent per kilowatt-hour
const naturalGasFactor = 0.005303; // metric tons of CO2 equivalent per therm
const dietFactor = 3.3; // metric tons of CO2 equivalent per serving

// Calculate carbon footprint
const transportationEmissions = transportation * transportationFactor;
const electricityEmissions = electricity * electricityFactor;
const naturalGasEmissions = naturalGas * naturalGasFactor;
const dietEmissions = diet * dietFactor;
const totalEmissions = transportationEmissions + electricityEmissions + naturalGasEmissions + dietEmissions;

// Display results
console.log(`Your carbon footprint is ${totalEmissions.toFixed(2)} metric tons of CO2 equivalent per year.`); 

// Define a list of eco-friendly activities
const activities = [
    'Plant a tree',
    'Use public transportation',
    'Bring reusable bags to the grocery store',
    'Reduce water usage',
    'Conserve electricity',
    'Recycle and compost',
    'Eat locally sourced foods',
    'Use a refillable water bottle',
    'Switch to energy-efficient light bulbs',
    'Start a garden'
  ];
  
  // Function to randomly select an activity from the list and display it
  function suggestActivity() {
    const index = Math.floor(Math.random() * activities.length);
    const activity = activities[index];
    document.getElementById('activity').innerHTML = 'Activity suggestion: ' + activity;
  }