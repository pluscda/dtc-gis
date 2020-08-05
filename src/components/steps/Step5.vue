<template>
  <div class="dtc-steps">
    <div>
      步驟5:如果步驟3中十二個問題，您都答「否」，則這份問卷的填答可在此
      <b-button size="sm" variant="primary" @click="$root.$emit('goStep', 999)">送出表單</b-button>
      <ol class="mt-3">
        <li>
          <main class="dtc-card">
            <header>您認為自己身心不健康嗎？（包括過去與現在）</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>
        <li>
          <main class="dtc-card">
            <header>您認為自己一生中大部份的時間，身體總是覺得有什麼病痛嗎？</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>
        <li>
          <main class="dtc-card">
            <header>您曾有過任何身體疾病嗎？</header>

            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
            <div>假若有什麼身體的疾病?那麼有沒有看醫生?醫生給您的診斷是什麼?治療結果如何？</div>
            <div></div>
            <input style="max-width:250px;min-width:250px;" placeholder="若有任何疾病則記述於下" />
          </main>
        </li>
        <li>
          <main class="dtc-card">
            <header>您的身體是否經常不舒服，需要經常看醫生或服藥，而醫生卻檢查不出有什麼特別的身體疾病嗎？</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>
        <li>
          <main class="dtc-card">
            <header>您最近覺得睡眠不好嗎？</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>
        <li>
          <main class="dtc-card">
            <header>您最近是不是覺得許多事情對您是個負擔？</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>
        <li>
          <main class="dtc-card">
            <header>您最近是不是覺得和家人、親友相處不來？</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>
        <li>
          <main class="dtc-card">
            <header>您最近是不是覺得對自己失去信心？</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>

        <li>
          <main class="dtc-card">
            <header>您最近是不是覺得神經兮兮，緊張不安？</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>
        <li>
          <main class="dtc-card">
            <header>您最近是不是感到未來毫無希望？</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>
        <li>
          <main class="dtc-card">
            <header>您最近是不是覺得家人或親友會令您擔憂？</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>
        <li>
          <main class="dtc-card">
            <header>您最近是不是覺得生活毫無希望？</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>
      </ol>
    </div>
    <b-button
      style="margin-left:3rem;"
      class="mb-4"
      size="sm"
      variant="primary"
      @click="$root.$emit('goStep', 5)"
    >送出表單</b-button>
  </div>
</template>
<script>
import queryString from "query-string";
import { store, mutations } from "@/store/global.js";
const degrees = ["不識字", "小學", "國中", "中高職", "大專大學", "研究所"];
export default {
  name: "step5",
  data() {
    return {
      degrees
    };
  },
  components: {},

  methods: {
    async login() {
      store.isLogin = true;
      this.$router.push("home");
    }
  }
};
</script>

<style lang="scss" scoped>
.dtc-steps {
  position: relative;
  width: 80vw;
}

ol > li {
  margin-top: 1rem;
}
.dtc-card {
  padding-bottom: 12px;
  margin-right: 2px;
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 5px;
  border: 1px solid black;
  .my-title {
    background: var(--warning);
    color: black;
    padding-left: 1rem;
    padding-bottom: 1px;
  }
  .dtc-body {
    display: grid;
    grid-template-columns: 20px 1fr;
    > div:first-child {
      border: 1px solid black;
    }
    > div:last-child {
      margin-right: 12px;
      > div {
        outline-offset: 3px;
        outline: 1px solid black;
      }
      padding: 2px;
      padding-left: 5px;
      display: grid;
      grid-template-columns: 1fr;
      > div:first-child {
        margin-top: 5px;
      }
      > div:not(:first-child) {
        margin-top: 30px;
      }
    }
  }
}

/deep/ .input-group-prepend {
  margin-right: 3px;
}
/deep/ .custom-switch {
  margin-top: 10px;
  margin-right: 1rem;
}
.dtc-card {
  padding: 4px;
}
</style>
