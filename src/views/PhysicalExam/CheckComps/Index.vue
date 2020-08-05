<template>
  <div class="check-part">
    <p>檢測區</p>
    <div class="card m-0">
      <component :is="comps"></component>
    </div>
    <!-- <h4>檢測區</h4> -->
  </div>
</template>
<script>
//
import Dentistry from "@/views/PhysicalExam/CheckComps/Dentistry.vue";
import Hearing from "@/views/PhysicalExam/CheckComps/Hearing.vue";
import Vision from "@/views/PhysicalExam/CheckComps/Vision.vue";
export default {
  components: { Dentistry, Hearing, Vision },
  data() {
    return {
      comps: "Hearing",
    };
  },
};
</script>
<style lang="scss" scoped>
.check-part {
  p {
    background-color: var(--color-blue-L0);
    color: white;
    padding: 5px;
    text-align: left;
    border-radius: 5px 5px 0px 0px;
  }
  .card {
    border: 1px solid #ddd;
    border-radius: 0px 0px 5px 5px;
    padding: 5px;
  }
  padding: 5px;
  h4 {
    text-align: left;
    padding-left: 30px;
    margin-bottom: 5px;
  }
}
.card-header.bg-primary.text-white {
  padding: 5px;
}
</style>
