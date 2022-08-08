/** Textual markov chain generator */
class MarkovMachine {
  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter((c) => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    const idx = this.words.length;
    /*Create a new map to put words into*/
    let string = new Map();
    for (let i = 0; i < idx; i++) {
      let curr_word = this.words[i];
      let next_word = this.words[i + 1] || null;
      if (string.has(curr_word)) {
        string.get(curr_word).push(next_word);
      } else string.set(curr_word, [next_word]);
      /*If the map doesn't have the current word, add it to the map as a key-value pair.
        The key is the current word and the value is an array of words following the current word*/
    }
    this.string = string;
  }

  /** return random text from chains */

  static choose(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  /** return random text from chains */

  makeText(numWords = 100) {
    /*Create an array of keys*/
    let keys = Array.from(this.string.keys());
    let key_choice = MarkovMachine.choose(keys);
    /*Instantiate an empty array to push values into*/
    let output = [];
    /*While the output array is smaller than numWords, keep looping*/
    while (output.length < numWords && key_choice !== null) {
        
      output.push(key_choice);
      key_choice = MarkovMachine.choose(this.string.get(key_choice));
    }
    return output.join(" ")
  }
}

module.exports = {MarkovMachine,};
