<template>
  <div class="dtc-steps">
    <div class="mb-3">步驟3:基本資料(二)上傳大頭照</div>
    <div v-if="errors" v-html="errors"></div>
    <canvas id="canvas" hidden></canvas>
    <main class="live-dtc">
      <section class="camera" v-show="hasVideo">
        <b-button variant="primary" @click="takepicture" size="sm">擷取LIVE相片</b-button>
        <video id="video">無法找到拍照相機</video>
      </section>
      <section class="output mt-3">
        <img id="photo" :src="fileSource" v-if="fileSource" />
        <b-button
          variant="success"
          size="sm"
          class="ml-2 mt-2"
          @click="getImg"
        >選取電子檔(限200KB以內, JPG格式)</b-button>
      </section>
    </main>

    <input type="file" id="file-dtc-img" @change="previewImsg($event)" hidden accept=".jpg, .jpeg" />
  </div>
</template>
<script>
import queryString from "query-string";
import { store, mutations } from "@/store/global.js";

export default {
  name: "step3",
  data() {
    return {
      video: "",
      canvas: "",
      photo: "",
      streaming: false,
      width: 320,
      height: 320,
      fileSource: "",
      hasVideo: false,
      errors: ""
    };
  },
  components: {},

  methods: {
    previewImsg(evt) {
      const oneK = 1024;
      const curFile = evt.target.files[0];
      this.curFile = "";
      // cannot > 200KB
      if (curFile.size > 1024 * 200) {
        this.errors = `<span style="color:red";>檔案過大:${curFile.name}</span>`;
        setTimeout(() => (this.errors = ""), 7000);
        return;
      }
      this.curFile = curFile;
      const reader = new FileReader();
      reader.onload = e => {
        this.fileSource = e.target.result;
      };
      // 使用 readAsDataURL 將圖片轉成 Base64
      reader.readAsDataURL(curFile);
    },
    getImg() {
      document.querySelector("#file-dtc-img").click();
    },
    // clearphoto() {
    //   var context = this.canvas.getContext("2d");
    //   context.fillStyle = "#AAA";
    //   context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    //   var data = this.canvas.toDataURL("image/png");
    //   this.photo.setAttribute("src", data);
    // },
    takepicture() {
      var context = this.canvas.getContext("2d");
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      context.drawImage(this.video, 0, 0, this.width, this.height);

      var data = canvas.toDataURL("image/png");
      //this.photo.setAttribute("src", data);
      if (this.width && this.height) {
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        context.drawImage(this.video, 0, 0, this.width, this.height);
        var data = canvas.toDataURL("image/png");
        //this.photo.setAttribute("src", data);
        this.fileSource = data;
      } else {
        //this.clearphoto();
      }
    },
    init() {
      this.video = document.getElementById("video");
      this.canvas = document.getElementById("canvas");
      this.photo = document.getElementById("photo");
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then(stream => {
          this.hasVideo = true;
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
        if (!this.streaming) {
          this.height = 320;
          this.video.setAttribute("width", this.width);
          this.video.setAttribute("height", this.height);
          this.canvas.setAttribute("width", this.width);
          this.canvas.setAttribute("height", this.height);
          this.streaming = true;
        }
      });
    }
  },
  mounted() {
    try {
      // check video streaming here
      this.init();
    } catch (e) {}
  }
};
</script>

<style lang="scss" scoped>
.dtc-steps {
  position: relative;
  width: 80vw;
  justify-self: center;
}
#video,
.output {
  width: 320px;
  height: 320px;
  border: 1px solid black;
  border-radius: 10px;
}
#photo {
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.live-dtc {
  display: grid;
  grid-template-columns: max-content;
  place-items: center;
}
.camera {
  position: relative;
  button {
    position: absolute;
    top: 10px;
    left: 10px;
    width: max-content;
    z-index: 999;
  }
}
.output {
  padding: 2px;
}
</style>
