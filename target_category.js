'use strict';

const gplay = require('google-play-scraper');
const json2csv = require('json2csv').parse;
const fs = require('fs');

gplay.list({
  category: gplay.category.BUSINESS, // set category 
  num: 10, // set number to get
}).then(writeCSV, console.log);

function writeCSV(res) {
  var header = Object.keys(res[0]).join();

  try {
    const csv = json2csv(res, { header });
    fs.appendFile("target_category.csv", csv);
  } catch (err) {
    console.error(err);
  }
}
