<template>
  <div class="container-md">
    <div class="row bg-light text-start ps-2">
        <h2 class="text-center my-3">About Us</h2>
        <div class="col-12 col-md-8">Welcome to <b>silconi</b>, ecommerce site and freelance site for high quality electronic product and high tech works(freelance). 
            our mission is to sell electronic product that are not only beutiful and functional but also sustainable and in reasonable price.
            Also high end technology solution for your bussiness, administration problem<br><br>
            Our story began when our founder <a href="#shad">Shad Mbwagha</a> become frustrated with electronic market 
            being flooded with expensive old fashioned(outdated) product and people not ultilizing technology effectively in their workshop.
            He set out to create brand that would sell mordern classic electronic products and help to build tech solutions for different 
            problems that cause headache in managing and full automation bussines, administration
            <br><br>
            we are so proud we've created silconi and we're thrilled to be able to share our passion for sustainable tech service with you.
            thank you for supporting our brand and we can't wait to see incorporate silconi products and solutions in your home, office, institute<br><br>
            <div class="btn btn-primary col-3 my-3">Contact Us</div>
         </div>
         
    </div>
    <div class="row my-5" id="shad">
        <div class="col-md-6">
            <img src="../assets/shad.jpeg" alt="" class="img-fluid" style="height:250px; width:250px; object-fit:cover; border-radius:50%">
            <h4 class="pt-2">Shadrack Sylvester Mbwagha, CEO, Developer</h4>
        </div>
        <div class="col-md-6 py-3 mx-2 mx-md-0 text-start">
            The CEO of silconi is Shadrack Sylvester Mbwagha, student of <span class="fw-bold">Bachelor of Computer Engneering</span> 
            at Dar-es-salaam Institute of Technology(DIT) in Tanzania, 
            also have pursue in this career in making many websites <a href="silconi.com">silconi</a>, <a href="">mbungula</a> as full stack web developer, mobile apps like <a href="">AMT calculator</a>.
            <div class="py-4">
                Also expert on web development(full stack developer current am working mostly on backend development) ,
                 mobile app development(Android, Ios), cloud computing in Microsoft Azure, Godaddy, AWS, ..., 
                 sofwatre graphics(font-end) design, System analystics and project manager,Machine Learning(firebase), 
                 electronic circuit design and building,computer system repair and maintainance
            </div>
        </div>
    </div>
    <div class="py-4">
        To see our policies, Terms and Condition <router-link :to="{name: 'TermsView'}">Click here</router-link>
    </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>