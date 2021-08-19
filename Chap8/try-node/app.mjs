import fs from "fs";

fs.writeFile("test.txt", "Hello people", () => {
  fs.readFile("test.txt", "utf-8", (err, msg) => {
    console.log(msg);
  });
});

