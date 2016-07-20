var katzDeli = [];

function takeANumber(line, name) {
  line.push(name)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

function nowServing(line) {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  var i = 0;
  var arr = [];
  if (line.length === 0) {
    return "The line is currently empty.";
  } else {
    line.forEach(function(item, index, array) {
      arr.push(`${index + 1}. ${item}`)
    })
    return `The line is currently: ${arr.join(', ')}`;
  }
}
