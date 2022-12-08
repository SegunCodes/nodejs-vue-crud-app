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
        <button class="button is-success" @click="saveProduct">Save</button>
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
    methods:{
        async saveProduct(){
            try {
                await axios.post("http://localhost:5000/products", {
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