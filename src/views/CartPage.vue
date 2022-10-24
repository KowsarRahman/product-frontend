<template>
  <div id="page-wrap">
    <h1>Shopping Cart</h1>
    <ProductList :products="cartItems" />
    <h3 id="total-price">Total: ${{ totalPrice }}</h3>
      <button id="checkout-button">Proceed to Checkout</button>
  </div>
  </template>
  
  <script>
  import { cartItems } from '../fake-data';
  import ProductList from '@/components/ProductList.vue';
  
  export default {
      name: 'CartPage',
      data() {
        return {
          cartItems,
        }
      },
      components: {
        ProductList,
      },
      computed: {
        totalPrice() {
          return this.cartItems.reduce(
            (sum, item) => sum + Number(item.price),
            0,
          );
        }
      }
  };
  </script>

<style scoped>
.grid-wrap {
     display: flex;
     flex-wrap: wrap;
     justify-content: space-between;
     margin-top: 16px;
   }
</style>
  
  