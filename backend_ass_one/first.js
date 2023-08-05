//Import the required core modules
const process = require('process');
const path = require('path');
const os = require('os');


//Prints current working directory
const cwd = process.cwd();
const pwd = path.resolve();   //returns the absolute path of the current working directory
console.log({cwd, pwd});

//Prints the separator of a given file path
const separator = path.sep; //returns path's separator of a specific platform
console.log(separator);

//Prints the process id of the current running process
const pid = process.pid;
console.log({pid});

//Prints the user information of the os
const userInfo = os.userInfo();
console.log({userInfo});

//Prints the os platform
const os_platform = os.platform();
const process_platform = process.platform;
console.log({os_platform, process_platform});