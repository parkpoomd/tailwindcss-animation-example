import { createRouter, createWebHashHistory } from 'vue-router';
import DropdownSimple from '../views/DropdownSimple.vue';

const routes = [
  {
    path: '/dropdown-simple',
    name: 'DropdownSimple',
    component: DropdownSimple
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
