// Takes a sentence (given by an array of words) and checks them against a specified word, tallies them

function getMatchedWordCount(sentence, match) {
  let count = 0;
  
  for (const word of sentence) {
    if (word === match) {
      count++;
    }
    console.log(`Checking "${word}" against "${match}" | Running count: ${count}`);
  }
  
  return count;
}

console.log(
  getMatchedWordCount(
    ["I", "really", "really", "really", "like", "to", "code"],
    "really"
  )
);

console.log(getMatchedWordCount(["Do", "not", "fear", "the", "dandy", "lion"], "dandy"))
