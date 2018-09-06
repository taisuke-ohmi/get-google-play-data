'use strict';

const gplay = require('google-play-scraper');
const json2csv = require('json2csv').parse;
const fs = require('fs');
const sleep = require('sleep');

var filename = "output.csv";
var fields = ["title","installs","minInstalls","developer","developerEmail","developerWebsite","genre","genreId","appId","url"];
var category = "SPORTS";
var progress = [];

try {
  fs.appendFile(filename, "CATEGORY NAME: " + category + "\n", fileError);
} catch (err) {
  console.error(err);
}

console.log("CATEGORY NAME: " + category);

gplayList()
  .then(gplayList)
  .then(gplayList)
  .then(gplayList)
  .then(gplayList)
  .then(gplayList)
  .then(gplayList)
  .then(gplayList)
  .then(gplayList)
  .then(gplayList)
  .catch(console.log)

function gplayList() {
  console.log(progress.length + " times.");
  return gplay.list({
    category: category,
    num: 50, // set number to get
    start: (progress.length * 50),
    lang: "ja",
    country: "jp",
    fullDetail: true,
    throttle: 2
  }).then(writeCSVNoHeader);
}

function writeCSVNoHeader(res) {
  try {
    console.log(res.length + " apps fetch.");
    const csv = json2csv(res, { fields, header:false });
    fs.appendFile(filename, csv, fileError);
    fs.appendFile(filename, "\n", fileError);
    progress.push(1);
  } catch (err) {
    console.error(err);
  }
}

function fileError(err) {
  if (err) {
    console.log(err);
  }
  return false;
}
