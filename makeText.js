/** Command-line tool to generate Markov text. */
const axios = require("axios");
const fs = require("fs");
const process = require("process");
const { MarkovMachine } = require("./markov");

function generateText(text){
    let mm = new MarkovMachine(text);
    console.log(mm.makeText());
}

const data_type = process.argv[2].toLowerCase();
const path = process.argv[3].toLowerCase();
console.log(data_type, path); 
function cat(path) {
    fs.readFile(`${path}`, "utf8", function (err, data) {
      if (err) {
        //Here is where the error is handled
        console.error(`Couldn't read ${path}: ${err}`);
        process.kill(1);
      //Kill the process and tell the shell it errored
      }
      
      generateText(data);
    });
  }
  async function webCat(path) {
    try{
      let response = await axios.get(path);
      generateText(response.data);
    }
    catch(err){
      console.error(`Error fetching ${path}: ${err}`);
      process.exit(1);
    }
  }

if (data_type === 'file'){
    cat(path);
}
else if (data_type === 'url'){
webCat(path);
}

