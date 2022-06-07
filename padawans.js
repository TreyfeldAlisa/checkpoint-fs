const fs = require('fs');

const padawans = fs.readFileSync('./data/padawans.txt', 'utf-8').split('\n').slice(0, -1);
const scores = fs.readFileSync('./data/scores.txt', 'utf-8').split('\n').map((el) => Number(el));
// console.log(scores)
function getPadawanNames() {
  return padawans;
}

function getLightsaberScores() {
  return scores;
}

function getStats() {
  const arr = [];
  for (let i = 0; i < padawans.length; i += 1) {
    const arrNew = [];
    arrNew.push(padawans[i]);
    arrNew.push(scores[i]);
    arr.push(arrNew);
  }
  return arr;
}

const stats = getStats().join('\n').split(',').join(' ');

function writeStats() {
  const data = fs.writeFileSync('./data/stats.txt', stats);
  return data;
}
module.exports = {
  getPadawanNames,
  getLightsaberScores,
  getStats,
  writeStats,
};
