'use strict';

const gplay = require('google-play-scraper');
const json2csv = require('json2csv').parse;
const fs = require('fs');
const sleep = require('sleep');

var filename = "output.csv";
var fields = ["title","installs","minInstalls","developer","developerEmail","developerWebsite","genre","genreId","appId","url"];
var categories = [
//  "SPORTS"
//  "DATING"
//  "BUSINESS"
//  "HEALTH_AND_FITNESS"
//  "PHOTOGRAPHY"
//  "TOOLS"
//  "BOOKS_AND_REFERENCE"
//  "AUTO_AND_VEHICLES"
//  "EDUCATION"
//  "MEDICAL"
//  "PRODUCTIVITY"
  "HOUSE_AND_HOME"
];

var start = -1;
try {
  fs.appendFile(filename, "CATEGORY NAME: " + categories[0] + "\n");
} catch (err) {
  console.error(err);
}

console.log(categories[0]);
gplaySearch()
  .then(gplaySearch)
  .then(gplaySearch)
  .then(gplaySearch)
  .then(gplaySearch)
  .catch(console.log)

function gplaySearch() {
  start++
  console.log(start);
  return gplay.list({
    category: categories[0],
    num: 100, // set number to get
    start: (start * 100),
    lang: "ja",
    country: "jp",
    fullDetail: true,
    throttle: 2
  }).then(writeCSVNoHeader);
}

function writeCSVNoHeader(res) {
  try {
    console.log(res.length);
    const csv = json2csv(res, { fields, header:false });
    fs.appendFile(filename, csv);
    fs.appendFile(filename, "\n");
  } catch (err) {
    console.error(err);
  }
}
*/
