<template>
    <div>
      <div class="field">
          <label for="" class="label">Product Name</label>
          <div class="control">
              <input type="text" class="input" placeholder="Product Name" v-model="productName">
          </div>
      </div>
  
      <div class="field">
          <label for="" class="label">Product Price</label>
          <div class="control">
              <input type="text" class="input" placeholder="Product Price" v-model="productPrice">
          </div>
      </div>
      <div class="control">
          <button class="button is-success" @click="updateProduct">Update</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            productName: "",
            productPrice: "",
        }
    },
    created: function(){
        this.getProductById()
    },
    methods: {
        //get product by id
        async getProductById(){
            try {
               const response = await axios.get(`http://localhost:5000/products/${this.$route.params.id}`) 
               this.productName = response.data.name
               this.productPrice = response.data.price 
            } catch (error) {
                console.log(error)
            }
        },
        //update product
        async updateProduct(){
            try {
                await axios.put(`http://localhost:5000/products/${this.$route.params.id}`, {
                    name: this.productName,
                    price: this.productPrice
                })
                this.productName = "", 
                this.productPrice = "",
                this.$router.push("/")
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style>

</style>