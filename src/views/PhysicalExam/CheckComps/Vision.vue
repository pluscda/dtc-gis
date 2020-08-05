<template>
  <div class="vision">
    <div v-for="(item, i) in 3" :class="['block', `box${i + 1}`]" :key="`${item}`">
      <p>左</p>
      <p>右</p>
    </div>
    <label for="sb-inline">裸視</label>
    <b-form-spinbutton id="sb-inline" v-model="nakedL" step="0.1" min="0" inline></b-form-spinbutton>
    <b-form-spinbutton id="sb-inline" v-model="nakedR" step="0.1" min="0" inline></b-form-spinbutton>
    <label for="sb-inline">矯正視力</label>
    <b-form-spinbutton id="sb-inline" v-model="correctionL" step="0.1" min="0" inline></b-form-spinbutton>
    <b-form-spinbutton id="sb-inline" v-model="correctionR" step="0.1" min="0" inline></b-form-spinbutton>
    <label for="sb-inline">驗光度數</label>
    <b-form-spinbutton id="sb-inline" v-model="optometryL" step="0.1" min="0" inline></b-form-spinbutton>
    <b-form-spinbutton id="sb-inline" v-model="optometryR" step="0.1" min="0" inline></b-form-spinbutton>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nakedL: 1,
      nakedR: 1,
      correctionL: 1,
      correctionR: 1,
      optometryL: 1,
      optometryR: 1,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
* {
  // border: 1px solid;
}
.vision {
  display: grid;
  grid-template-columns: minmax(auto, 150px) repeat(2, 150px) minmax(auto, 150px) repeat(2, 150px) minmax(auto, 150px) repeat(2, 150px);
  grid-template-rows: repeat(2, auto);
  label {
    height: 100%;
    line-height: 36px;
    margin: 0px;
    text-align: right;
    padding-right: 20px;
  }
}
.block {
  display: flex;
  p {
    width: 50%;
  }
}
.box1 {
  grid-column: 2 / 4;
}
.box2 {
  grid-column: 5 / 7;
}
.box3 {
  grid-column: 8 / 10;
}
</style>
