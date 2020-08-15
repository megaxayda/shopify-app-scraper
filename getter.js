const got = require('got');
const fs = require('fs');

(async () => {
  try {
    const response = await got('https://apps.shopify.com/browse/all?page=1');
    fs.writeFileSync('site.html', response.body);
  } catch (error) {
    console.log(error);
  }
})();

