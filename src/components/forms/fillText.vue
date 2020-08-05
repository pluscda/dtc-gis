<template>
  <div class="flex-md-1 p-1 d-flex">
    {{ label }}：
    <div class="flex-1"><input class="w-100" type="text" :readonly="readonly" :value="value" /></div>
    <div v-if="append" v-text="append" class="pl-1" />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    append: {
      type: String,
      default: "",
    },
  },
};
</script>
