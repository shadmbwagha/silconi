<template>
    <div class="text-start my-4 shadow border-0 pb-3">
        
        <div class="">
            <img src="../assets/earpodspro.jpeg" alt="" class="img-fluid h-40">
        </div>
        
        <div class="p-2 pd-md-3 item">
            <router-link :to="{ name: 'ItemView'}">
            <h4 class="">Earpods Pro 2022</h4>
            <p class="">ear beutiful music with noise cancellation</p>
            <p class="lead" style="color:#E8491D;">tsh <span class="fw-bold">55 000</span></p>
            <div class="">
            <div class="btn-buy fw-bold">Buy Now</div>
            </div>
            </router-link>
        </div>
        
    </div>
  
</template>

<script>
export default {

}
</script>

<style>

.item a{
    text-decoration: none;
    color: black;
}


</style>