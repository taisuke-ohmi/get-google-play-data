'use strict';

const gplay = require('google-play-scraper');
const json2csv = require('json2csv').parse;
const fs = require('fs');
require('date-utils');

gplay.list({
  category: gplay.category.BUSINESS, // set category 
  collection: gplay.collection.TOP_FREE, // set collection
  num: 10, // set number to get
}).then(writeCSV, console.log);

function writeCSV(res) {
  var header = Object.keys(res[0]).join();
  var dt = new Date();
  var formatted = dt.toFormat("YYYYMMDDHH24MISS");

  try {
    const csv = json2csv(res, { header });
    fs.appendFile("target_category_collection_" + formatterd + ".csv", csv);
  } catch (err) {
    console.error(err);
  }
}
