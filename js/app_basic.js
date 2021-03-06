const ZergPage = { template: '<div>Zerg</div>' };
const TerranPage = { template: '<div>Terran</div>' };
const ProtossPage = { template: '<div>Protoss</div>' };

const routes = [
  { path: '/zerg', component: ZergPage },
  { path: '/terran', component: TerranPage },
  { path: '/protoss', component: ProtossPage }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  el: '#app',
  router,
  data: {
    message: 'Hello World!',
    sum: 3 + 6,
    value: 2,
    people: ["Guille", "Juan", "Nati", "Pedro"],
    title: "<h1>Zerg Swarm</h1>",
    imageSrc: 'https://bnetcmsus-a.akamaihd.net/cms/blog_header/u0/U0EAW79NTVXP1498164245687.jpg',
    imageTitle: 'Zerg Swarm',
    number: 14,
    v_model: 'Zerg Swarm',
    hasError: true,
  },
  computed: {
    reverseString: function () {
      return this.message.split('').reverse().join('');
    }
  },
  methods: {
    calculateSum: (val1, val2) => {
      return val1 + val2;
    },
    increment: function () {
      this.number++;
    },
    decrement: function () {
      this.number--;
    }
  },
  watch: {
    number: (value) => {
      console.log('New value for number:', value);
    },
  }
});