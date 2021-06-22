/**
 * Division
 *
 * @param      {number}  firstNumber   The first number
 * @param      {number}  secondNumber  The second number
 * @return     {number}  Division result
 */
function divideBy(firstNumber, secondNumber) {
    return secondNumber / firstNumber;
}

/**
 * Addition
 *
 * @param      {<type>}  firstNumber   The first number
 * @param      {<type>}  secondNumber  The second number
 * @return     {<type>}  The additon
 */
function addBy(firstNumber, secondNumber) {
    return secondNumber + firstNumber;
}

/**
 * Clousures
 */
let addBy100 = function(x) { return addBy(x, 100); };
let addBy1000 = function(x) { return addBy(x, 1000); };
let divideBy10 = function(x) { return divideBy(10, x); };
let divideBy100 = function(x) { return divideBy(100, x); };
