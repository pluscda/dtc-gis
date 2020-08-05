<template>
  <div>
    <div class="d-md-flex tRow" v-for="(row, rowIdx) in rows" :key="rowIdx">
      <fillText v-for="item in row" :key="item.name" :label="item.text" :value="servant[item.name]" :readonly="item.readonly" :append="item.append || ''" />
    </div>
  </div>
</template>

<script>
import fillText from "./fillText.vue";
export default {
  props: {
    rows: {
      type: Array,
      required: true,
    },
    servant: {
      type: Object,
      required: true,
    },
  },
  components: {
    fillText,
  },
};
</script>
