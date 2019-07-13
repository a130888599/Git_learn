<template>
  <div>
    <h1>Home</h1>
    <mt-swipe :auto="4000" class="swipe">
      <mt-swipe-item class="item">1</mt-swipe-item>
      <mt-swipe-item class="item">2</mt-swipe-item>
      <mt-swipe-item class="item">3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
</script>
<style>
    .swipe{
        height: 200px;
        font-size: large;
    }
    .swipe .item:nth-child(1) {
        background-color: red;
    }
    .swipe .item:nth-child(2) {
        background-color: blue;
    }
    .swipe .item:nth-child(3) {
        background-color: yellowgreen;
    }
</style>
