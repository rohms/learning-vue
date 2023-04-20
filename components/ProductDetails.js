app.component("product-details", {
  props: {
    details: {
      type: Array,
      required: true,
    },
  },
  /*html*/
  template: `<ul>
    <li v-for="detail in details">{{ detail }}</li>
  </ul>`,
});
