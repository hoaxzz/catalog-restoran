import homePage from '../views/pages/home-page';
import favorites from '../views/pages/favorites';
import Detail from '../views/pages/detail';

const routes = {
  '/': homePage, // default page
  '/home-page': homePage,
  '/favorites': favorites,
  '/detail/:id': Detail,
};

export default routes;
