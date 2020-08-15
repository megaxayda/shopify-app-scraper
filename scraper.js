const got = require('got');
const cheerio = require('cheerio');
const ObjectsToCsv = require('objects-to-csv');
const parser = require('./parser');
const cliProgress = require('cli-progress');

/**
 * Sleep for a period of time
 * @param {int} miliseconds
 */
async function sleep(miliseconds) {
  return new Promise( (resolve) => setTimeout(resolve, miliseconds));
}

(async () => {
  try {
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar.start(195, 0);

    for (let i = 1; i < 196; i++) {
      bar.increment();

      const response = await got(`https://apps.shopify.com/browse/all?page=${i}`);
      const $ = cheerio.load(response.body);
      const data = parser($.html());
      const csv = new ObjectsToCsv(data);
      await csv.toDisk('data.csv', {
        append: true,
      });

      await sleep(1000);
    }
    process.exit();
  } catch (error) {
    console.log(error);
  }
})();

