const got = require('got');
const cheerio = require('cheerio');
const fs = require('fs');
const ObjectsToCsv = require('objects-to-csv');

(async () => {
  try {
    const response = await got('https://apps.shopify.com/browse/all?page=1');
    console.timeLog('Main');
    const $ = cheerio.load(response.body);

    // const array = [];
    $('#SearchResultsListings > div > div').each((index, e) => {
      // #SearchResultsListings > div:nth-child(1) > div > a > h4
      console.log( $(e).find('a > h4').text());
    });

    const csv = new ObjectsToCsv([app]);

    await csv.toDisk('data.csv', {
      append: true,
    });

    // console.log($.html());
  } catch (error) {
    console.log(error.response.body);
  }
})();

