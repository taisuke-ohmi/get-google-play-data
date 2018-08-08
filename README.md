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
target_category.js can get data for specified category and create target_category_yyyymmddhhmmss.csv in the same directory.
set condition as following.
```
gplay.list({
  category: gplay.category.BUSINESS, // set category 
  num: 10, // set number to get
}).then(writeCSV, console.log);
```

#### target_app.js
target_app.js can get data for specified appId and create target_app_yyyymmddhhmmss.csv in the same directory.
set condition as following.
```
gplay.app({
  appId: 'com.dxco.pandavszombies' // set android appId
}).then(writeCSV, console.log);
```

#### target_search_term.js
target_search_term.js can get data for specified search term and create target_search_term_yyyymmddhhmmss.csv in the same directory.
set condition as following.
```
gplay.search({
  term: "panda", // set search term
  num: 5 // set number to get
}).then(writeCSV, console.log);
```
