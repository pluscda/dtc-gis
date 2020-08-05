<template>
  <div class="dtc-steps">
    <div>
      步驟1:為了解您健康狀況，請依實際健康狀況選填本表，並於相關科別檢查時，
      <strong>主動告知</strong>檢查醫師，以維護自身權益！
      <ol class="mt-3">
        <li>
          <b-form-checkbox switch>自認身體健康情形良好，無以下情形</b-form-checkbox>
        </li>
        <li>
          <strong>請主動告知役政人員並檢附相關資料</strong>，倘符合「身心障礙或重大傷病與體位區分標準免役體位判等對照表」者可逕判體位，免參加兵役體檢:
          <b-form-checkbox switch>領有效期內之身心障礙證明(手冊)</b-form-checkbox>
          <b-form-checkbox switch>重大傷病證明</b-form-checkbox>
          <b-form-checkbox switch>全國醫療服務卡</b-form-checkbox>
          <b-form-checkbox switch>目前或曾就讀「身心障礙特殊教育班」或「特殊教育學校」</b-form-checkbox>
        </li>
        <li>
          如果您曾患或目前患有以下疾病，請勾選並於體檢時主動告知相關科別之體檢醫師：
          <div class="dtc-card">
            <div class="my-title">
              曾患或目前患有以下病症；且
              <toggle-button
                class="mr-2"
                :value="false"
                :labels="{checked: '已附', unchecked: '未附'}"
              />
              <input /> (病症名) 診斷書或相關病歷
            </div>
            <div class="dtc-body">
              <div style="line-height:30px;background:var(--info); color:white;">內科</div>
              <div style="margin-left:2px">
                <b-input-group prepend="皮膚疾病" size="sm">
                  <b-form-checkbox switch size="sm" class="m1-2 mr-1">乾癬</b-form-checkbox>
                  <b-form-checkbox switch size="sm" class="m1-2 mr-1">濕疹(異位性皮膚炎)</b-form-checkbox>
                  <b-form-checkbox switch size="sm" class="m1-1 mr-1">其他</b-form-checkbox>
                  <b-input size="sm" style="min-width:120px;"></b-input>
                </b-input-group>

                <b-input-group prepend="肺結核" size="sm">
                  <b-form-checkbox switch size="sm" class="m1-2 mr-2">已完治</b-form-checkbox>
                  <b-form-checkbox switch size="sm" class="m1-2 mr-2">治療中</b-form-checkbox>
                </b-input-group>
                <b-input-group prepend="自發性氣胸" size="sm">
                  <b-form-checkbox switch size="sm" class="m1-2 mr-2">曾兩側皆發作，或三年內同側發作二次以上者</b-form-checkbox>
                  <b-form-checkbox switch size="sm" class="m1-2 mr-2">有接受肺組織切除手術</b-form-checkbox>
                  <b-form-checkbox switch size="sm" class="m1-2 mr-2">有輕度以上肺功能障礙</b-form-checkbox>
                </b-input-group>
                <b-input-group prepend="氣喘" size="sm">
                  <b-form-checkbox switch size="sm" class="m1-2 mr-2">最近1年內發作有就醫紀錄</b-form-checkbox>
                  <b-form-checkbox switch size="sm" class="m1-2 mr-2">有輕度以上肺功能障礙</b-form-checkbox>
                </b-input-group>
                <b-input-group prepend="Others" size="sm">
                  <b-form-checkbox switch size="sm" class="m1-2 mr-2">
                    心臟血管或心律不整:病症名稱
                    <input />手術名稱:
                    <input />
                  </b-form-checkbox>
                  <b-form-checkbox switch size="sm" class="m1-2 mr-2">肝功能異常或肝臟疾病</b-form-checkbox>
                  <b-form-checkbox switch size="sm" class="m1-2 mr-2">腎功能異常或腎臟疾病</b-form-checkbox>
                  <b-form-checkbox switch size="sm" class="m1-2 mr-2">有癲癇病史</b-form-checkbox>
                </b-input-group>
              </div>
            </div>
            <div class="dtc-body mt-2">
              <div style="line-height:30px;background:var(--danger); color:white;">骨外科</div>
              <div style="margin-left:2px">
                <b-form-checkbox switch size="sm" class="m1-2 mr-1">
                  骨折：骨折部位
                  <input /> 發生年月約為
                  <input />
                </b-form-checkbox>

                <b-form-checkbox switch size="sm" class="m1-2 mr-1">膝關節韌帶或十字韌帶斷裂</b-form-checkbox>
                <b-form-checkbox switch size="sm" class="m1-1 mr-1">
                  半月板軟骨損傷，發生年月約為
                  <input />
                </b-form-checkbox>

                <b-form-checkbox switch size="sm" class="m1-2 mr-1">扁平足</b-form-checkbox>
                <b-form-checkbox switch size="sm" class="m1-2 mr-1">顱腦損傷:曾經開顱手術移除顱骨內病灶者</b-form-checkbox>
              </div>
            </div>

            <div class="dtc-body mt-2">
              <div style="line-height:30px;background:var(--secondary); color:white;">眼科</div>
              <div style="margin-left:2px">
                <b-form-checkbox switch size="sm" class="m1-2 mr-1">
                  眼(視網膜)接受手術：手術名稱
                  <input />
                </b-form-checkbox>
                <b-form-checkbox switch size="sm" class="m1-2 mr-1">裝置人工水晶體</b-form-checkbox>
              </div>
            </div>
            <div class="dtc-body mt-2">
              <div style=";background:var(--warning); color:black;">精神科</div>
              <div style="margin-left:2px">
                <b-form-checkbox switch size="sm" class="m1-2 mr-1">有精神疾病病史</b-form-checkbox>
              </div>
            </div>
            <div class="dtc-body mt-2">
              <div style=";background:var(--orange); color:black;">其他</div>
              <div style="margin-left:2px">
                其他疾病或病史：
                <input />
              </div>
            </div>
          </div>
        </li>
      </ol>
      <b-button
        style="margin-left:3rem;"
        class="mb-4"
        size="sm"
        variant="primary"
        @click="$root.$emit('goStep', 2)"
      >到下一步</b-button>
    </div>
  </div>
</template>
<script>
import queryString from "query-string";
import { store, mutations } from "@/store/global.js";

export default {
  name: "Step1",
  data() {
    return {};
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
</style>
