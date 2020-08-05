import Vue from 'vue'


const judges = ['未檢', '正常', '不正常', '專檢'];
const init = {
  isLogin: false,
  editItem: '',
  judges,
  accountStatus: [],
  judgeStatus: [],
  examStatus: [],
  accountUpdated: false,
  openCamera: false,
  base64Img: '',
  savedExam: '',
  showPhraseDlg: false,
  tmpTitle: "臨時記載",
  sumTitle: "各項缺點之總評(包括儀表缺失)",
  inspectsArr: '',
  allowPhraseTypes: [],
}

export let store = Vue.observable({
  ...init
});

export let actions = {
  async renewToken(body) {
    //id + token;
    return await axios.post('auth/Validate', body);
  },
  async updatePwd(oldPwd, newPwd) {
    return await axios.put(`auth/ChangePassword?oldPassword=${oldPwd}&newPassword=${newPwd}`);
  },
  async resetPwd(userName) {
    return await axios.put(`auth/ResetPassword?userName=${userName}`);
  },
  async getLoginHotList() {
    return await axios.get('institution/SelectList');
  },
  async getHospitalList() {
    return await axios.get('api/Institution');
  },
  async getAccountList(qs) {
    return await axios.get('api/Account' + qs);
  },
  async getUserAccount(id) {
    return await axios.get('api/Account/' + id);
  },
  async addNewAccount(data) {
    return await axios.post('api/Account', data);
  },
  async editAccount(data) {
    return await axios.put('api/Account', data);
  },
  async getAccountNums() {
    return await axios.get('account/ProcedureSerials');
  },
  async deleteAccount(id) {
    return await axios.delete('api/Account/', id);
  },
  async getFunctions() {
    return await axios.get('api/Function?$inlinecount=allpages');
  },
  async updateFunction(obj) {
    return await axios.put('api/Function', obj);
  },
  async deleteRole(id) {
    return await axios.delete('api/Role/' + id);
  },
  async getRoleList(qs) {
    qs ? '' : qs = "";
    return await axios.get('api/Role' + qs);
  },
  async updateRole(obj) {
    return await axios.put('api/Role', obj);
  },
  async addRole(obj) {
    return await axios.post('api/Role', obj);
  },
  async removeRole(roleNo, functionNo) {
    // roleNo + functionNo
    return await axios.post(`role/RemoveFunction?roleNo=${roleNo}&functionNo=${functionNo}`);
  },
  async getRoleNos(id) {
    return await axios.get('role/FunctionNos?roleNo=' + id);
  },
  async addRoleFunction(qs) {
    return await axios.post('role/AddFunction?' + qs);
  },
  async removeRoleFunction(qs) {
    return await axios.post('role/RemoveFunction?' + qs);
  },
  async getSteps() {
    return await axios.get('api/Procedure');
  },
  async addStep(body) {
    return await axios.post('api/Procedure', body);
  },
  async updateStep(body) {
    return await axios.put('api/Procedure', body);
  },
  async getRoomList(qs) {
    return await axios.get('api/Room' + qs);
  },
  async addRoom(body) {
    return await axios.post('api/Room', body);
  },
  async updateRoom(body) {
    return await axios.put('api/Room', body);
  },
  async deleteRoom(id) {
    return await axios.delete('api/Room/' + id);
  },
  async getRoomNums(id) {
    return await axios.get('room/Procedures?roomId=' + id);
  },
  async addRoomNum(roomId, procedureSerial) {
    //roomId + procedureSerial
    return await axios.post(`room/AddProcedure?roomId=${roomId}&procedureSerial=${procedureSerial}`);
  },
  async removeRoomNum(roomId, procedureSerial) {
    //roomId + procedureSerial
    return await axios.post(`room/RemoveProcedure?roomId=${roomId}&procedureSerial=${procedureSerial}`);
  },
  async getDoctorNumListByRoomId(id) {
    return await axios.get('room/AccountNos?roomId=' + id);
  },
  async addDoctorByRoomId(roomId, accountNo) {
    return await axios.post(`room/AddAccount?roomId=${roomId}&accountNo=${accountNo}`);
  },
  async removeDoctorByRoomId(roomId, accountNo) {
    return await axios.post(`room/RemoveAccount?roomId=${roomId}&accountNo=${accountNo}`);
  },
  async getAccountStatus() {
    return await axios.get('reference/AccountStatus');
  },
  async getJudgeStatus() {
    return await axios.get('reference/ExamJudgeStatus');
  },
  async getExamStatus() {
    return await axios.get('reference/ExamStatus');
  },
  async getInfoById(id) {
    return await axios.get('military/Find?militaryIdNo=' + id);
  },
  async getExamList(id) {
    return await axios.get('military/Examines?militaryId=' + id);
  },
  async updateExamInfo(body) {
    return await axios.post(`military/SetExamine`, body);
  },
  async uploadImg(body, id) {
    return await axios.post(`military/UploadPhoto?militaryIdNo=${id}`, body);
  },
  async getImg(id) {// no params in swagger doc
    return await axios.get(`military/GetPhoto?militaryIdNo=${id}`);
  },
  async uploadBase64Img(body) {
    return await axios.post('military/UploadPhoto64', body);
  },
  async checkInSystem(id) {
    return await axios.post(`military/CheckIn?militaryIdNo=${id}`);
  },
  async getTodayList(qs) {
    return await axios.get('batch/TodayMilitaryList' + qs);
  },
  async getExamResults(id) {
    return await axios.get(`military/Examines?militaryId=` + id);
  },
  async updateRows(body) {//更新役男多筆檢查結果值
    return await axios.post(`military/SetExamines`, body);
  },
  async getPrivatePhrases(qs) {
    return await axios.get(`phrase/MyPhrase` + qs);
  },
  async getPublicPhrases(qs) {
    return await axios.get(`phrase/CommonPhrase` + qs);
  },
  async addPublicPhrase(body) {
    return await axios.post(`phrase/AddCommonPhrase`, body);
  },
  async addPrivatePhrase(body) {
    return await axios.post(`phrase/AddMyPhrase`, body);
  },
  async editPhrase(body) {
    return await axios.put(`api/Phrase/`, body);
  },
  async deletePhrase(id) {
    return await axios.delete(`api/Phrase/` + id);
  },

}
export let mutations = {
  login(map) {
    store.isLogin = true;
    // alert(map.InstitutionId)
    sessionStorage.InstitutionId = map.InstitutionId;
    sessionStorage.FunctionNos = map.FunctionNos.join(",");
    sessionStorage.token = map.Token;
    sessionStorage.name = map.Name;
    sessionStorage.title = map.Title;
    sessionStorage.store = JSON.stringify(map);
    sessionStorage.role = map.RoleNos[0];
    sessionStorage.procedureSerial = map.ProcedureSerials.join(',');
    sessionStorage.allowPhraseTypes = sessionStorage.role.includes("HospitalAdmins")
      ? ["個人片語", "公用片語"].join(",")
      : ["個人片語"].join(",");
    //alert(JSON.stringify(sessionStorage.allowPhraseTypes));
  },
  logout() {
    const obj = Vue.observable({
      ...init
    });
    store = obj;
    store.editItem = "";
    sessionStorage.token = "";
    sessionStorage.editItem = "";
    sessionStorage.InstitutionId = "";
    sessionStorage.role = "";
    sessionStorage.store = sessionStorage.token = "";
    sessionStorage.base64Img = "";

  }
}