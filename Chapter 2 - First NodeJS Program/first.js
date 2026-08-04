console.log("first nodejs program");

const fs = require("fs");

fs.writeFile("output.txt", "Hello NodeJS", (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("The file has been saved!");
  }
});