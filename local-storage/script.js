const myTasks = {
  1: "map method",
  2: "filter method",
  3: "reduce method",
  4: "forEach loop",
  5: "object.create()",
  6: "for in loop",
  7: "for of loop",
  8: "setTimeout",
  9: "create an element",
  10: "object.assign()",
  11: "addEventListener",
  12: "arguments object",
  13: "pre tag",
  14: "spread operator",
  15: "rest operator",
  16: "arrow function",
  17: "immediately invoked function expression",
  18: "closure",
  19: "callbacks",
  20: "fetch API",
};

const myButton = document.querySelector("#myButton");
const completedBTN = document.querySelector("#completedBTN");
const resetBTN = document.querySelector("#reset");

let myMessage = document.querySelector("#message");

function init() {
  //set up initial variables
  if (localStorage.getItem("completedTasks")) {
    //check if 'completedTasks' already esixts in localStorage
    //if exists, assign contents to completedTasks array, so array is not empty
    const retrieveTasks = localStorage.getItem("completedTasks");
    let completedTasks = JSON.parse(retrieveTasks);
    return completedTasks;
  }

  if (localStorage.getItem("completedTasks") === null) {
    //check if 'completedTasks' does NOT exist / set up in localStorage

    let completedTasks = [];
    let completedTaskArray = JSON.stringify(completedTasks);
    localStorage.setItem("completedTasks", completedTaskArray);
    return completedTasks;
  }
}
let ct = init(); //call init method and store result in a variable

function lookUpNumber(obj) {
  let number = Math.floor(Math.random() * 20) + 1;
  return obj[number];
}

myButton.addEventListener("click", function () {
  myMessage.innerText = lookUpNumber(myTasks);
});
completedBTN.addEventListener("click", function () {
  ct.push(myMessage.innerText);
  completedTaskArray = JSON.stringify(ct);
  localStorage.setItem("completedTasks", completedTaskArray);
});

resetBTN.addEventListener("click", function () {
  //remove 'completedTasks' from localStorage to test code and persistance of data
  localStorage.removeItem("completedTasks");
});
