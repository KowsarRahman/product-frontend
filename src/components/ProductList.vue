<template>
   <div v-if="products.length > 0">
      <ProductListItem
          v-for="product in products"
          :key="product.id"
          :product="product" />
    </div>
    <p v-else>No products in cart</p>
</template>

<script>
import ProductListItem from './ProductListItem.vue';
export default {
    name: 'ProductList',
    props: ['products'],
    components: {
        ProductListItem,
    },
}
</script>



