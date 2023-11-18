<template>
    <div class="text-start my-3 shadow shadow-sm border-0 pb-3">
        
        <div class="">
            <img :src="img" alt="" class="img-fluid h-40">
        </div>
        
        <div class="p-2 p-md-3 item">
            <h4 class="">{{ name }}</h4>
            <p class="">{{ desc }}</p>
            <p class="lead" style="color:#E8491D;">tsh <strong class="fw-bold">{{ price }}</strong></p>
            <div class="d-flex justify-content-center align-items-center mx-auto">
                <div class="btn-buy fw-bold">Buy Now</div>
            </div>
        </div>
        
    </div>
  
</template>

<script>
import { computed } from 'vue'
export default {
    props:['name','price', 'desc','img'],
    setup(props) {
        const name = computed( () => {
            return props.name.substring(0,25)+'....'
        })
        const desc = computed( () => {
            return props.desc.substring(0,35)+'....'
        })

        return { name, desc}
    }
}
</script>

<style>

.item a{
    text-decoration: none;
    color: black;
}


</style>