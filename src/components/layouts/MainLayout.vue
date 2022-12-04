<script setup lang="ts">
</script>
<template>
    <BaseHeader />
    <div style="display: flex">
      <!-- <BaseSide /> -->
        <RouterView/>
    </div>
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
