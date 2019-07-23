const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];



// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
// const atticus = [{
//   name: 'Atticus',
//   employeeNumber: '2405',
//   annualSalary: '47000',
//   reviewRating: 3
// }];


function calculateBonus(input) {
  let bonusOutput = {};
  let finalArray = [];
  for (let i = 0; i < input.length; i++) {
    console.log( 'in calculatedBonus' );
    
    if (input[i].reviewRating <= 2) {
       // console.log("reviewRating less than or equal to 2");
      bonusOutput.bonusPercentage = 0.0;
    }
    else if (input[i].reviewRating === 3) {
      // console.log("reviewRating equals 3");
      bonusOutput.bonusPercentage = .04;
    }
    else if (input[i].reviewRating === 4) {
      // console.log("reviewRating equals 4");
      bonusOutput.bonusPercentage = .06;
    }
    else if (input[i].reviewRating === 5) {
      // console.log("reviewRating equals 5");
      bonusOutput.bonusPercentage = .1;
    }
    if (input[i].employeeNumber.length < 5 ) {
      bonusOutput.bonusPercentage += .05;
    }
    if (input[i].annualSalary > 65000){
      bonusOutput.bonusPercentage -= .01;
    }
    if (bonusOutput.bonusPercentage >= .13){
      bonusOutput.bonusPercentage = .13;
    }
    else if (bonusOutput.bonusPercentage < 0.0) {
      bonusOutput.bonusPercentage = 0.0;
    }
    console.log('below is bonus and compensation');

    input[i].totalBonus = bonusOutput.bonusPercentage * input[i].annualSalary;
    bonusOutput.totalBonus = input[i].totalBonus

    input[i].totalCompensation = Number(bonusOutput.totalBonus) + Number(input[i].annualSalary);
    bonusOutput.totalCompensation = input[i].totalCompensation

    bonusOutput.name = input[i].name

  
    finalArray.push(bonusOutput);
   
  }

  console.log(finalArray);
  return finalArray;
}

calculateBonus(employees);