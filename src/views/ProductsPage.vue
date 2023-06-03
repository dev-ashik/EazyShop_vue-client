<template>
  <div id="page-wrap">
    <ProductsGrid :products="products" />
  </div>
</template>

<script>
import ProductsGrid from "@/components/ProductsGrid.vue";
import { products } from "@/fake-data";
// import axios from 'axios'

export default {
  name: "ProductsPage",
  data() {
    return {
      products
      // products: [],
    };
  },
  // async created() {
  //   const result = await axios.get("http://localhost:8000/api/product/products")
  //   const products = result.data;
  //   this.products = products;
  // },
  components: { ProductsGrid },
};
</script>

<style></style>
