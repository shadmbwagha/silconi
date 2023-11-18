<template>
    
  <div class="container">
    <div class="text-start fw-bold my-3">home >> product</div>
    <div class="row" v-if="item">
        <div class="col-12 col-md-6 bg-light py-3">
            <div class="large-image">
                <img :src="currentImage" alt="failed to load image" class="img-fluid">
            </div>
            <div class="small-img-group d-flex justify-content-center pt-2 text-start">
                <div class="mx-2" v-for="(smallImg,index) in item.img" :key="index" @click="currentIndex = index">
                    <img :src="smallImg" alt="" :class="{active: currentIndex == index}" class="img-fluid">
                </div>
                
            </div>
        </div>
        <div class="col-12 col-md-6 text-start px-auto">
            <h4 class="py-4 py-md-2">{{item.name}}</h4>
            <div class="" v-for="x in listSplit(item.specs)" :key="x">
                {{ x }}
            </div>
          <div class="" v-for="(option,indexOption) in item.options" :key="indexOption"  @click="currentCostIndex = indexOption">
                <div class="option">
                    <p>{{ option }}</p>
                </div>           
            </div>

            <div class="my-3">
                <span>pay Via: </span>
                <span class="fw-bold">NMB, CRDB, M-Pesa, halopesa, tigopesa, airtel money</span>
            </div>
            
            <div class="mt-4 pt-2">
                <div>
                    <span class="lead fw-bold">Total: </span ><span class="h4 ms-3" style="color:#E8491D;">tsh <span class="fw-bold">{{item.cost[currentCostIndex]}}</span></span>
                    </div>
                        <div class="small my-2">
                            <label>
                                In dar es salaam region shipping cost: 
                                    <span class="text-primary"> Free shipping</span>
                            </label>
                            <label  v-if="item.cost[currentCostIndex]>250000">
                                Other regions shipping: <span class="text-primary"> 26,500/=</span>
                            </label>
                        </div>
                    
                
            </div>
           
           <router-link :to="{name: 'ConfirmOrder', params: { ItemName: item.name, price: item.cost[currentCostIndex] }}" style="text-decoration:none;">
                <div class="my-3 d-flex justify-content-center align-items-center">
                    <div class="btn-buy fw-bold mt-5">Buy Now</div>
                </div>
           </router-link>
            
        </div>
    
    </div>

    <div class="row">
        <div class="col-12 col-sm-4 div-md-6">
            <div class="text-start my-4 shadow border-0 pb-3">
        
                <div class="">
                    <img src="../assets/laptopscreen.webp" alt="" class="img-fluid h-40">
                </div>
                
                <div class="p-2 p-md-3 item">
                    <h4 class="">Laptop Screen replacement</h4>
                    <p class="">Replace broken screen with new original high quality screen</p>
                    <p class="lead" style="color:#1B373B;">Starting from: <strong class="fw-bold text-primary">tsh 60,000/=</strong></p>
                    <div class="d-flex justify-content-center align-items-center mx-auto">
                        <a class="btn-buy btn-primary border-0 fw-bold text-white" href="https://wa.me/+255621561022?text=Spare name:%0a">Request Inquiry</a>
                    </div>
                </div>
                
            </div>
          
        </div>

        <div class="col-12 col-sm-4 div-md-6">
            <div class="text-start my-4 shadow border-0 pb-3">
        
                <div class="">
                    <img src="../assets/keyboard.jpg" alt="" class="img-fluid h-40">
                </div>
                
                <div class="p-2 p-md-3 item">
                    <h4 class="">Keyboard, laptop housing, Mouse, speaker replacement available</h4>
                    <p class="lead" style="color:#1B373B;">Starting from: <strong class="fw-bold text-primary">tsh 20,000/=</strong></p>
                    <div class="d-flex justify-content-center align-items-center mx-auto">
                        <a class="btn-buy btn-primary border-0 fw-bold text-white" href="https://wa.me/+255621561022?text=Spare name:%0a">Request Inquiry</a>
                    </div>
                </div>
                
            </div>
          
        </div>
        <div class="col-12 col-sm-4 div-md-6">
            <div class="text-start my-4 shadow border-0 pb-3">
        
                <div class="">
                    <img src="../assets/pad.jpeg" alt="" class="img-fluid h-40">
                </div>
                
                <div class="p-2 p-md-3 item">
                    <h4 class="">Gadgets like games, console, Gamepads</h4>
                    <p class="lead" style="color:#1B373B;">Starting from: <strong class="fw-bold text-primary">tsh 25,000/=</strong></p>
                    <div class="d-flex justify-content-center align-items-center mx-auto">
                        <a class="btn-buy btn-primary border-0 fw-bold text-white" href="https://wa.me/+255621561022?text=Spare name:%0a">Request Inquiry</a>
                    </div>
                </div>
                
            </div>
          
        </div>
       
      
    </div>
    
  </div>
</template>

<script>
export default {
    props: ['id', 'laptops'],
    setup(){
        const options = document.querySelectorAll('.options p')
options.forEach(item => {
    option.addEventListener('click', ()=> {
        options.forEach(option => {
            option.classList.remove('selected');
        });
        option.classList.add('selected')
    });
});
    },
    data(){
        return {
            currentIndex: 0,
            currentCostIndex: 0
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
.btn-buy a{
    color: white;
    text-decoration: none;
    
}


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

.selected{
    background-color: red;
}

</style>