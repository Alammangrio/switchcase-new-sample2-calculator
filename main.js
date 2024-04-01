#!/user/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { type: "number",
        name: "numberone",
        message: "enter your first number"
    },
    { type: "number",
        name: "numbertwo",
        message: "enter your second number",
    }, { type: "list",
        name: "operator",
        message: "enter your operator",
        choices: ["+", "-", "*", "/",] }
]);
const { numberone, numbertwo, operator } = answer;
let result;
switch (operator) {
    case "+":
        result = numberone + numbertwo;
        break;
    case "-":
        result = numberone - numbertwo;
        break;
    case "*":
        result = numberone * numbertwo;
        break;
    case "/":
        result = numberone * numbertwo;
        break;
    default:
        console.log("invalid operator");
}
console.log(`${numberone} ${operator} ${numbertwo} =${result}`);
