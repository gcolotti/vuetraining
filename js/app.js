const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World!',
    sum: 3 + 6,
    value: 2,
    people: ["Guille", "Juan", "Nati", "Pedro"]
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
  }
});