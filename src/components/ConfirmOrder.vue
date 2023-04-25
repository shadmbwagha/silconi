<template>
  <div class="backdrop">
    <div class="modal">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde esse quibusdam sapiente nemo ab magni!</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.modal{
    width: 400px;
    padding: 20px;
    margin: 100px auto;
    background: white;
    border-radius: 10px;
    color: red;
}
.backdrop{
    top: 0px;
    position: fixed;
    background: rgb(0,0,0,0.5);
    width: 100%;
    height: 100%;
    color: red;
}
</style>