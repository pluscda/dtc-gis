<template>
  <div class="base-form">
    <h4>壹、 基本資料</h4>
    <p>說明：請將所問的資料或其代碼填在每題的欄位上。</p>
    <div class="d-flex align-items-center">
      <div class="qtext mr-1">1. 施測日期</div>
      <b-input-group
        append="年"
        size="sm"
        class="mr-1"
      >
        <b-input />
      </b-input-group>

      <b-input-group
        append="月"
        size="sm"
        class="mr-1"
      >
        <b-input />
      </b-input-group>

      <b-input-group
        append="日"
        size="sm"
        class="mr-1"
      >
        <b-input />
      </b-input-group>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {

  }
}
</script>

<style lang="scss">
.base-form {
  .qtext {
    white-space: nowrap;
  }
  .input-group {
    width: 150px;
  }
}
</style>
