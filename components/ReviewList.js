app.component("review-list", {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `<div class="review-container">
    <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
            <p class="review-recommend">Would the user recommend this product: <b>{{review.recommend}}</b></p>
            <b>{{ review.name }}</b> gave this {{ review.rating }} stars
            <br/>
            <p class="my-review">"{{ review.review }}"</p>
            <span class="divider"></span>
            </li>
            
        </ul>
    </div>`,
});
