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
      app.title = $(e).find('a > h4').text();
      app.author = $(e).find('div.ui-app-card__by-line > div').text().split(' ')[1];
      app.desc = $(e).find('p').text();
      app.rating = $(e).find('div.ui-app-card__review > div > div.ui-star-rating__text > span.ui-star-rating__rating').text().split(' ')[0];
      app.reviews = $(e).find('div.ui-app-card__review > div > div.ui-star-rating__text > span.ui-review-count-summary').text();

      const regex = /\d*/g;
      app.reviews = app.reviews.match(regex)[1];

      app.pricing = $(e).find('div.ui-app-card__context > div > div').text();
      app.url = $(e).find('div > a').attr('href');

      list.push(app);
    });
    return list;
  } catch (error) {
    console.log(error);
    return [];
  }
}

module.exports = parser;
