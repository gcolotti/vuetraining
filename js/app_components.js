const router = new VueRouter({
  base: 'vuetraining',
  routes: [
    {
      path: '/zerg_units',
      component: ZergUnits,
    },
    {
      path: '/terran_units',
      component: TerranUnits,
    },
    {
      path: '/protoss_units',
      component: ProtossUnits,
    },
  ],
});

const app = new Vue({
  el: '#app',
  router,
});