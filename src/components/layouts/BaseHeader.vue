<script lang="ts" setup>
import { toggleDark } from "~/composables";
</script>

<template>
  <el-row>
    <el-col :span="14" class="header-logo">
      <!-- <h2>BuffMomo-1105</h2> -->
    <img src="../../assets/signature.png"/>
    </el-col>
    <el-col :span="10">
      <ul class="header-links flex justify-around">
        <li>&#128073; Home</li>
        <li>Projects</li>
        <li>Organization</li>
        <li>My Capabilities</li>
        <li>
          <span @click="toggleDark()">
            <i inline-flex i="dark:ep-moon ep-sunny"
          /></span>
        </li>
      </ul>
    </el-col>
  </el-row>
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
.header-links li:hover{
  opacity:1;
}
</style>
