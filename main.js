import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { type: "number",
        name: "numberOne",
        message: "Enter your first number"
    },
    { type: "number",
        name: "numbertwo",
        message: "Enter your second number"
    },
    { type: "list",
        name: "operator",
        message: "Enter your operator",
        choices: ["+", "-", "*", "/"] }
]);
const { numberOne, numbertwo, operator } = answer;
let result;
switch (operator) {
    case "+":
        result = numberOne + numbertwo;
        break;
    case "-":
        result = numberOne - numbertwo;
        break;
    case "*":
        result = numberOne * numbertwo;
        break;
    case "/":
        result = numberOne / numbertwo;
        break;
    default:
        console.log("invalid operator");
}
console.log(`${numberOne} ${operator} ${numbertwo} = ${result}`);
