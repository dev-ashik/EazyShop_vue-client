<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>

    <ProductsList :products="cartItems" />

    <h3 id="total-price">Total: ${{ totalPrice }}</h3>
    <button id="checkout-button">Proceed to Checkout</button>
  </div>
</template>

<script>
import ProductsList from "@/components/ProductsList.vue";
// import { cartItems } from "@/fake-data";
// import { computed } from '@vue/reactivity';

export default {
  name: "CartPage",
  data() {
    return {
      cartItems: [],
    };
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + Number(item.price), 0);
    },
  },
  created() {

    if (localStorage.getItem('EScart')) {
      this.cartItems = JSON.parse(localStorage.getItem('EScart'));
    }
  },
  components: { ProductsList },
};
</script>

<style scoped>
h1 {
  border-bottom: 1px solid black;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}

#total-price {
  padding: 16px;
  text-align: right;
}

#checkout-button {
  width: 100%;
}
</style>
