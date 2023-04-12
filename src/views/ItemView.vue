<template>
  <div class="container">
    <div class="text-start fw-bold my-3">home >> product</div>
    <div class="row" v-if="item">
        <div class="col-12 col-md-6 bg-light py-3">
            <div class="large-image">
                <img :src="currentImage" alt="failed to load image" class="img-fluid">
            </div>
            <div class="row small-img-group d-flex justify-content-start pt-2">
                <div class="col col-start" v-for="(smallImg,index) in item.img" :key="index" @click="currentIndex = index">
                    <img :src="smallImg" alt="" :class="{active: currentIndex == index}" class="img-fluid">
                </div>
                
            </div>
        </div>
        <div class="col-12 col-md-6 text-start px-auto">
            <h4 class="py-4 py-md-2">{{item.name}}</h4>
            <div class="" v-for="x in listSplit(item.specs)" :key="x">
                {{ x }}
            </div>
          <div class="" v-for="option in item.options" :key="option">
                <div class="option">
                    <p>{{ option }}</p>
                </div>           
            </div>
            <div class="mt-4 pt-2">
                <div>
                    <span class="lead fw-bold">Total: </span ><span class="h4 ms-3" style="color:#E8491D;">tsh <span class="fw-bold">{{item.cost[0]}}</span></span>
                    <br><span class="small" v-if="item.cost>=100000"><span class="fa fa-truck text-primary" ></span> free delivery in dar es salaam</span> 
                </div>
            </div>
           
           
            <div class="my-3 d-flex justify-content-center align-items-center">
                <div class="btn-buy fw-bold mt-5"><a :href="href + item.name + ' price: ' + item.cost">Buy Now</a></div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['id', 'laptops'],
    data(){
        return {
            currentIndex: 0,
            href : "https://wa.me/+255621561022?text="
        }
    },
     computed:{
        item(){
            const itemId = this.id 
            return this.laptops.find(item => item.id== parseInt(itemId))
        },
        currentImage(){
            return this.item.img[this.currentIndex]
        }
       
    },
    methods:{
        listSplit(x){
            return x.split(',')
        },
       
    },

   
}
</script>

<style>

.small-img-group img{
    max-height: 70px;
    max-width: 70px;
    cursor: pointer;
}
.small-img-group img.active{
    border: 2px solid red;
    opacity: .5;
}
.large-image img{
    max-height: 350px;
    max-width: 100%;
}
.option p{
    border-radius: 4px;
    border: 1px solid black;
    width: fit-content;
    padding: 5px 10px;
}
.option p:hover{
    background-color: #ddd;
}
</style>