<template>
  <div class="read-only-sec">
    <main class="left">
      <h5 class="mb-4 mt-2">
        1.梅毒反應(RPR/VDRL):
        <span :class="TP == 1 ? '':'red'">{{TP == 1 ? '陰性' : '陽性'}}</span>
      </h5>
      <div class="level-2-dtc">
        <h5>2.肝功能檢查:</h5>
        <main>
          <div>
            SGOT:
            <span :class="SGOTJ == 1 ? '':'red'">{{SGOT}}</span>
          </div>
          <div>1U/L(10-39)</div>
        </main>
        <main>
          <div>
            SGPT:
            <span :class="SGPTJ == 1 ? '':'red'">{{SGPT}}</span>
          </div>
          <div>1U/L(07-42)</div>
        </main>
      </div>
      <div class="level-2-dtc mt-4">
        <h5>3.尿液檢查:</h5>
        <main>
          <div>
            尿蛋白:
            <span :class="PROJ == 1 ? '':'red'">{{PRO}}</span>
          </div>
          <div class="pl-2" style="transform:translateX(-8px)">mg/g</div>
        </main>
        <main>
          <div>
            尿糖:
            <span :class="GLUJ == 1 ? '':'red'">{{GLU}}</span>
          </div>
          <div class="pl-2">mg/dL</div>
        </main>
      </div>
    </main>
    <main class="right2">
      <h5 class="mb-4 mt-2">
        4.愛滋病檢查(ELA酵素免疫法):
        <span :class="AIDS == 1 ? '':'red'">{{AIDS == 1 ? '陰性' : '陽性'}}</span>
      </h5>
      <div class="level-2-dtc2">
        <h5>5.血液常規檢查:</h5>
        <main>
          <div>
            白血球(WBC):
            <span :class=" !WBCJ ? '':'red'">{{WBC}}</span>
          </div>
          <div style="padding-left:10px;transform:translateX(-26px)">x 1000/ul</div>
        </main>
        <main>
          <div>
            紅血球(RBC):
            <span :class=" !RBCJ ? '':'red'">{{RBC}}</span>
          </div>
          <div>x 1000000/ul</div>
        </main>
        <main>
          <div>
            血色素(Hb):
            <span :class=" !HbJ ? '':'red'">{{Hb}}</span>
          </div>
          <div>gm%</div>
        </main>
        <main>
          <div>
            血比容(HCT):
            <span :class=" !HCTJ ? '':'red'">{{HCT}}</span>
          </div>
          <div style="padding-left:14px;transform:translateX(-16px)">%</div>
        </main>
        <main>
          <div>
            平均血球容積(MCV):
            <span :class=" !MCVJ ? '':'red'">{{MCV}}</span>
          </div>
          <div style="padding-left:18px;transform:translateX(-18px)">fl</div>
        </main>
      </div>
    </main>
  </div>
</template>
<style lang="scss" scoped>
.main-area {
  width: 100%;
  display: grid;
  background: #ccc;
  height: calc(100vh - 835px);
  grid-template-columns: repeat(3, 1fr);
  textarea {
    height: calc(100vh - 620px);
  }
}
.my-note1,
.my-note2,
.my-note3 {
  height: 30px;
  font-size: 20px;
  background: var(--info);
  color: white;
  border-radius: 5px;
  padding-left: 10px;
}
.my-note2 {
  background: var(--success);
}
.my-note3 {
  background: var(--primary);
}
</style>
<script>
import { store, actions } from "@/store/global.js";

let TP, AIDS, Hb, HCT, HCV, RBC, WBC, SGOT, SGPT, GLU, PRO;
let HbJ, HCTJ, HCVJ, RBCJ, WBCJ, SGOTJ, SGPTJ, GLUJ, PROJ;
export default {
  data() {
    return {
      pass: 1,
      item: {},
      TP,
      AIDS,
      Hb,
      HCT,
      HCV,
      RBC,
      WBC,
      SGOT,
      SGPT,
      GLU,
      PRO,
      HbJ,
      HCTJ,
      HCVJ,
      RBCJ,
      WBCJ,
      SGOTJ,
      SGPTJ,
      GLUJ,
      PROJ
    };
  },
  methods: {},
  mounted() {
    const items = store.savedExam.filter(s => s.Serial == 34 && s.SubSerial);
    if (items && items.length) {
      items.forEach((s, i) => {
        switch (s.SubSerial) {
          case "TP":
            this.TP = s.Judge;
            break;
          case "AIDS":
            this.AIDS = s.Judge;
            break;
          case "Hb":
            this.Hb = s.Value;
            this.HbJ = s.Judge > 1;
            break;
          case "HCT":
            this.HCT = s.Value;
            this.HCTJ = s.Judge > 1;
            break;
          case "HCV":
            this.HCV = s.Value;
            this.HCVJ = s.Judge > 1;
            break;
          case "MCV":
            this.MCV = s.Value;
            this.MCVJ = s.Judge > 1;
            break;
          case "RBC":
            this.RBC = s.Value;
            this.RBCJ = s.Judge > 1;
            break;
          case "WBC":
            this.WBC = s.Value;
            this.WBCJ = s.Judge > 1;
            break;
          case "SGOT":
            this.SGOT = s.Value;
            this.SGOTJ = s.Judge > 1;
            break;
          case "SGPT":
            this.SGPT = s.Value;
            this.SGPTJ = s.Judge > 1;
            break;
          case "GLU":
            this.GLU = s.Value;
            this.GLUJ = s.Judge > 1;
            break;
          case "PRO":
            this.PRO = s.Value;
            this.PROJ = s.Judge > 1;
            break;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.read-only-sec {
  background: #e0e0e0;
  height: calc(100vh - 355px);
  padding: 8px;
  color: black;
  display: grid;
  grid-template-columns: 300px 500px;
  grid-gap: 1rem;
  justify-content: start;
  padding: 1rem;
  .left,
  .right2 {
    display: flex;
    flex-direction: column;
    > div {
      margin-bottom: 8px;
    }
  }
}
.level-2-dtc,
.level-2-dtc2 {
  h5 {
    font-size: 20px;
  }
  main {
    border-radius: 6px;
    display: grid;
    font-size: 16px;
    background: white;
    width: 270px;
    height: 44px;
    color: black;
    line-height: 44px;
    padding: 0 15px;
    grid-template-columns: 1fr max-content;
    > div:first-child {
      text-align: left;
    }
    > div:last-child {
      text-align: right;
      border-left: 1px solid #dddddd;
      padding-left: 8px;
    }

    margin-top: 1rem;
  }
}
.level-2-dtc2 {
  main {
    width: 320px;
    //grid-template-columns: 1fr 110px;
  }
}
.red {
  color: var(--danger);
  font-size: 20px;
}
span {
  text-align: center !important;
  display: inline-block;
}
</style>
