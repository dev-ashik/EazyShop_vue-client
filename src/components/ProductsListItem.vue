<template>
  <div class="product-container">
    <img class="product-image" :src="product.imageUrl" alt="" />
    <div class="details-wrap">
      <h3>{{ product.name }}</h3>
      <p>${{ product.price }}</p>
    </div>
    <button class="remove-button" @click="$event => removeFromCart(product)" >Remove from Cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductListItem",
  props: ["product"],
  methods: {
    removeFromCart(item) {
      let EScart = JSON.parse(localStorage.getItem('EScart'));

      const index = EScart.findIndex(cartItem => cartItem.id === item.id);


        EScart.splice(index, 1);
        
        // Update the cart in Local Storage
        localStorage.setItem('EScart', JSON.stringify(EScart));
   

      console.log(index)
    } 
  }
};
</script>

<style scoped>
.product-container {
  align-content: "center";
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}

.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}

.details-wrap {
  padding: 0 16px;
  flex: 3;
}

.remove-button {
  flex: 1;
  margin: auto;
}
</style>
