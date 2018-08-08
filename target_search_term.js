'use strict';

const gplay = require('google-play-scraper');
const json2csv = require('json2csv').parse;
const fs = require('fs');

gplay.search({
  term: "panda",
  num: 5
}).then(writeCSV, console.log);

function writeCSV(res) {
  var header = Object.keys(res[0]).join();

  try {
    const csv = json2csv(res, { header });
    fs.appendFile("target_search_term.csv", csv);
  } catch (err) {
    console.error(err);
  }
}
