<template>
  <section class="basic-info"></section>
</template>

<script>
//
import { store, mutations } from "@/store/global.js";
import queryString from "query-string";
import ChangePwd from "./ChangePwd.vue";
export default {
  name: "navPage",
  data() {
    return {
      tab: 1,
      name: sessionStorage.name,
      title: sessionStorage.title != "null" ? sessionStorage.title : "",
      placement: "bottom",
      imgs: [require("./dtxTitle.png"), require("./logo.png")]
    };
  },
  components: {
    ChangePwd
  },
  computed: {
    isLogin() {
      return store.isLogin;
    }
  },

  methods: {
    async changePwd() {
      this.$bvModal.show("dtcPwdChange");
    },
    logout() {
      mutations.logout();
      this.$router.push("login");
    },
    parseUrl() {
      const str = location.href.includes("?")
        ? location.href.split("?")[1]
        : "";
      const obj = queryString.parse(str);
      if (obj && obj.map) {
        this.tab = Number(obj.map) + 1;
        this.$router.push("applyMaps?map=" + Number(obj.map));
      } else this.tab = 1;
    }
  },
  mounted() {
    this.parseUrl();
    this.$root.$on("nav-tab-dtc", num => (this.tab = Number(num) + 1));
  },
  beforeCreate() {
    // this.$root.$on("login", () => (this.showLogout = true));
  },
  watch: {
    $route() {
      document.documentElement.scrollTop = 0;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.basic-info {
  height: 72px;
  background: var(--dark);
  color: white;
  width: 100vw;
}
</style>