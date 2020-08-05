<template>
  <div class="dtc-steps">
    <div>
      步驟2:為了希望在您服役前了解您是否有身心狀況上的困擾，請於參加役男體檢時配合填答以下問題以提供檢查醫師參考。謝謝您的合作！
      <ol class="mt-3">
        <li>
          <b-input-group prepend="施測日期">
            <b-input type="date"></b-input>
          </b-input-group>
        </li>
        <li>
          <b-input-group prepend="姓名">
            <b-input></b-input>
          </b-input-group>
        </li>
        <li>
          <b-input-group prepend="出生年月日">
            <b-input type="date"></b-input>
          </b-input-group>
        </li>
        <li>
          <b-input-group prepend="聯絡電話">
            <b-input></b-input>
          </b-input-group>
        </li>
        <li>
          <b-input-group prepend="住址">
            <b-input></b-input>
          </b-input-group>
        </li>
        <li>
          <b-input-group prepend="身分證號碼">
            <b-input></b-input>
          </b-input-group>
        </li>

        <li>
          <b-input-group prepend="您的學歷">
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">{{degrees[0]}}</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">{{degrees[1]}}</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">{{degrees[2]}}</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">{{degrees[3]}}</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">{{degrees[4]}}</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">{{degrees[5]}}</b-form-checkbox>
          </b-input-group>
        </li>
        <li>
          <b-input-group prepend="國小國中的學業成績大約為">
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">30分以下</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">30-50分</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">50-60分</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">60分以上</b-form-checkbox>
          </b-input-group>
        </li>
        <li>
          <b-input-group prepend="機車或是汽車駕照">
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">有</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">
              沒有(
              <b-form-checkbox switch size="sm" class="m1-2 mr-1">筆試沒有通過</b-form-checkbox>
              <b-form-checkbox switch size="sm" class="m1-2 mr-1">路考沒有通過</b-form-checkbox>
              <b-form-checkbox switch size="sm" class="m1-2 mr-1">沒有報考)</b-form-checkbox>
            </b-form-checkbox>
          </b-input-group>
        </li>
        <li>
          <b-input-group prepend="工作過的經驗">
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">
              有:
              做最久的是什麼工作:
              <input />工作多久:
              <input />
            </b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">沒有</b-form-checkbox>
          </b-input-group>
        </li>
        <li>
          <b-input-group prepend="領有身心障礙或重大傷病證明">
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">
              有:障礙類別、項目或重大傷病證
              <input />
            </b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">沒有</b-form-checkbox>
          </b-input-group>
        </li>
        <li>
          <b-input-group prepend="有過傷害自己行為">
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">
              有:傷害情形
              <input />
            </b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">沒有</b-form-checkbox>
          </b-input-group>
        </li>
        <li>
          <b-input-group prepend="住過精神科(身心科)的醫院">
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">
              有:哪一家醫院
              <input />
            </b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">沒有</b-form-checkbox>
          </b-input-group>
        </li>
        <li>
          <b-input-group prepend="看過精神科(身心科)門診 ">
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">
              有:哪一家醫院
              <input />
            </b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">沒有</b-form-checkbox>
          </b-input-group>
        </li>
        <li>
          <b-input-group prepend="有過腦部受傷的情形">
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">
              有:受傷情形
              <input />
            </b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">沒有</b-form-checkbox>
          </b-input-group>
        </li>

        <li>
          <b-input-group prepend="目前的婚姻狀況">
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">未婚</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">同居，以前未結婚</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">已婚且住在一起</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">分居</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">同居，以前已結婚</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">同居，以前未結婚</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">再婚</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">離婚</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">鰥寡</b-form-checkbox>
          </b-input-group>
        </li>

        <li>
          <b-input-group prepend="目前跟誰住在一起">
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">父母</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">兄弟姊妹</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">子女</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">其他親戚</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">朋友（室友）</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">自己獨居</b-form-checkbox>
            <b-form-checkbox switch size="sm" class="m1-2 mr-1">收容機構</b-form-checkbox>
          </b-input-group>
        </li>
      </ol>
      <b-button
        style="margin-left:3rem;"
        class="mb-4"
        size="sm"
        variant="primary"
        @click="$root.$emit('goStep', 3)"
      >到下一步</b-button>
    </div>
  </div>
</template>
<script>
import queryString from "query-string";
import { store, mutations } from "@/store/global.js";
const degrees = ["不識字", "小學", "國中", "中高職", "大專大學", "研究所"];
export default {
  name: "step2",
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
li {
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  .input-group-prepend {
    margin-bottom: 3px;
  }
}
</style>
