<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <AppHeader/>
  <router-view/>
  <AppFooter/>
  
</template>
<script>
import HomeView from './views/HomeView.vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

export default{
  components: { HomeView,AppHeader, AppFooter },
  data(){
    return{
      laptops : [
        {name:"hp probook x360 11 G3 EE Notebook Pc touchscreen",specs: "N4000 celeron/pentium, 128gb ssd(upgradable), 4gb RAM, Wi-fi, windows 10 pro", cost:350000, url:""},
        {name: "Dell 3190 x360 touchscreen🔥", specs: "intel celeron/pentium fast max 2.4GHZ,11.6 inch intel UHD graphics 600, RAM 4GB 2400MHZ DDR4, 128GB SSD m2(upgradable),windows 10 3hrs battery time", cost:395000, url:""},
        {name:"Thinkpad 11e Yoga gen 6 x360 touchscreen", specs:'8 gen intel&reg; core&trade m3-81000Y 1.1 to 3.4 GHZ turbo boost 4MB cache,11.6" intel&reg; UHD Graphics 615 touchscreen,8GB RAM 1866MHZ, 256GB PCIe SSD, Windows 10 pro 5hrs battery', cost:497600},
        {name:"Hp Elitebook 820 G3 notebook PC", specs:"core i5-6300U(6 gen) 2.8GHZ 3MB cache,12.5inch intel HD graphics 520, HDD 500GB 7200rpm, 8GB RAM DDR4, windows 11 4 hrs battery life ", cost:585000 },
        {name:"hp Elitebook x2 1012 G2 tablet touchscreen", specs:"intel core i5-7100U 2.4GHZ 3MB cache, 12.3inch better than QHD intel HD 620, 256GB SSD M2 and SATA, 8GB DDR 3, windows 11 pro  ", cost:688000},
        {name:"hp Eltebook 840 G5 tuchscreen", specs: "core i5-7gen 2.5GHZ 6MB cache, 14inch intel UHD 620, 256GB SSD PCIe NVme, 8GB RAM DDR4 2400MHZ, windows 11 pro pes 23", cost:720000}
      ],
      accesories:[
        {}
      ]
    }
  }
}
</script>
  
<style>
#app{
text-align: center;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: #2c3e50;
}
body{
  font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica', sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 auto;
}

.btn-buy{
  background-color: black;
  padding: 10px 20px;
  color: white;
  width: 120px;
}

</style>
