import { createRouter, createWebHistory } from "vue-router";
import { pageRouterRecords } from "./pageRouterRecords";

const routes = [
  ...pageRouterRecords,
]
console.log('ROUTER RECORDS:', routes);


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to, from) => {
  let fromPage = from.path.split('/')[1] || 'home';
  let toPage = to.path.split('/')[1] || 'home';
  if (!Number.isNaN(parseInt(fromPage))) {
    fromPage = 'home';
  }
  if (!Number.isNaN(parseInt(toPage))) {
    toPage = 'home';
  }
  document.body.classList.remove(`page--${fromPage}`);
  document.body.classList.add(`page--${toPage}`);
})

export {
  router
}