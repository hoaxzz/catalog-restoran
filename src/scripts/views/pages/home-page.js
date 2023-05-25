import RestaurantSource from '../../data/restaurant-sources';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const homePage = {
  async render() {
    return `
    <div class="hero" style="background-image: linear-gradient(rgba(0, 0, 6, .6), rgba(0, 0, 6, .6)), url('./images/hero-image_4-large.jpg');">
          <div class="heroinner">
              <h1 class="herotitle">Hunger Apps</h1>
          </div>
      </div>

      <main id="content">
          <section class="content">
              <div class="latest">  
                  <h1>Restaurant List</h1>
                  <div class="list" id="list"></div>
              </div>
          </section>
      </main>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('#list');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default homePage;
