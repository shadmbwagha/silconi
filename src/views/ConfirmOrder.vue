<template >
 <div class="py-3 bg-light">
  <form class="" action="/ItemsView"> 
    <h6 class="text-center">Confirm and Pay your order</h6>
    <label>Name: </label>
    <input type="text" required v-model="name">
    <label>Phone Number: </label>
    <input type="number" required v-modal="number">
    <label>Security Code: </label>
    <input type="number" placeholder="i.e 2023" required>
    <label>Delivery address: </label>
    <input type="text" required placeholder="i.e Dar-es-salaam mwenge mliman-city" v-model="adress">
    <label class=""><i class="fa fa-truck text-primary"></i>Dar es salaam: <span class="text-primary">Free delivery</span></label>
    
    <div class="my-3 small">
      <span>pay Via: </span>
      <span class="fw-bold">NMB, CRDB, M-Pesa, halopesa, tigopesa, airtel money</span>
  </div>
  <div class="small">{{ ItemName }} <br>Total: <span class="fw-bold">{{ price }}</span></div>

  <div class="terms ">
    <input type="checkbox" required>
    <label>I accept all <router-link :to="{ name : 'TermsView'}"> Terms and Conditions</router-link></label>
  </div>
  <div class="text-center">
     <button class="btn btn-primary text-white" >
      <a :href="href + ItemName + '%0a Total price: ' + price+'%0ashipping address:%0a'+name+'%0a'+ address +'%0a'+number +'%0a%0a%0aSend this message and pay message or photo%0a%0aPay on:%0aCRDB: 0152590342500 %0NMB:62010011388 %0aMobile Network:+255621561022 %0a%0aAfter finishing your payment foward us your message or photo of your receipt so that we arrange delivery fast'" class="text-white fw-bold" style="text-decoration:none;">
      Pay Now</a>
    </button>
  </div>
 
  </form>
 </div>



</template>

<script>
export default {
  props: ['ItemName', 'price'],
  data(){
    return {
      name: '',
      address: '',
      number: '',
      href : "https://wa.me/+255621561022?text=",
    }
  },
}
</script>

<style scoped>
form{
  max-width: 420px;
  margin: 30px auto;
  background:white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
  }
  label, ::placeholder {
    color:#aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color:#555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;

  }
 
</style>