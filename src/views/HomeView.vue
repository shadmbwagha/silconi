<template>
  <div class="container-md my-5 mx-auto ">
    <div class="main-category-show my-5 p-0 pd-md-3">
      <div class="main-display-1 d-flex flex-column justify-content-end">
        <div class="mb-5 pb-5">
          <h3>Brand new product</h3>
          <h6>genuine and original products with warranty</h6>
        </div>
        <div class="d-flex justify-content-between mb-4">
          <div class="ms-5 text-center category">
            <h6 class="category">Laptops</h6>
            <div class="white-line"></div>
          </div>
          <div class="me-5 text-center category">
            <router-link :to="{name : 'ItemsView'}" class="h6 link text-white">Gadgets</router-link>
            <div class="white-line"></div>
          </div>
        </div> 
      </div>

      <div class="main-display-2">
        <div class="sub-display-1 d-flex flex-column justify-content-end">
          <div class="d-flex justify-content-between mb-2">
            <div class="ms-md-5 text-center">
              <router-link :to="{name : 'ItemsView'}"  class="category h6 link text-white">Accesories</router-link>
              <div class="white-line"></div>
            </div>
            <div class="me-md-5 text-center">
              <router-link :to="{name : 'ItemsView'}" class="h6 category link text-white">Computer spares</router-link>
              <div class="white-line"></div>
            </div>
          </div> 
        </div>
        <div class="sub-display-2 d-flex flex-column justify-content-end">
            <h5 class="d-none d-md-none d-sm-none">Smart Home <span class="text-primary fw-bolder">Comming soon</span></h5>
        </div>
      </div>
    </div>


    <div class="my-5 bg-light" >
        <h4 class="py-4">Our product</h4>
        <p class="lead">from top giant product technology companies which have experience on field more years. They are durable, genuine, original and new ones.We sell them in very reasonable price and easy getting them on time.</p> 
        
        <div class="py-5 row px-md-3 item justify-content-center align-items-end">
          <div v-for="laptop in laptops" :key="laptop.id" class="col-12 col-md-3">
              <div v-if="laptop.id<=4">
                <router-link :to="{ name : 'ItemView', params:{id : laptop.id}}">
                  <ItemShelve :name="laptop.name" :price="laptop.cost[0]" :desc="laptop.specs" :img="laptop.img[0]"/>
                </router-link>
              </div>
          </div>
          
        </div>
        <div class="row justify-content-center align-items-center py-4">
          <div class="col-6 col-sm-3 item text-center">
            <router-link :to="{name:'ItemsView'}">
              <div class="btn-buy px-3 py-2" width="100px">see more...</div>
            </router-link>
          </div>
        </div>
      </div>

    <div class="row my-5 text-center d-flex flex-column justify-content-between align-items-center" >
      <h4 class="py-5">Software Development</h4>
      <div class="w-100">
         <p class="lead">We develop website, mobile apps, systems, API,... <br> in time using current trending technologies which are very effecient and fast in very reliable price </p> 
      </div>

      <div class="col-12 col-lg-6 d-flex flex-column justify-content-between align-items-center">
        <div class="card border-primary border-2 ">
          <div class="card-header text-center text-primary">Mostly popular</div>
          <div class="card-body text-center py-4">
             <p class="lead card-subtitle">ecommerce, personal, information website,academic, ...</p>
             <p class="display-3  my-4 text-primary fw-bold">Web Development</p>
             <p class="card-text mx-5 text-muted d-none d-lg-block">fast, beutiful responsive on all screen size</p>
             <p class="lead">Starting from: <span class="fw-bold">tsh 87,000/=</span></p>
             <router-link :to="{name: 'Freelance'}" class="btn btn-outline-primary btn-lg mt-3">See more ...</router-link>
          </div>
        </div>
      </div>

    </div>  
  </div>

  
</template>
<script>
import ItemShelve from '../components/ItemShelve.vue';


export default{
  props:['laptops'],
  components: { ItemShelve}
}
</script>
  
<style>

body{
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 auto;
}



/* css grid for main-category-show*/
.sub-display-1{
  grid-area: sub-display-1;
  background-image: url('../assets/ssdm2256.jpeg');
  background-size: cover;
  background-repeat: none;
  background-position: center center; 
}

.sub-display-2{
  grid-area: sub-display-2;
  background-image: url('../assets/earpodspro.jpeg');
  background-size: cover;
  background-repeat: none;
  background-position: center center;
}
.main-display-1{
  grid-area: main-display-1;
  background-image: url('../assets/Gamepad.jpeg');
  background-size: cover;
  background-repeat: none;
  height: 330px;
}
.main-display-2{
  grid-area: main-display-2;
  height: 330px;
  display: grid;
  grid-template-columns:1fr ;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "sub-display-1" "sub-display-2";

}

.main-category-show{
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "main-display-1 main-display-2";
  color: white;
}

.white-line{
  background: white;
  height: 2px;
  width: 80%;
}
/* .category:hover{
  width:100px;
  font-weight: bolder;
  cursor: pointer;
  color: #ddd;
} */
router-link{
  text-decoration: none;
  color: white;
}

@media(max-width: 767px){
  .main-category-show{
    grid-template-rows: auto auto;
    grid-template-columns: auto;
    grid-template-areas: "main-display-1" "main-display-2";
  }

  .main-display-1{
    height: 330px;
    background-size:cover;
    background-repeat: 0;
    background-position: center;
  }

  .main-display-2{
    grid-template-rows: auto;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "sub-display-1 sub-display-2";
    height: 180px;
  }
 
}
</style>
