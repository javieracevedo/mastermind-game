const codeLimit = 4

const colorCodes = {
  BLUE: "blue",
  GREEN: "green",
  ORANGE: "orange",
  PURPLE: "purple",
  RED: "red",
  YELLOW: "yellow"
}

const resultPegs = {
  BLACK: "black",
  WHITE: "white",
  EMPTY: ""
}

function selectRandomColorCode(colors) {
  if (!colors) {
    return "Color code parameter is missing."
  }

  let result;
  let count = 0;
  for (let color in colors) {
    if (Math.random() < 1/++count) {
      result = colors[color];
    }
  }
  return result;
}

function generateCode() {
  const code = [];
  for (let i = 0; i<codeLimit; i++) {
    const randomColor = selectRandomColorCode(colorCodes);
    code.push(randomColor)
  }
  return code;
}

function getHints(userCode, code) {
  const hints = []; 
  userCode.forEach((color, index) => {
    if (code[index] == color) {
      hints.push(resultPegs.BLACK)
    } else if (code.includes(color)) {
      hints.push(resultPegs.WHITE)
    } else {
      hints.push(resultPegs.EMPTY)
    }
  })
  return hints;
}

function checkWin(hints) {
  return hints.every(hint => hint == resultPegs.BLACK)
}


module.exports = {
  selectRandomColorCode,
  generateCode,
  getHints,
  checkWin,
  codeLimit
}

