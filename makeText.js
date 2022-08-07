/** Command-line tool to generate Markov text. */
const axios = require("axios");
const fs = require("fs");
const URL = require("url").URL;
const { MarkovMachine } = require("./markov");

const fileUrl = process.argv[2].toLowerCase();
const path = process.argv[3].toLowerCase(); 
function cat(path) {
    fs.readFile(`${path}`, "utf8", function (err, data) {
      if (err) {
        //Here is where the error is handled
        console.error(`Couldn't read ${path}: ${err}`);
        process.kill(1);
      //Kill the process and tell the shell it errored
      }
      
      console.log(data);
    });
  }
  async function webCat(path) {
    try{
      let response = await axios.get(url);
      console.log(response.data);
    }
    catch(err){
      console.error(`Error fetching ${path}: ${err}`);
      process.exit(1);
    }
  }

if (fileUrl === 'file'){
    cat(file-url);
}
else if (fileUrl === 'url'){
webCat(path);
}

