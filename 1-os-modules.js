const os = require("os");

// info about current user
const user = os.userInfo();

// Getting some current OS info
const currentOS = {
    name: os.type,
    release: os.release(),
    totalMem: os.totalmem,
    freeMem: os.freemem()
}
