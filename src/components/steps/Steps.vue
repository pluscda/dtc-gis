<template>
  <div class="steps-form">
    <vue-step
      @selected="goStep"
      class="dtc-steps"
      :now-step="nowStep"
      direction="vertical"
      :step-list="stepList"
    ></vue-step>
    <keep-alive>
      <Step1 v-if="nowStep == 1"></Step1>
      <Step2 v-if="nowStep == 2"></Step2>
      <Step3 v-if="nowStep == 3"></Step3>
      <Step4 v-if="nowStep == 4"></Step4>
      <Step5 v-if="nowStep == 5"></Step5>
    </keep-alive>
  </div>
</template>
<script>
import vueStep from "vue-step";
import Step1 from "@/components/steps/Step1.vue";
import Step2 from "@/components/steps/Step2.vue";
import Step3 from "@/components/steps/Step3.vue";
import Step4 from "@/components/steps/Step4.vue";
import Step5 from "@/components/steps/Step5.vue";
export default {
  data() {
    return {
      nowStep: 1,
      stepList: [
        "健康狀況",
        "基本資料(一)",
        "基本資料(二)",
        "身心狀況檢查(一)",
        "身心狀況檢查(二)"
      ]
    };
  },
  components: {
    vueStep,
    Step1,
    Step2,
    Step3,
    Step4,
    Step5
  },
  methods: {
    goStep(n) {
      this.nowStep = n;
      //if (n < 6) this.nowStep = n;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  },
  created() {
    this.$root.$on("goStep", n => this.goStep(n));
    document.body.classList.add("steps");
  }
};
</script>

<style lang="scss">
.steps-form {
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 39px;
  margin-bottom: 30px;
}
.dtc-steps {
  margin-top: 1rem;
  margin-bottom: 2rem;
  height: calc(100vh - 77px);
}

@media all and (min-width: 768px) {
}

@media all and (max-width: 768px) {
  .steps-form {
    width: 100%;
  }
}
</style>

<style>
input {
  max-width: 700px;
}
</style>

<style lang="scss">
.steps .dtx-app {
  background: white;
  color: black;
}
.steps #app {
  background: white;
}
</style>
