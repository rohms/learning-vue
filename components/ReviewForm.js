app.component("review-form", {
  template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
        <label for="review" >Review:</label>
        <textarea id="review" v-model="review"></textarea>
        <p>Would you recommend this product?</p>
        <div clas="radio-container">
        <select class="recommend" id="recommend" v-model.number="recommend">
            <option>Yes</option>
            <option>No</option>
        </select>
        </div>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>
        <input type="submit" value="Submit">
        </form>`,
  data() {
    return {
      name: "",
      review: "",
      recommend: null,
      rating: null,
    };
  },
  methods: {
    onSubmit() {
      if (
        this.name === "" ||
        this.review === "" ||
        this.rating === null ||
        this.recommend === null
      ) {
        alert("Review is incomplete. Please fill out every field.");
        return;
      }
      let productReview = {
        name: this.name,
        review: this.review,
        rating: this.rating,
        recommend: this.recommend,
      };
      this.$emit("review-submitted", productReview);
      this.name = "";
      this.review = "";
      this.recommend = null;
      this.rating = null;
    },
  },
});
