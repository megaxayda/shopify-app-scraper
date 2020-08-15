const got = require('got');
const fs = require('fs');

(async () => {
  try {
    const response = await got('https://apps.shopify.com/browse/all?page=1');
    console.log(response.body);
    fs.writeFileSync('site.html', response.body);

    // console.log($.html());
  } catch (error) {
    console.log(error);
  }
})();

