const Blockchain = require("../blockchain");

const blockchain = new Blockchain();

blockchain.addBlock({ data: "initial block" });

let prevTimestamp, nextTimestamp, nextBlock, timeDiff, average;

const times = [];

for (let i = 0; i < 7000; i++) {
  prevTimestamp = blockchain.chain[blockchain.chain.length - 1].timestamp;

  blockchain.addBlock({ data: `block ${i}` });
  nextBlock = blockchain.chain[blockchain.chain.length - 1];

  nextTimestamp = nextBlock.timestamp;
  timeDiff = nextTimestamp - prevTimestamp;
  times.push(timeDiff);

  average = times.reduce((total, num) => (total + num)) / times.length; // prettier-ignore

  console.log(
    `Time to mine block: ${timeDiff} ms. Difficulty: ${nextBlock.difficulty}. Average time: ${average}ms`
  );
}
