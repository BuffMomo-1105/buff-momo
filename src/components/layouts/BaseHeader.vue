<script lang="ts" setup>
import { RouterLink } from "vue-router";
import { toggleDark } from "~/composables";
</script>

<template>
  <el-row class="desktop-header">
    <el-col :span="14" class="header-logo">
      <!-- <h2>BuffMomo-1105</h2> -->
    <img src="../../assets/signature.png"/>
    </el-col>
    <el-col :span="10">
      <ul class="header-links flex justify-around">
        <li><RouterLink to="/"> Home</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/organizations">Organization</RouterLink></li>
        <li><RouterLink to="/capabilities">My Capabilities</RouterLink></li>
        <li>
          <span @click="toggleDark()">
            <i inline-flex i="dark:ep-moon ep-sunny"
          /></span>
        </li>
      </ul>
    </el-col>
  </el-row>
  <div class="mobile-header">
    <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="1"><RouterLink to="/"> Home</RouterLink></el-menu-item>
    <el-menu-item index="2"><RouterLink to="/projects">Projects</RouterLink></el-menu-item>
    <el-menu-item index="3"><RouterLink to="/organizations">Organization</RouterLink></el-menu-item>
    <el-menu-item index="4"><RouterLink to="/capabilities">My Capabilities</RouterLink></el-menu-item>
  </el-menu>
  <span @click="toggleDark()" class="mbl-theme">
        <i inline-flex i="dark:ep-moon ep-sunny"
        /></span>
        </div>
</template>
<style>
.header-logo {
  text-align: left !important;
}
.header-logo img{
  position: relative;
    top: -1rem;
    left: -6rem;
}
.header-links {
  list-style: none;
  color: #a8a8a8;
  opacity: 6;
  margin-top:2.5rem !important;
}
.header-links li a:hover{
  color: var(--ep-color-warning);
  opacity:1;
}
.header-links li a{
  color: #a8a8a8;
  text-decoration: none;
}

@media screen and (max-width: 1000px)  {
    .desktop-header {
        display: none;
    }
}
@media screen and (min-width: 1000px)  {
    .mobile-header {
        display: none;
    }
    .router-link-exact-active::before  {
  content: "👉";
  margin-right: 5px;
}
}
.mbl-theme{
  position: absolute;
    bottom: 0;
    padding: 1rem;
    left: 0;
    box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset;
    border-radius: 34%;
}
.mobile-header a{
  list-style: none;
  color: #a8a8a8;
  text-decoration: none;
}
</style>
