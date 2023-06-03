<template>
  <div id="nav-bar">
    <div>
      <router-link to="/products" id="products-link">
        <h1>FABULOUS FOOTWEAR</h1>
      </router-link>
    </div>
    <div class="nav_links-right">
      <router-link to="/login" id="login">
        <button>Login</button>
      </router-link>
      <router-link to="/cart" id="cart-link">
        <button>Shopping Cart</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#nav-bar {
  border-bottom: 1px solid #ddd;
  height: 75px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

#products-link {
  text-align: center;
  display: block;
  color: black;
  font-size: 22px;
  /* left: 32px;
  position: absolute;
  top: 16px; */
  text-decoration: none;
}

#products-link h1 {
  margin: 0;
}

.nav_links-right {
  display: flex;
  gap: 1rem;
}
#cart-link {
  /* position: absolute;
  right: 16px;
  top: 16px; */
}
</style>
