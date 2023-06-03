<template>
    <div id="page-wrap">
      <form id="login">
        <input type="text">
        <input type="text">
        <input type="submit" value="login">
      </form>
    </div>
  </template>
  
  <script>

  
  export default {
    name: "LoginPage",
    data() {
      return {
        // cartItems,
      };
    },
   
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
  