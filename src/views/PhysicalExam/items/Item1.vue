<template>
  <div>
    <header class="header-row">
      <b-input-group append="公分" prepend="身高">
        <b-input placeholder="請輸入" v-model="item.Value"></b-input>
      </b-input-group>
      <!-- <b-check switch size="lg" v-model="pass" value="1" class="mt-1">正常</b-check>
      <b-check switch size="lg" v-model="pass" value="2" class="mt-1">異常</b-check>-->
      <b-button variant="primary" size="sm" @click="save">儲存 (F2)</b-button>
    </header>
    <section class="my-item">
      <main class="input-area"></main>
      <div class="main-area">
        <header class="my-note">註記</header>
        <b-textarea placeholder="請輸入" spellcheck="false" v-model="item.Note"></b-textarea>
      </div>
    </section>
  </div>
</template>
<script>
import { store, actions } from "@/store/global.js";
//updateExamInfo
export default {
  data() {
    return {
      pass: 1,
      item: {}
    };
  },
  methods: {
    async save() {
      const obj = {
        MilitaryId: store.editItem.Id,
        Serial: 1,
        SubSerial: "",
        Value: this.item.Value,
        Note: this.item.Note,
        Signature: "",
        Judge: +this.pass
      };
      try {
        await actions.updateExamInfo(obj);
        this.$bvToast.toast(`儲存成功`, {
          title: "檢查狀態",
          autoHideDelay: 5000,
          variant: "success"
        });
        store.editItem = { ...store.editItem };
      } catch (e) {
        alert(e);
      }
    },
    toggleDetails(x) {
      console.log("change event", x.item);
    }
  },
  mounted() {
    const item = store.savedExam.find(s => s.Serial == 1);
    if (item) {
      this.item = item;
      this.pass = this.item.Judge;
    }
    this.$mousetrap.bind("f2", this.save);
  }
};
</script>
<style lang="scss" scoped>
.my-item {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 425px);
  position: relative;
}
.input-area {
  border: 1px solid white;
  height: 40px;
}
.main-area {
  min-height: 100%;
  textarea {
    min-height: 100%;
  }
}
.my-note {
  height: 30px;
  font-size: 20px;
  background: var(--info);
  color: white;
  border-radius: 5px;
  padding-left: 10px;
}

.header-row {
  font-size: 20px;
  background: #cbcbcb;
  color: black;
  border-radius: 5px;
  padding-left: 1px;
  display: grid;
  grid-template-columns: repeat(34, max-content);
  grid-gap: 1rem;
  max-height: 40px;
  input {
    display: inline-block;
    height: 40px;
  }
  > div {
    line-height: 40px;
  }
  button {
    max-height: 35px;
    margin-top: 3px;
    line-height: 12px;
  }
}
</style>
