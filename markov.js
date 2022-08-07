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

  makeText(numWords = 100) {
    let m_idx;
    let idx = this.string.size;
    let text = this.words[Math.floor(Math.random() * idx)];
    let matching_words = "";
    let new_combo = "";
    if (numWords) {
      for (let word in this.string) {
        matching_words = this.string.get(word);
        m_idx = matching_words.length;
        new_combo = word + matching_words[Math.floor(Math.random() * m_idx)];
        text += new_combo;
      }
    }
    console.log(text);
  }
}

/*Test functions*/
describe("makeChains", function () {
  /*Declare each test function*/
  let chains;

  beforeEach(function () {
    /*Initialize the string to enter into makechains*/
    chains = "The cat in the hat is in the hat";
  });
  test("return an array of words that come after an income word", function () {
    const mm = new MarkovMachine(chains);
    expect(mm.string.get("The")).toEqual(["cat"]);
    expect(mm.string.get("in")).toEqual(["the", "the"]);
  });


});
