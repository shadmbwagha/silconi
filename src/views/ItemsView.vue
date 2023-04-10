<template>
    <div class="container text-start">
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
        <div class="row">
            <div v-for="laptop in laptops" :key="laptop.id" class="col-6 col-sm-4 div-md-6">
                <ItemShelve :name="laptop.name" :price="laptop.cost"/>
            </div>
            
        </div>

        <div class="row bg-light">
            <h6 class="w-100 pt-3">Accesories</h6>
            <div v-for="accesory in accesories" :key="accesory.id" class="col-6 col-sm-4 div-md-6">
                <ItemShelve :name="accesory.name" :price="accesory.cost[0]"/>
            </div>
           
        </div>  
        
    </div>
  
</template>

<script>
import ItemShelve from '../components/ItemShelve.vue';
export default {
    props:['laptops','accesories'],
    components: {ItemShelve}
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

</style>