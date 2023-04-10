<template>
    <div class="text-start my-4 shadow border-0 pb-3 ">
        
        <div class="">
            <img src="../assets/earpodspro.jpeg" alt="" class="img-fluid h-40">
        </div>
        
        <div class="p-2 pd-md-3 item">
            <h4 class="">{{ name }}</h4>
            <p class="">ear beutiful music with noise cancellation</p>
            <p class="lead" style="color:#E8491D;">tsh <span class="fw-bold">{{ price }}</span></p>
            <div class="">
            <div class="btn-buy fw-bold">Buy Now</div>
            </div>
        </div>
        
    </div>
  
</template>

<script>
import { computed } from 'vue'
export default {
    props:['name','price'],
    setup(props) {
        const name = computed( () => {
            return props.name.substring(0,25)+'....'
        })

        return { name }
    }
}
</script>

<style>

.item a{
    text-decoration: none;
    color: black;
}


</style>