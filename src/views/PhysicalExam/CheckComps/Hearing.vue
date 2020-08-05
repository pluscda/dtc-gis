<template>
  <div class="hearing">
    <b-input-group id="voice" prepend="語音" class="mb-2  mx-2">
      <b-input-group-prepend is-text><b>右</b></b-input-group-prepend>
      <b-form-input aria-label="v-right"></b-form-input>
      <b-input-group-prepend is-text><b>左</b></b-input-group-prepend>
      <b-form-input aria-label="v-left"></b-form-input>
    </b-input-group>
    <b-input-group id="metal" prepend="金屬音" class="mb-2 mx-3">
      <b-input-group-prepend is-text><b>右</b></b-input-group-prepend>
      <b-form-input aria-label="m-right"></b-form-input>
      <b-input-group-prepend is-text><b>左</b></b-input-group-prepend>
      <b-form-input aria-label="m-left"></b-form-input>
    </b-input-group>
  </div>
</template>
<style lang="scss" scoped>
.hearing {
  display: flex;
}
.input-group-text {
  width: 70px;
}
</style>
