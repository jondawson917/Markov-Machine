const { MarkovMachine } = require("./markov")
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