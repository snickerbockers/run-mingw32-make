const core = require('@actions/core');
const { exec } = require('child_process');

// most @actions toolkit packages have async methods
async function run() {
  try {
      exec(`mingw32-make`, (err, stdout, stderr) => {
	  console.log(stdout);
	  console.log("build complete");
      }) ;
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()
