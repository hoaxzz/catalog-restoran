/* eslint-disable max-len */
// import FavoriteRestaurantSearchPresenter
//   from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-search-presenter';
// import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

// describe('Searching restaurant', () => {
//   beforeEach(() => {
//     document.body.innerHTML = `
//         <div id="restaurant-search-container">
//             <input id="query" type="text">
//             <div class="restaurant-result-container">
//                 <ul class="restaurant">
//                 </ul>
//             </div>
//         </div>
//         `;
//   });

//   it('should be able to capture the query typed by the user', () => {
//     spyOn(FavoriteRestaurantIdb, 'searchrestaurant');
//     const presenter = new FavoriteRestaurantSearchPresenter({
//       FavoriteRestaurant: FavoriteRestaurantIdb,
//     });

//     const queryElement = document.getElementById('query');
//     queryElement.value = 'restaurant a';
//     queryElement.dispatchEvent(new Event('change'));

//     expect(presenter.latestQuery).toEqual('restaurant a');
//   });

//   it('should ask the model to search for liked restaurant', () => {
//     spyOn(FavoriteRestaurantIdb, 'searchRestaurant');
//     const presenter = new FavoriteRestaurantSearchPresenter({ FavoriteRestaurant: FavoriteRestaurantIdb });

//     const queryElement = document.getElementById('query');
//     queryElement.value = 'restaurant a';
//     queryElement.dispatchEvent(new Event('change'));

//     expect(FavoriteRestaurantIdb.searchRestaurant)
//       .toHaveBeenCalledWith('restaurant a');
//   });
// });
