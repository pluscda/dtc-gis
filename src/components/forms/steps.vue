<template>
  <div class="d-flex justify-content-between position-relative steps">
    <div
      v-for="(step,index) in steps"
      :key="index"
      class="step d-flex flex-column justify-content-center align-items-center"
      :class="{'active': step.value}"
    >
      <div class="text-center step-mark"> {{ index + 1}}</div>
      <div
        class="content"
        v-text="step.text"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      percent: 0,
    }
  },
  mounted () {
    this.percent = this.steps.reduce((acc, { value }) => acc += value ? 1 : 0, 0) / (this.steps.length - 1);
    if (this.percent > 0) {

    } else {

    }

    this.$el.setAttribute("style", `--gradientPercent: ${(this.percent > 0 ? Math.floor(this.percent * 100) : 0) + '%'}`);
  },
  props: {
    steps: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
$circleLength: 100px;
.steps {
  &::before {
    content: "";
    position: absolute;
    width: calc(100% - #{$circleLength});
    height: 5px;
    background: #aaa;
    background: linear-gradient(
      90deg,
      rgba(9, 9, 121, 1) 0%,
      rgba(9, 9, 121, 1) var(--gradientPercent),
      #aaa var(--gradientPercent),
      #aaa 100%
    );
    border-radius: 10px;
    left: $circleLength * 0.5;
    top: 50%;
    transform: translate(0, -25%);
    z-index: -1;
  }
  .step {
    border: 10px #000 solid;
    border-radius: 100%;
    background-color: #fff;
    width: $circleLength;
    height: $circleLength;
    position: relative;
    &.active {
      border-color: #004a99;
      color: #004a99;
    }
    .content {
      font-size: 8px;
      text-align: center;
    }
    .step-mark {
      font-size: 28px;
    }
  }
}
</style>
