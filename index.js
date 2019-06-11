const cp = require("child_process");

function execCommand(command) {
  cp.exec(command, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      return;
    }
    if (stdout) {
      console.log(`Standar Out: \n${stdout}`);
    }
    if (stdout) {
      console.log(`Standar Err: \n${stderr}`);
    }
  });
}

//execCommand("dir");
execCommand("node ./src/script --base=5");
