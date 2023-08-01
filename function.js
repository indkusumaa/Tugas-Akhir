// const sql = require("./model/mysql");
const spreadsheet = require("./model/spreadsheet");


function addApi(agent) {
  return spreadsheet
    .addDataSpreadsheet(agent)
    .then((response) => {
      if (response.data.created === 1) {
        console.log(response);
        agent.add("Pertanyaan anda telah kami catat, Mohon kesediannya untuk menunggu, admin akan menghubungi anda untuk menjawab pertanyaan tersebut, terima kasih.");
      } else {
        agent.add("Ada yang salah coba ulangi beberapa menit lagi ");
      }
    })
    .catch(() => agent.add("Error"));
}

module.exports = {  addApi };
