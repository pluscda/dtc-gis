<template>
  <div class="dtc-steps">
    <div>
      步驟4: 以下問題請您依是否合乎您的情形在否,是處打勾。如果問題所問的情形是您現在服用某種藥物時才有的經驗，請勾否。每一個問題您都可以很快地作答不需思考太久。
      <input
        style="width:70vw"
        placeholder="您曾做過最久之主要工作是什麼行業"
      />

      <ol class="mt-3">
        <li>
          <main class="dtc-card">
            <header>您最近是不是覺得頭痛或是頭部有壓迫感？</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>
        <li>
          <main class="dtc-card">
            <header>您最近是不是覺得心悸或是心跳加快，擔心可能得心臟病？</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>
        <li>
          <main class="dtc-card">
            <header>您最近是不是感到胸部不適或是壓迫感？</header>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">否</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">是</b-form-checkbox>
          </main>
        </li>
        <li>
          <main class="dtc-card">
            <header>您最近是不是覺得手腳發抖或發麻？</header>
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
      <div style="margin-bottom:40px;">
        如果以上十二個問題中，您都答「否」，則這份問卷的填答可在此
        <b-button size="sm" variant="primary" @click="$root.$emit('goStep', 999)">送出表單</b-button>。若您有3個以上的問題答「是」，或者您願意，請
        <b-button size="sm" variant="warning" @click="$root.$emit('goStep', 4)">繼續填答</b-button>以下的問題，謝謝您的合作。
      </div>
      <div style="height:40px;"></div>
    </div>
  </div>
</template>
<script>
import queryString from "query-string";
import { store, mutations } from "@/store/global.js";
const degrees = ["不識字", "小學", "國中", "中高職", "大專大學", "研究所"];
export default {
  name: "step4",
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
@media only screen and (max-width: 600px) {
  // .input-group-text,
  // .input-group-prepend {
  //   font-size: 12px;
  //   max-width: 200px !important;
  //   width: 200px !important;
  //   min-width: 200px !important;
  // }
}
</style>
