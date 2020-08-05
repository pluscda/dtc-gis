<template>
  <div class="choose">
    <div class="text-center">正常</div>
    <div class="text-center">異常</div>
    <div class="text-center">綠燈:正常 紅燈:異常</div>
    <div class="bg-primary text-white text-center">醫師簽章</div>

    <template v-for="item in items">
      <template v-if="item['options']">
        <div
          style="grid-column: span 3;"
          :key="item.key"
        >
          <div v-text="item.key + '.' + item.text" />
          <div class="d-flex flex-wrap justify-content-center">
            <div
              v-for="(opt, optIdx) in item.options"
              :key="'opt' + optIdx"
              class="w-50 text-center d-flex"
            >
              <span
                v-if="opt.pre"
                v-text="opt.pre"
              />
              <!-- <input type="text" style="flex: 1 0 0;" /> -->
              <div class="flex-1">
                <input
                  type="text"
                  class="w-100"
                />
              </div>
              <span
                v-if="opt.after"
                v-text="opt.after"
              />
            </div>
          </div>
        </div>
        <div :key="item.key + '4'"></div>
      </template>
      <template v-else>
        <div
          :key="item.key + '1'"
          class="d-flex justify-content-center align-items-center"
        ><input
            type="radio"
            :name="item.key"
            value="normal"
          /></div>
        <div
          :key="item.key + '2'"
          class="d-flex justify-content-center align-items-center"
        ><input
            type="radio"
            :name="item.key"
            value="abnormal"
          /></div>
        <div
          :key="item.key + '3'"
          v-text="item.key + '.' + item.text"
        />
        <div :key="item.key + '4'"></div>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
$border-color: #ccc;
.choose {
  display: grid;
  grid-template-columns: auto auto 2fr 1fr;
  border-top: 1px solid $border-color;
  border-left: 1px solid $border-color;
  > div {
    border-right: 1px solid $border-color;
    border-bottom: 1px solid $border-color;
  }
}
</style>
