'use strict';

const gplay = require('google-play-scraper');
const json2csv = require('json2csv').parse;
const fs = require('fs');
const readline = require("readline");
const requestLib = require('request');

if (process.argv.length <= 2) {
  console.error("arg is required");
  process.exit(1);
}

var errorFile = "error.log"
var outputFile = "locationAppList.csv"
var appListFile = process.argv[2];
var count = 0;

var stream = fs.createReadStream(appListFile, "utf8");
var reader = readline.createInterface({ input: stream });
reader.on("line", (data) => {
  if (data != "") {
    gplay.permissions({
      appId: data,
      throttle: 2,
    }).then(checkLocation, console.log);
  }
});

function checkLocation(res) {
  count++;
  console.log(count);
  for (var i = 0; i < res.permissions.length; i++) {
    if (res.permissions[i].permission.match(/location/)) {
      fs.appendFile(outputFile, res.appId + "\n", fileError);
      return false;
    }
  }
}

function fileError(err) {
  if (err) {
    console.log(err);
  }
  return false;
}
