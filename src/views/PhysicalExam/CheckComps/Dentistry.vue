<template>
  <div>
    <div class="tooth-mark align-items-center">
      <div class="left">左</div>
      <div class="bot" v-for="li in 8" v-text="9 - li" :key="'li' + li"></div>
      <div class="bot" v-for="li in 8" v-text="li" :key="'li2' + li"></div>
      <div class="space"></div>
      <div class="right">右</div>
      <div class="bot" v-for="ri in 8" v-text="9 - ri" :key="'ri' + ri"></div>
      <div class="bot" v-for="ri in 8" v-text="ri" :key="'ri2' + ri"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$border-color: #ccc;
* {
  // border: 1px solid;
}
.tooth-mark {
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 3px;
  // grid-row-gap: 0;
  .bot {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    border-radius: 3px;
  }
  .right {
    grid-column: 19 / 20;
    grid-row: 1 / 3;
  }
  .left {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }
  .space {
    grid-column: 10 / 11;
    grid-row: 1 / 3;
  }
}
</style>
