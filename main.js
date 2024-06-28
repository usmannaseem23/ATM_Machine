#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; //Dollar
let myPin = 2314;
let pinAnswer = await inquirer.prompt([
    {
        type: "number",
        name: "pincode",
        message: "Enter your Pin",
    },
]);
// conditional statement
if (pinAnswer.pincode === myPin) {
    console.log("Correct Pin Code!!!");
    let operations = await inquirer.prompt([
        {
            name: "Operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"],
        }
    ]);
    if (operations.Operation === "Withdraw") {
        let amountams = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your Amount",
                type: "number",
            }
        ]);
        if (amountams.amount > myBalance) {
            console.log("InSufficient Cash");
        }
        else if (myBalance -= amountams.amount) {
            console.log(` Yuor Remaining amount is: ${myBalance}`);
        }
    }
    if (operations.Operation === "Check Balance") {
        console.log(`Your Balance is:  ${myBalance}`);
    }
    if (operations.Operation === "Fast Cash") {
        let cash = await inquirer.prompt([
            {
                name: "Options",
                message: "Select Any Amount",
                type: "list",
                choices: ["1000", "2000", "6000", "9000"],
            }
        ]);
        if (myBalance -= cash.Options) {
            console.log(`Your Remaining Amount is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect Pin Code!!!");
}
