<template>
    <div class="container-md text-start">
        <div class="my-3 d-flex justify-content-between align-items-center">
            <div class="text-start ">All - <span class="fw-bold">50 results</span></div>
            <div class="d-flex justify-content-between">
                <div class="pill">Laptops</div>
                <div class="pill">accesories</div>
                <div class="pill">gadgets</div>
                <div class="pill">spares</div>
            </div>
           
        </div>
        <hr class="mb-2">
        <h6 class="pt-3">Laptops</h6>
        <div class="row justify-content-start align-items-end">
            <div v-for="laptop in laptops" :key="laptop.id" class="col-6 col-sm-4 div-md-6">
                <router-link :to="{name: 'ItemView', params:{id : laptop.id}}" class="link">
                    <ItemShelve :name="laptop.name" :price="laptop.cost[0]" :desc="laptop.specs" :img="laptop.img[0]"/>
                </router-link>
                
            </div>   
        </div>
        
    </div>
  
</template>

<script>
import ItemShelve from '../components/ItemShelve.vue';
import {computed, ref} from 'vue'
export default {
    props:['laptops'],
    components: {ItemShelve},
    setup(){
        // const search=''
        // const matchingItem = computed(() => {
        //     return props.laptops.filter(item => {
        //         return item.name.toLowerCase().includes(this.search.toLowerCase())
        //     })
        // })
        // return {search}
    }
}
</script>

<style>

.pill{
    border-radius: 4px;
    padding: 5px 10px;
    margin: 5px 10px;
    border: 1px solid #707070;
    width: 100%;
}
.pill:hover{
    background: #eee;
    cursor: pointer;
}
.link{
    text-decoration: none;
    color: black;

}

</style>