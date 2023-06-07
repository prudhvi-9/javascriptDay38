// Unit conversion.

//a)inch to feet.
let inch = 42;
let feet = inch /12;
console.log("42 inch = " + feet + " feet.");

//b)feet to meters.
let lengthInFeet = 60;
let breadthInFeet = 40;
let lengthInMeters = lengthInFeet /3.281; 
let breadthInMeters = breadthInFeet /3.281;
console.log("Plot of 60 feet x 40 feet in meters is " + lengthInMeters + " meters x " + breadthInMeters + " meters.");

//C)calculating area of plots in acres.
let numberOfPlots = 25;
let area = numberOfPlots * lengthInMeters * breadthInMeters;
console.log("Area of " + numberOfPlots + " plots is " + area +" acres.");