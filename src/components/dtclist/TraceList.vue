<template>
  <section class="dtc-main-section">
    <header class="ask-header">本次役男清冊</header>
    <div class="dtc-search">
      <b-input-group prepend="身份證字號">
        <b-input v-model.trim="id" :autofocus="autofocus" placeholder="搜尋身份證字號"></b-input>
      </b-input-group>
      <div></div>
      <b-button class="mr-1" variant="light" @click="searchDb" size="sm">
        <i class="fas fa-search"></i>進行查詢
      </b-button>
      <b-button variant="info" @click="clearSearch" size="sm">
        <i class="fas fa-eraser"></i>清除條件
      </b-button>
      <div></div>
    </div>

    <header class="dtc-grid-header my-dark">
      <div>查閱</div>
      <div v-for="(item,i) in headers" :key="i" @click="sort(item);">
        {{item.name}}
        <span v-show="item.sortDesc === null">
          <i class="fas fa-sort"></i>
        </span>
        <span v-show="item.sortDesc === false">
          <i class="fas fa-sort-up"></i>
        </span>
        <span v-show="item.sortDesc">
          <i class="fas fa-sort-down"></i>
        </span>
      </div>
    </header>
    <main v-if="!items.length" class="dtc-grid-header main-dtc-body">
      <div style="grid-column: 1 / -1;padding: 20px 0px;font-size:24px;">暫無資料</div>
    </main>
    <main
      class="dtc-grid-header main-dtc-body"
      v-for="(item,i) in items"
      :key="i"
      style="color:black;"
      :style="i % 2 == 0 ? 'background-color: #F5F5F5;':'background-color: #E0E0E0;'"
    >
      <div>
        <b-button variant="success" size="sm" @click="edit(item)">查閱</b-button>
      </div>
      <div>{{ item.Name}}</div>
      <div>{{ item.IdNo}}</div>
      <div>{{ item.Birthday ? item.Birthday.split("T")[0] :''}}</div>
      <div>{{ item.ContactPhone}}</div>
      <div>{{ item.MobilePhone}}</div>
      <div>{{ item.Address}}</div>
      <div>{{ curStatus[item.ExamStatus].text }}</div>
      <div>{{ judges[0]}}</div>
    </main>
    <footer class="dtx-footer">
      <b-pagination
        v-model="currentPageNum"
        :total-rows="rowCount"
        :per-page="pagingRowPerPage"
        aria-controls="dataTable1"
        align="center"
        class="mt-2"
      >
        <span slot="first-text">
          <i class="fas fa-fast-backward"></i>
        </span>
        <span slot="prev-text">
          <i class="fas fa-step-backward"></i>
        </span>
        <span slot="next-text">
          <i class="fas fa-step-forward"></i>
        </span>
        <span slot="last-text">
          <i class="fas fa-fast-forward"></i>
        </span>
        <span slot="page" slot-scope="{ page, active }">
          <b v-if="active">{{ page }}</b>
          <i v-else>{{ page }}</i>
        </span>
      </b-pagination>
      <b-select :options="rows" class="mt-2" v-model="pagingRowPerPage"></b-select>
      <div class="mt-3" style="color:black;">{{totalCountStr}}</div>
    </footer>
  </section>
</template>

<script>
import queryString from "query-string";
import buildQuery from "odata-query";
import { store, actions } from "@/store/global.js";
//alert(store.judges[0]);
const status = [
  { value: "0", text: "未確認" },
  { value: "1", text: "確認" },
  { value: "2", text: "通知修正" }
];

const status2 = [
  { value: null, text: "全部" },
  { value: "0", text: "未確認" },
  { value: "1", text: "確認" },
  { value: "2", text: "通知修正" }
];
const sizes = ["全部", "常備役", "替代役", "免役"];

// this.countries.unshift({ value: null, text: "全部" });
const headers = [
  { name: "役男姓名", key: "Name", sortDesc: null },
  { name: "身分證號", key: "IdNo", sortDesc: null },
  { name: "出生日期", key: "Birthday", sortDesc: null },
  { name: "聯絡電話", key: "ContactPhone", sortDesc: null },
  { name: "行動電話", key: "MobilePhone", sortDesc: null },
  { name: "戶籍地址", key: "Address", sortDesc: null },
  { name: "目前狀態", key: "ExamStatus", sortDesc: null },
  { name: "判定體位", key: "JudgementAdvice", sortDesc: null }
];

/*
const headers = [
  { name: "片語代號", key: "Code", sortDesc: null },
  { name: "檢查項目", key: "ProcedureSerial", sortDesc: null },
  { name: "片語內文", key: "Text", sortDesc: null }
];

*/

const startTime = `${years[1] + 1911}-01-01`;
const endTime = `${years[1] + 1911}-12-31`;
//alert(startTime);
const dummyRow = {
  key1: "姓名",
  key2: "身分證號",
  key3: "出生日期",
  key4: "聯絡電話",
  key5: "行動電話",
  key6: "戶籍地址",
  key7: "體檢日期",
  key8: "體檢醫院",
  key9: "判定體位"
};
let items = new Array(1).fill(dummyRow);
const keys = Object.keys(items[0]);
items = [];
//alert(headers.length);
const zero = "T00:00:00";
const rows = [10, 20, 50];
export default {
  name: "totalSpend8",
  data() {
    return {
      curStatus: [],
      autofocus: true,
      judges: store.judges,
      mode: "2",
      showEdit: false,
      number: "",
      name: "",
      id: "",
      headers,
      items,
      keys,
      currentPageNum: 1,
      rowCount: 0,
      pagingRowPerPage: 20,
      year: window.year - 1,
      years: window.years,
      areas: [],
      area: null,
      wheres: [{ value: null, text: "全部" }],
      where: null,
      search: false,
      rows,
      totalCountStr: "",
      editItem: "",
      status,
      status2,
      mode2: null,
      note: "",
      countries: [],
      country: null,
      sizes,
      size: "全部",
      startDate: "",
      endDate: "",
      startTime,
      endTime,
      orderBy: []
    };
  },

  methods: {
    sort(item) {
      if (item.sortDesc) {
        item.sortDesc = null;
      } else if (false === item.sortDesc) {
        item.sortDesc = true;
      } else if (null === item.sortDesc) {
        item.sortDesc = false;
      }
      this.orderBy = [];
      this.headers.forEach(s => {
        if (s.sortDesc !== null) {
          this.orderBy.push(s.sortDesc ? `${s.key} desc` : `${s.key}`);
        }
      });
      this.getData();
    },
    async getCountryList() {
      if (!this.countries.length) {
        const { Items: list } = await window.axios.get(
          "countryidentity/CountryIdentityList"
        );
        this.countries = list.map(s => ({
          value: s.SeqNo,
          text: s.CountryIdentityName
        }));
        this.countries.unshift({ value: null, text: "全部" });
      }
    },
    async edit(item) {
      // get personal info
      try {
        store.editItem = { ...(await actions.getInfoById(item.IdNo)) };
      } catch (e) {
        alert(e);
      }
      if (sessionStorage.role == "ServiceManager") {
        this.$router.push("serviceDetails");
      } else {
        this.$router.push("details");
      }
    },
    async viewPdf(item) {
      window.open(item.Src);
    },
    searchDb() {
      this.search = true;
      this.getData();
    },
    async clearSearch() {
      this.id = "";
      this.getData();
    },
    async getData() {
      //odata3 qs
      const page = this.currentPageNum;
      const skip = (page - 1) * this.pagingRowPerPage;
      const top = this.pagingRowPerPage;
      const orderBy = this.orderBy;
      const obj = orderBy.length ? { top, skip, orderBy } : { top, skip };
      let qs = buildQuery(obj); // + no + filter + filter2;
      if (this.search && this.id) {
        qs = this.$dataFilter("IdNo", qs, this.id);
      }

      const { Items, Count } = await actions.getTodayList(qs);
      // const { Items, Count } = await window.axios.get(
      //   "api/Military" + qs + str
      // );
      Items.length ? (this.keys = Object.keys(Items[0])) : "";
      //alert(this.keys.length);
      this.items = Items;
      this.rowCount = Count;
      this.totalCountStr = `共${Count} 筆`;
    }
  },
  async mounted() {
    this.curStatus = (await axios.get("reference/ExamStatus")).map(s => ({
      value: s.Id,
      text: s.Name
    }));
    this.getData();
    document.body.classList.remove("steps");
    this.areas = [...window.taipeis];
    this.areas.unshift({ value: null, text: "全部" });
    this.$vlf.clear();
  },

  watch: {
    currentPageNum(v) {
      this.currentPageNum = v;
      this.getData().catch(e => {});
    },
    pagingRowPerPage(v) {
      this.getData().catch(e => {});
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.dtc-main-section {
  overflow-x: auto;
  background: #fbfbfb;
  position: relative;
  min-height: calc(100vh - 76px);
}
.dtc-grid-header {
  display: grid;
  grid-template-columns: 60px repeat(5, 120px) 1fr 180px 120px;
  grid-auto-flow: column;
  text-align: center;
  padding-right: 0px;
  border: 1px solid white;

  > div {
    border-right: 1px solid white;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    font-size: 14px;
    padding: 4px 0;
  }
  > div:last-child {
    border-right: none;
  }
}
.my-dark {
  > div {
    background: var(--gray);
    color: white;
  }
}
.dtc-link {
  color: var(--primary);
  cursor: pointer;
}
.dtc-search {
  position: relative;
  display: grid;
  max-height: 40px;
  margin-bottom: 12px;
  grid-template-columns: max-content 1fr max-content max-content 10px;
  grid-gap: 1rem;
  padding-left: 10px;
}
.search-btns {
  position: absolute;
  display: flex;
  flex-direction: column;
  > button:not(:first-child) {
    margin-top: 1rem;
  }
  right: 2px;
  top: 0px;
}
.dtx-footer {
  display: grid;
  grid-template-columns: max-content max-content max-content;
  justify-content: center;
  grid-gap: 12px;
}
.container-dtx {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(#000, 0.8);
  display: grid;
  place-items: center;
  z-index: 999;
}
.dtx-form {
  width: 800px;
  height: 300px;
  padding: 12px;
  border-radius: 5px;
  background: var(--light);
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-gap: 12px;
  > div {
    max-height: 40px;
  }
  button {
    justify-self: center;
    max-height: 40px;
  }
}
.main-dtc-body {
  &:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }
  > div {
    line-height: 24px;
  }
}
.input-group-text {
  color: white;
  background: #757575;
}
.ask-header {
  background: #646b74;
  height: 42px;
  color: white;
  font-size: 20px;
  padding-left: 10px;
  line-height: 42px;
  margin-bottom: 12px;
}

/deep/ .btn-light {
  background: #1f7cd3;
  border-color: #1f7cd3;
  color: white;
}
/deep/ .btn-info {
  background: #0f579b;
  border-color: #0f579b;
}
/deep/ .btn-success {
  background: #0f579b;
  border-color: #0f579b;
}
/deep/ .page-item.active .page-link {
  background: #808080;
  border-color: #808080;
}
</style>
