const cheerio = require('cheerio');

/**
 * Parse HTML to list of app object
 * @param {string} html html string
 * @return {Array} Array of apps
 */
function parser(html) {
  try {
    const $ = cheerio.load(html);
    const list = [];
    $('#SearchResultsListings > div > div').each(async (index, e) => {
      const app = {};
      // #SearchResultsListings > div:nth-child(1) > div > a > h4
      app.title = $(e).find('a > h4').text();
      list.push(app);
    });
    return list;
  } catch (error) {
    console.log(error);
    return [];
  }
}

module.exports = parser;
