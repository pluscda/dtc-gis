<template>
  <b-modal
    @shown="updateItem"
    title="編輯片語"
    id="dtcEditPhrase"
    :header-bg-variant="variants[0]"
    :header-text-variant="variants[1]"
    :footer-bg-variant="variants[2]"
    :footer-text-variant="variants[2]"
    size="lg"
  >
    <b-container fluid>
      <main class="main-grid-dtc">
        <b-input-group prepend="片語代號" class="mb-2 w-100">
          <b-input v-model="item.Code" maxlength="300" placeholder="請輸入"></b-input>
        </b-input-group>
        <b-input-group prepend="檢查項目" class="mb-2">
          <b-select :options="inspectsArr.slice(1,100)" v-model="item.ProcedureSerial"></b-select>
        </b-input-group>
        <b-input-group prepend="片語內文" class="mb-2">
          <b-textarea
            v-model="item.Text"
            placeholder="請輸入"
            spellcheck="false"
            style="height:400px;"
          ></b-textarea>
        </b-input-group>
      </main>
    </b-container>
    <template v-slot:modal-footer>
      <div class="w-100">
        <b-button variant="info" class="float-right ml-4" @click="$bvModal.hide('dtcEditPhrase')">取消</b-button>
        <b-button
          variant="success"
          class="float-right"
          @click="addPhrase"
          :disabled="!item.Code  || !item.Text "
        >確定</b-button>
      </div>
    </template>
  </b-modal>
</template>

<script>
import { store, actions } from "@/store/global.js";
let types = new Array(15).fill().map((s, i) => "Dummy " + (1 + i));
const allowPhraseTypes = sessionStorage.allowPhraseTypes.split(",");
let inspectsArr = [
  "",
  "身高",
  "體重",
  "體格指標值(BMI)",
  "血壓",
  "脈搏",
  "牙科檢查",
  "頭部顏面頸頭皮",
  "皮膚及淋巴腺",
  "鼻",
  "竇",
  "口腔",
  "咽喉",
  "肺部及胸部",
  "胸部X光",
  "腹部",
  "心臟",
  "內分泌腺",
  "血管(曲張)",
  "肛門及直腸",
  "生殖器",
  "上肢及關節",
  "下肢及關節",
  "耳器",
  "鼓膜",
  "聽力",
  "眼",
  "眼底",
  "辨色力",
  "視力",
  "神經系統",
  "精神",
  "智能",
  "心電圖",
  "梅毒",
  "愛滋",
  "血液常規檢查",
  "肝功能",
  "尿液檢查"
];
inspectsArr = inspectsArr.map((s, i) => ({
  value: i,
  text: s
}));
export default {
  name: "EditPhroase",
  data() {
    return {
      inspectsArr,
      inputText: "",
      type: "身高",
      item: { ...store.editItem },
      ProcedureSerial: "",
      Text: "",
      Code: "",
      allowPhraseTypes,
      allow: "個人片語",
      variants: [
        "warning",
        "dark",
        "light",
        "warning",
        "danger",
        "info",
        "light",
        "dark"
      ]
    };
  },
  computed: {},
  methods: {
    updateItem() {
      this.item = { ...store.editItem };
    },
    async addPhrase() {
      const obj = {
        Code: this.allow != "個人片語" ? "g-" + this.Code : this.Code,
        ProcedureSerial: this.inspectsArr.findIndex(s => s == this.type),
        Text: this.Text
      };
      try {
        await actions.editPhrase(this.item);
        this.$bvToast.toast(`編輯片語成功`, {
          title: "系統資訊",
          autoHideDelay: 5000,
          variant: "success"
        });
        let arr = await this.$vlf.getItem("phrase");
        const ret = arr.find(s => s.Code == obj.Code);
        ret.Text = obj.Text;
        this.$vlf.setItem("phrase", arr);
        store.editItem = { ...store.editItem };
        this.$bvModal.hide("dtcEditPhrase");
      } catch (e) {
        this.$bvToast.toast(`` + e, {
          title: "系統資訊",
          autoHideDelay: 5000,
          variant: "danger"
        });
      }
    }
  },
  mounted() {
    //if (store.editItem) this.item = store.editItem;
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
.input-group-text {
  width: 150px;
  max-width: 150px;
  min-width: 150px;
}
.code-dtc {
  display: grid;
  grid-template-columns: 60px minmax(400px, 525px);
}
</style>