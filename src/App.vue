<template>
  <section class="dtx-app">
    <div class="basic-info"></div>
    <DtcNavBar v-if="!$route.path.includes('login')"></DtcNavBar>
    <router-view />
    <b-sidebar id="sidebar-right" title="擷取大頭照" right shadow>
      <div class="px-3 py-2">
        <video id="video">無法找到拍照相機</video>
      </div>
      <b-button variant="warning" @click="takepicture" size="md" class="ml-4">擷取相片</b-button>
      <canvas id="canvas" hidden></canvas>
    </b-sidebar>
  </section>
</template>
<script>
import DtcNavBar from "@/components/land/DtcNavBar.vue";
import { store, actions } from "@/store/global.js";

export default {
  name: "dtx-app",
  data() {
    return {
      isSaveOk: false,
      video: "",
      canvas: "",
      width: 300,
      height: 300,
      id: ""
    };
  },
  components: { DtcNavBar },

  computed: {
    takePic() {
      return store.openCamera;
    }
  },

  methods: {
    async takepicture() {
      var context = this.canvas.getContext("2d");
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      context.drawImage(this.video, 0, 0, this.width, this.height);
      var data = canvas.toDataURL("image/png");
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      context.drawImage(this.video, 0, 0, this.width, this.height);
      const urlImg = canvas.toDataURL("image/png");
      const obj = { MilitaryIdNo: this.id, Photo: urlImg };
      try {
        await actions.uploadBase64Img(obj);
        store.base64Img = urlImg;
        this.$bvToast.toast(`照片已上傳`, {
          title: "系統資訊",
          autoHideDelay: 5000,
          variant: "success"
        });
      } catch (e) {
        alert(e);
      }
    },
    async init() {
      this.video = document.getElementById("video");
      this.canvas = document.getElementById("canvas");
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(stream => {
          video.srcObject = stream;
          video.play();
        })
        .catch(function(err) {
          console.log("An error occurred: " + err);
        });
      this.initVid();
    },
    initVid() {
      this.video.addEventListener("canplay", function(ev) {
        this.video.setAttribute("width", this.width);
        this.video.setAttribute("height", this.height);
        this.canvas.setAttribute("width", this.width);
        this.canvas.setAttribute("height", this.height);
      });
    }
  },

  async created() {},
  async mounted() {
    this.$root.$on("loginSuccess", async () => {
      const { Items: p1 } = await actions.getPrivatePhrases(
        "?$inlinecount=allpages"
      );
      const { Items: p2 } = await actions.getPublicPhrases(
        "?$inlinecount=allpages"
      );
      const sum = [...p1, ...p2];
      await this.$vlf.setItem("phrase", sum);
      //alert(sum.length);
    });
    this.$vlf.createInstance({
      storeName: "phraseStore"
    });
  },
  watch: {
    takePic(v) {
      if (!v) return;
      if (!this.id) {
        this.id = v;
        this.init();
      }
      this.id = v;
    }
  }
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

/deep/
  .custom-switch
  .custom-control-input:disabled:checked
  ~ .custom-control-label::before {
  background-color: var(--primary) !important;
}
.dtx-app {
  padding: 0px;
  margin: 0px;
  width: 100vw;
  min-height: 100vh;
  background: #212121;
  color: white;
}
#app {
  font-family: "Microsoft JhengHei", Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  //color: #2c3e50;
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-weight: bold !important;
  font-size: 1rem !important;
  background: #212121;
}
.steps-nav {
  display: grid;
  margin-top: 12px;
  grid-template-columns: max-content max-content max-content max-content max-content;
  justify-content: space-around;
  height: 30px;
}

#video {
  max-width: 300px;
  width: 300px;
  min-width: 300px;
  transform: translateX(-4px);
  border: 1px solid black;
}
.basic-info {
  position: absolute;
  top: 0px;
}
</style>

<style>
textarea {
  resize: none;
}
body,
html {
  font-family: "Microsoft JhengHei", Helvetica, Arial, sans-serif !important;
}
.ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>


