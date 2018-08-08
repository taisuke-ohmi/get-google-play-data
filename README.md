# get-google-play-data
a script to get google play data

## Installation
```
git clone git@github.com:taisuke-ohmi/get-google-play-data.git
cd get-google-play-data
npm install
```

## Usage
#### target_category.js
target_category.js can get data for specified category.
set condition as following.
```
gplay.list({
  category: gplay.category.BUSINESS, // set category 
  num: 10, // set number to get
}).then(writeCSV, console.log);
```
