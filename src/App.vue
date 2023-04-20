<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <AppHeader/>
  <router-view :laptops="laptops" :accesories="accesories"/>
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
        {name:"hp probook x360 11 G3 EE Notebook Pc touchscreen",specs: "N4000 celeron/pentium, 128gb ssd(upgradable), 4gb RAM, Wi-fi, windows 10 pro", cost:[350000], options:[],img:[require("@/assets/hpprobook11ey1.jpg"),require("@/assets/hpprobook11ey2.jpg"),require("@/assets/hpprobook11ey3.jpg"),require("@/assets/hpprobook11ey4.jpg"),],  id:1},
        {name: "Dell 3190 x360 touchscreen🔥", specs: "intel celeron/pentium fast max 2.4GHZ,11.6 inch intel UHD graphics 600, RAM 4GB 2400MHZ DDR4, 128GB SSD m2(upgradable),windows 10 3hrs battery time",options:[], cost:[395000], img:[require('@/assets/delllatitude3190y1.jpeg'),require('@/assets/delllatitude3190y2.jpg'),require('@/assets/delllatitude3190y3.jpg'),require('@/assets/delllatitude3190y4.jpg')], id:2},
        {name:"Thinkpad 11e Yoga gen 6 x360 touchscreen", specs:'8 gen intel core m3-81000Y 1.1 to 3.4 GHZ turbo boost 4MB cache,11.6" intel&reg; UHD Graphics 615 touchscreen,8GB RAM 1866MHZ, 256GB PCIe SSD, Windows 10 pro 5hrs battery',options:[], cost:[497600], img:[require("@/assets/thinkpad11eyogay1.jpg"),require("@/assets/thinkpad11eyogay2.jpg"),require("@/assets/thinkpad11eyogay3.jpg"),require("@/assets/thinkpad11eyogay4.jpg"),require("@/assets/thinkpad11eyogay5.jpg"),],id:3},
        {name:"Hp EliteBook 820 G3 notebook PC", specs:"core i5-6300U(6 gen) 2.8GHZ 3MB cache,12.5inch intel HD graphics 520, HDD 500GB 7200rpm, 8GB RAM DDR4, windows 11 4 hrs battery life ",options:[], cost:[565000], img:[require("@/assets/hp820g3y1.jpg"),require("@/assets/hp820g3y2.jpg"),require("@/assets/hp820g3y3.jpg"),require("@/assets/hp820g3y1.jpg"),], id:4},
        {name:"hp EliteBook x2 1012 G2 tablet touchscreen", specs:"intel core i5-7100U 2.4GHZ 3MB cache, 12.3inch better than QHD intel HD 620, 256GB SSD M2 and SATA, 8GB DDR 3, windows 11 pro  ",options:[], cost:[655000], img:[require("@/assets/EliteBookx21012.png")], id:5},
        {name:"hp ElteBook 840 G5 tuchscreen", specs: "core i5-7gen 2.5GHZ 6MB cache, 14inch intel UHD 620, 256GB SSD PCIe NVme, 8GB RAM DDR4 2400MHZ, windows 11 pro pes 23", cost:[720000],options:[], img:[require("@/assets/hp840g5.jpeg"),require("@/assets/hp840g5y2.jpeg"),require("@/assets/hp840g5y3.jpeg"),require("@/assets/hp840g5y4.jpeg"),require("@/assets/hp840g5y5.jpeg"),require("@/assets/hp840g5y6.jpeg")], id:6},
        {name:"harddisk sata 2.5 320GB, 500GB, 1TB",specs:"fast file transfer, low heat, less noise", options:['320GB', '500GB 7200rpm', '1TB'],cost:[30000,45000,98000],img:[require("@/assets/hddy1.jpeg")],id:7},
        {name:"External Harddisk case",specs:"protect hard disk from shocks, keep hard disk health in long time", options:["1","2"], cost:[15000,20000],img:[require("@/assets/ssdm2256.jpeg")],id:8},
        {name:"RAM 2GB 8GB 16GB DDR3 DDR4", specs:"boost your computer speed and perfomance", options:['2GB-DDR3', '4GB-DDR3', '8GB-DDR3', '4GB-DDR4','8GB-DDR4','16GB-DDR4'], cost:[25000,35000,65000,55000, 70000,120000],img:[require("@/assets/ramy2.jpeg")],id:9},
        {name:"Laptops Adapter",specs:"power you laptop in short time and durable perfect replacement of pc adapter",options:["adapter", " Pro adapter"],cost:[25000,30000],img:[require("@/assets/laptopsadaptery1.jpeg")],id:10},
        {name:"Earpods",specs:"Quality music",options:[],cost:[15000],img:[require("@/assets/earpods85y1.jpeg"),require("@/assets/earpods85y2.jpeg")],id:12},
        {name:"Earpods",specs:"Quality music, pure bass, bluetooth 5.1, 250mAh",options:[],cost:[30000],img:[require("@/assets/earpods30y1.jpeg"),require("@/assets/earpods30y2.jpeg")],id:13},
        {name:"Earpods pro",specs:"good music, noise cancellation ",options:[],cost:[55000],img:[require("@/assets/earpodspro.jpeg")],id:14}
      ]
    }
  },




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
  width: 80%;
  text-align: center;
}

</style>
