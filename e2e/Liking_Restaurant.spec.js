const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#list');
  I.wait('Tidak ada restaurant untuk ditampilkan', '.list_item_not-found');
});

Scenario('liking one Restaurant', async ({ I }) => {
  I.wait('Tidak ada restaurant untuk ditampilkan', '.list_item_not-found');

  I.amOnPage('/');
  // pause();
  I.waitForElement('.list_item_title a');
  I.seeElement('.list_item_title a');

  // I.click(locate('.list_item_title a').first());

  // I.seeElement('#likeButton');
  // I.click('#likeButton');

  const firstRestaurant = locate('.list_item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.list_item');
  const likedFilmTitle = await I.grabTextFrom('.list_item_title');

  assert.strictEqual(firstRestaurantTitle, likedFilmTitle);
});

Scenario('unfavorite restaurant', async ({ I }) => {
  I.wait('Tidak ada restaurant untuk ditampilkan', '.list_item_not-found');

  I.amOnPage('/');

  I.waitForElement('.list_item_title a');
  I.seeElement('.list_item_title a');

  const firstRestaurant = locate('.list_item_title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.seeElement('.list_item');
  const likedFilmTitle = await I.grabTextFrom('.list_item_title');

  assert.strictEqual(firstRestaurantTitle, likedFilmTitle);

  // I.waitForElement('.list_item_title a');
  I.seeElement('.list_item_title a');

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.wait('Tidak ada restaurant untuk ditampilkan', '.list_item_not-found');
});
