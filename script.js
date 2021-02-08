"use strict";

//Global variables
let input = null;
let output = null;

//Make buttons clickable
document.querySelector("#btn").addEventListener("click", getInput);

//Define input ad the input ID (the textbox)
function getInput() {
  input = document.querySelector("#input").value;

  chooseOption();
}

//Declaring a variable named option, which is the drop-down menu options
function chooseOption() {
  let option = document.querySelector("#options").value;

  //Making sure that output changes depending on what the user has entered and selected in the menu

  if (option == "0") {
    //If input is a first name: Make the first character in a name uppercase, and the rest lowercase
    const part1 = input.substring(0, 1).toUpperCase();
    const part2 = input.substring(1).toLowerCase();
    output = part1 + part2;
    //If input is a full name: Find the first name
  } else if (option == "1") {
    const firstSpace = input.indexOf(" ");
    output = input.substring(0, firstSpace).trim();
    //If input is a full name: Find the length of the first name
  } else if (option == "2") {
    const firstSpace = input.indexOf(" ");
    output = input.substring(0, firstSpace).length;
    //If input is a full name: Find the middle name start and end positions,and the middle name itself in a full name string
  } else if (option == "3") {
    const firstSpace = input.indexOf(" ");
    const lastSpace = input.lastIndexOf(" ");
    const middleName = input.substring(firstSpace, lastSpace).trim();

    output = `The middlename starts at ${
      firstSpace + 2
    }, and ends at ${lastSpace}, and the middlename is ${middleName}.`;
    //If input is a filename: Check if a filename is .png or .jpg
  } else if (option == "4") {
    if (input.endsWith(".png") || input.endsWith(".jpg")) {
      output = "This is a filename";
    } else {
      output = "This is not a filename";
    }
  }
  // If input is a password: Hide a password with the correct number of *s
  if (option == "5") {
    const length = input.length;
    output = "*".repeat(length);
  }
  // With any input: Make the third character in a name uppercase
  if (option == "6") {
    const part1 = input.substring(0, 2).toLowerCase();
    const part2 = input.substring(2, 3).toUpperCase();
    const part3 = input.substring(3, 5).toLowerCase();

    output = part1 + part2 + part3;
  }
  //With any input: Make a character uppercase, if it follows a space or a hyphen
  if (option == "7") {
    const splitted = input.split(" ");
    output = "";

    splitted.forEach(split => {
      const part1 = split.substring(0, 1).toUpperCase();
      const part2 = split.substring(1).toLowerCase();
      output += part1 + part2 + " ";
    });

    output = output.trim();
  }
  //Replace text in the output box depending on what option the user chooses
  document.querySelector("#output").innerHTML = output;
}
