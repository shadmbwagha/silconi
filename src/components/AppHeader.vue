<template>
    <header class="shadow-sm fixed">
        <div class="px-0 py-0 text-black">
          <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-decoration-none" style="color:#288085;">
                <div class="fw-bolder me-2 display-7 my-3">SILCONI</div>
              </a>
             
              <ul class="nav col-12-auto col-lg-auto my-2 align-items-center my-md-0 text-small">
                <!-- <li>
                  <div @click="back" class=" fa fa-arrow-left text-muted"></div>
                </li> 
                <li>
                  <div @click="back" class=" fa fa-arrow-right"></div>
                </li> -->
                <li>
                  <router-link to="/" class="nav-link text-secondary text-center mx-auto ">
                    <i class="fa fa-home mx-auto text-muted"></i>
                  </router-link>
                </li>
                <li>
                  <router-link :to="{ name : 'ItemsView'}" class="nav-link text-black text-center mx-auto">
                  Electronics
                  </router-link>
                </li>

                <li>
                  <router-link :to=" {name : 'Freelance'}" href="#software development" class="nav-link text-black text-center mx-auto">
                    <!-- <i class="fa fa-gears mx-auto"></i><br> -->Freelance
                  </router-link>
                </li>

                <li>
                  <router-link :to="{name : 'AboutView'}" class="nav-link text-black text-center mx-auto">
                    <!-- <i class="fa fa-gears mx-auto"></i><br> -->About
                  </router-link>
                </li>
                
                
              </ul>
            </div>
          </div>
        </div>
      </header>
</template>

<script>
export default {

}
</script>

<style>
a{
  text-decoration: none;
  color: black;
}
.fa{
  font-size: 20px;
  color: black;
  }


</style>