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

var appListFile = process.argv[2];

var stream = fs.createReadStream(appListFile, "utf8");
var reader = readline.createInterface({ input: stream });
reader.on("line", (data) => {
  if (data != "") {
    gplay.permissions({
      appId: data,
      throttle: 2,
    }).then(checkLocation, errorWrite);
  }
});

function checkLocation(res) {
  for (var i = 0; i < res.permissions.length; i++) {
    if (res.permissions[i].permission.match(/location/)) {
      console.log(res.appId);
      return;
    }
  }
}

var errorFile = "error.log"
function errorWrite(error) {
  fs.appendFile(errorFile, error, (err) => { return false; });
  fs.appendFile(errorFile, "\n", (err) => { return false; });
}
