<template>
  <div id="page-wrap" v-if="product">
    <div id="img-wrap">
      <img v-bind:src="product.imageUrl" alt="" />
    </div>
    <div id="product-details">
      <h1>{{ product.name }}</h1>
      <h3>${{ product.price }}</h3>
      <p>Average rating: {{ product.averageRating }}</p>
      <button id="add-to-cart" @click="$event => addToCart(product)">Add to Cart</button>
      <h4>Description</h4>
      <p>{{ product.description }}</p>
    </div>
    <!-- <el-alert title="success alert" type="success" show-icon /> -->
  <!-- <el-alert
      v-if="addToCartAlert"
      title="Success"
      type="success"
      description="This is a success alert!"
      show-icon
      :closable="false"
      @close="closeAddToCartAlert"
    /> -->
  </div>

  

  <NotFoundPage v-else />
</template>

<script>
import { products } from "@/fake-data";
import NotFoundPage from "./NotFoundPage.vue";


export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: products.find((p) => p.id === this.$route.params.id),
      addToCartAlert: false
    };
  },
  methods: {
    addToCart(item) {
      if(!localStorage.getItem('EScart')) {
        localStorage.setItem('EScart', JSON.stringify([]))
      }

      let EScart = JSON.parse(localStorage.getItem('EScart'));


      EScart.push(item);

      localStorage.setItem('EScart', JSON.stringify(EScart));

      alert("product successfully added.");
      // this.addToCartAlert = true;
      
    },

    // showAddToCartAlert() {
    //   this.addToCartAlert = true;
    // },
    // closeAddToCartAlert() {
    //   this.addToCartAlert = false;
    // }
  },
  components: { NotFoundPage },
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}

.green-button {
  background-color: green;
}

.grey-button {
  background-color: #888;
}


.el-alert {
  margin: 20px 0 0;
}
.el-alert:first-child {
  margin: 0;
}

</style>
