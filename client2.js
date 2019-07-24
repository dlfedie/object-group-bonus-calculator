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

//CODE BELOW IS THE REVIEW DAY AFTER. THIS IS NOT OUR ASSIGNMENT

function calculateBonus(employee) {
    let bonus = 0;
    console.log(employee);
    if (employee.reviewRating <= 2) {
        bonus = 0;
    }
    else if (employee.reviewRating === 3) {
        bonus = .04;
    }
    else if (employee.reviewRating === 4) {
        bonus = .06;
    }
    else if (employee.reviewRating === 5) {
        bonus = .1;
    }

    if (employee.employeeNumber.length === 4) {
        bonus += .05;
    }

    if (employee.annualSalary > 65000) {
        bonus -= .01;
    }

    if (bonus > .13) {
        bonus = .13;
    }
    if (bonus < 0) {
        bonus = 0;
    }

    console.log(bonus);

    let totalBonus = Math.round(employee.annualSalary * bonus);
    
    // let bonusObject = {
    //     name: employee.name,
    //     bonusPercentage: bonus,
    //     totalCompensation: parseFloat(employee.annualSalary) + totalBonus,
    //     totalBonus: totalBonus
    // }
    let bonusObject = new BonusObject(employee, bonus, totalBonus);
    console.log(bonusObject);
}

function BonusObject(employee, bonus, totalBonus) {
    this.name = employee.name;
    this.bonusPercentage = bonus;
    this.totalCompensation = parseFloat(employee.annualSalary) + totalBonus;
    this.totalBonus = totalBonus;
}



function calculateAllBonuses() {
    //loop over employees
    for (let employee of employees) {
        //employees[i]
        calculateBonus(employee)
    }
    //do my calculation on each one
}

calculateAllBonuses();

