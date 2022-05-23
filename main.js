const cp = require("child_process")
const inquirer = require("inquirer");
// inquirer.prompt([
//     {
//         type: "list",
//         name: "selection",
//         choices: ["About", "Skills", "Acadmics", "Projects"]
//     }
// ]).then((ans) => {
//     if (ans.selection == "About") {
//         console.log(`I am passionaly curious Web Developer 
//         who just found that making websites and seeing the magic happen
//         on the Internet is what excites him the most`)
//     } else if (ans.selection == "Skills") {
//         console.log("Java, JavaScript, React")
//     } else if (ans.selection == "Acadmics") {
//         cp.execSync("start chrome https://github.com/Kishn0109")
//     } else if (ans.selection == "Projects") {
//         cp.execSync("start chrome https://github.com/Kishn0109")
//     }
// })

function showAll() {
    inquirer.prompt([
        {
            type: "list",
            name: "selection",
            choices: ["About", "Skills", "Acadmics", "Projects"]
        }
    ]).then((ans) => {
        if (ans.selection == "About") {
            console.log(`I am passionaly curious Web Developer 
        who just found that making websites and seeing the magic happen
        on the Internet is what excites him the most`)
            tobenext()
        } else if (ans.selection == "Skills") {
            console.log("Java, JavaScript, React")
            tobenext()
        } else if (ans.selection == "Acadmics") {
            cp.execSync("start chrome https://github.com/Kishn0109")
            tobenext()
        } else if (ans.selection == "Projects") {
            cp.execSync("start chrome https://github.com/Kishn0109")
            tobenext()
        }
    })

}
showAll();

function tobenext() {
    inquirer.prompt([
        {
            type: "list",
            name: "selection",
            choices: ["Go Back", "Exit"]
        }
    ]).then((ans) => {
        if (ans.selection == "Go Back") {
            showAll();
        } else if (ans.selection == "Exit") {
            console.log("resume closed")
        }
    })

}