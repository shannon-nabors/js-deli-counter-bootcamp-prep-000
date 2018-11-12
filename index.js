function takeANumber(line, newName) {
  line.push(newName);
  return("Welcome, " + newName + ". You are number " + line.length + " in line.");
}

/*var line = [1, 2]

function takeANumber(line) {
  line.push(line[line.length - 1] + 1);
  return(line.length);
}

console.log(takeANumber(line));*/

function nowServing(line) {
  if (line.length > 0) {
    var currentCustomer = line[0];
    line.shift();
    return("Currently serving " + currentCustomer + ".");
  } else {
    return("There is nobody waiting to be served!");
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var lineString = [];
      for (var i = 0; i < line.length; i++) {
        lineString.push(" " + (i + 1) + ". " + line[i]);
      }
    return("The line is currently:" + lineString.toString());
  } else {
    return("The line is currently empty.");
  }
}

let katzDeli = ["Greg"];

console.log(takeANumber(katzDeli, "Rex"));
console.log(takeANumber(katzDeli, "Jason"));
console.log(takeANumber(katzDeli, "Bart"));
console.log(currentLine(katzDeli));
console.log(nowServing(katzDeli));
console.log(currentLine(katzDeli));
console.log(nowServing(katzDeli));
console.log(currentLine(katzDeli));
console.log(nowServing(katzDeli));
console.log(currentLine(katzDeli));
console.log(nowServing(katzDeli));
console.log(currentLine(katzDeli));
console.log(nowServing(katzDeli));