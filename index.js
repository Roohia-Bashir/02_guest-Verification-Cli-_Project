#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green(`Welcome to Guest Verification Center`));
let myLoop = true;
let myInvitedGuestList = ['hina', 'ruhi', 'sidra', 'maham', 'rabia', 'anila', 'ayesha', 'hoorain'];
while (myLoop) {
    let userInput = await inquirer.prompt({
        type: 'input',
        name: 'userName',
        message: 'please enter your name:'
    });
    let guestName = userInput.userName;
    // let {userName} = userInput; // destructuring
    //console.log(guestName);
    let lowerGuestName = guestName.toLowerCase();
    if (myInvitedGuestList.includes(lowerGuestName)) {
        console.log(chalk.yellow(`Welcome Miss ${guestName}! please, make yourself comfortable.`));
        console.log("Thank you!");
        myLoop = false;
    }
    else {
        console.log(chalk.red(`\nSorry, Miss ${guestName}. Your name is not on the guest list for today.\n`));
        let askNameAgain = await inquirer.prompt({
            type: 'confirm',
            name: 'otherName',
            message: 'Do you have another name you go by? if so, we can check again!',
            default: false
        });
        if (askNameAgain.otherName == false) {
            myLoop = false,
                console.log(chalk.magenta(`\nWe apologize, but you are not on the guest list. Please contact the event organizer.\n`));
        }
    }
}
