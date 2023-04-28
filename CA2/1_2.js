import os from 'os';

const freeMemory = os.freemem();
console.log(`Free memory: ${freeMemory} bytes`);

const numCores = os.cpus().length;
console.log(`Number of CPU cores: ${numCores}`);

const userInfo = os.userInfo();
console.log(`Username: ${userInfo.username}`);
console.log(`Home directory: ${userInfo.homedir}`);

const platform = os.platform();
console.log(`Platform: ${platform}`);

const release = os.release();
console.log(`Release: ${release}`);

const arch = os.arch();
console.log(`Architecture : ${arch}`);

const hostName = os.hostname();
console.log(`Host Name : ${hostName}`);