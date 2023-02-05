<script setup lang="ts">
import { ref } from 'vue';
import img1 from "../assets/broker-exchange.png"
import img2 from "../assets/corenroll.png"
import img3 from "../assets/cts-logo-1.svg"
import img4 from "../assets/elevate_wellness.png"
import img5 from "../assets/elite.png"
import img6 from "../assets/nuera.png"
const orgList=ref([
    {link:"http://www.benadvance.com/", imgSrc:'https://eokeh28br3n.exactdn.com/wp-content/uploads/Avalanche-Canada-Logo.jpg?strip=all&lossy=1&ssl=1'},
    {link:"http://www.benadvance.com/", imgSrc:img2},
    {link:"http://www.benadvance.com/", imgSrc:img4},
    {link:"http://www.benadvance.com/", imgSrc:img5},
    {link:"http://www.benadvance.com/", imgSrc:img6},
])
</script>
<template>
    <div class="w-auto m-auto">
        <h1>
            Currently, working at 
        </h1>
        <br>
        Keela Nepal<a href="https://www.keela.co" target="_blank" class="cts"> &#127757;
        <br>
        <img src="https://eokeh28br3n.exactdn.com/wp-content/uploads/logo.png?strip=all&lossy=1&ssl=1" alt="" class="w-[50%]">
    </a>
        <div class="orgs-box">
            <a v-for="item in orgList" class="org-links">
                <img  :src="item.imgSrc" alt="img">
            </a>
        </div>
</div>
</template>
<style>
.cts{
 text-decoration:none;
}
.orgs-box{
    margin-top: 7rem;
}
.org-links{
    margin:0rem 3rem;
}
</style>
