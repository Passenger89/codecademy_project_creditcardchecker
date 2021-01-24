// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// ValidateCred applies the Luhn algorithm to assess whether the credit card numbers are valid.

const validateCred = (array) => {
    const checkSum = [];
    for (let i = array.length - 1; i >= 0; i--) {  //Iterates backwards through the array passed into the function and if the index is odd, pushes it to checkSum array.
        if (i % 2 !== 0) {
            checkSum.push(array[i]);
        }
    };


    const secondValue = [];
    for (let j = array.length - 1; j >= 0; j--) {
        if (j % 2 === 0) {                       //If the index is even, pushes it to secondValue array after either multiplying by 2 and subtracting 9 if result is over 9, or just multiplying by 2 if not. 
            if (array[j] * 2 > 9) {
                secondValue.push(array[j] * 2 - 9);
            } else
                secondValue.push(array[j] * 2);
        }
    };

    const total = checkSum.concat(secondValue); //Both checkSum and secondValue arrays are concatenated into the total array.

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const sum = total.reduce(reducer); //Uses the reducer function above to assess whether the sum of each array divided by 10 leaves a remainder and returns a boolean.
    if (sum % 10 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }

}

const invalidCards = [];
const findInvalidCards = (nestedArr) => {  //Accepts a nested array of credit cards as a parameter and stores those that are invalid in the 'invalidCards' array.
    nestedArr.map(function (arr) {
        if (validateCred(arr) === false) {
            invalidCards.push(arr);
        }
    });
}


const companies = [];
const idInvalidCardCompanies = (invalidArr) => {  //Takes a nested array of invalid cards and returns a Set containing companies that issued the cards.
    invalidArr.forEach(el => {
        if (el.indexOf(3) === 0) {
            companies.push('Amex');
        } else if (el.indexOf(4) === 0) {
            companies.push('Visa');
        } else if (el.indexOf(5) === 0) {
            companies.push('Mastercard');
        } else if (el.indexOf(6) === 0) {
            companies.push('Discover');
        } else {
            companies.push('Company Not Found');
        }

    })
    return new Set(companies);
}



