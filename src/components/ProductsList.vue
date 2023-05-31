<template>
  <div v-if="products.length > 0">
    <ProductsListItem
      v-for="product in products"
      :product="product"
      v-bind:key="product.id"
    />
  </div>
  <p v-else>You haven't added anyting to your cart yet!</p>
</template>

<script>
import ProductsListItem from "./ProductsListItem.vue";
export default {
  name: "ProductList",
  props: ["products"],
  components: { ProductsListItem },
};
</script>
