'use strict';

const gplay = require('google-play-scraper');
const json2csv = require('json2csv').parse;
const fs = require('fs');
require('date-utils');

var filename = "output.csv";
var fields = ["title","installs","minInstalls","developer","developerEmail","developerWebsite","genre","genreId","appId","url"];
var terms = [
  "配車サービス",
  "カープール(相乗り)",
  "宅配・輸送・物流",
  "バイクシェア",
  "カーシェア",
  "自動運転",
  "シェアパーキング",
  "飲料系サービス"
];
var i = -1;

gplaySearch()
  .then(gplaySearch)
  .then(gplaySearch)
  .then(gplaySearch)
  .then(gplaySearch)
  .then(gplaySearch)
  .then(gplaySearch)
  .then(gplaySearch)
  .catch(console.log);

function gplaySearch() {
  i++
  console.log(terms[i]);
  return gplay.search({
    term: terms[i],
    num: 100, // set number to get
    lang: "ja",
    country: "jp",
    fullDetail: true,
    throttle: 5
  }).then(writeCSV);
}

function writeCSV(res) {
  try {
    const csv = json2csv(res, { fields });
    fs.appendFile(filename, csv);
  } catch (err) {
    console.error(err);
  }
}

function writeCSVNoHeader(res) {
  try {
    const csv = json2csv(res, { fields, header:false });
    fs.appendFile(filename, csv);
  } catch (err) {
    console.error(err);
  }
}
