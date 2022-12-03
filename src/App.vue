<script setup lang="ts">
  import Home from "./pages/home.vue"
</script>
<template>
  <el-config-provider namespace="ep">
    <el-scrollbar height="100vh">
    <BaseHeader />
    <div style="display: flex">
      <!-- <BaseSide /> -->
        <Home/>
    </div>
  </el-scrollbar>
  </el-config-provider>
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}
</style>
