// const sql = require("./model/mysql");
const spreadsheet = require("./model/spreadsheet");
const Validator = require('fastest-validator');

const v = new Validator();
const schema = {
  nama:{type:"string", min:5, max: 255},
  nim:{type:"number", length:10},
  nomor_wa:{type:"string",min:11,max:12},
  pertanyaan:{type:"string",min:20, max:255}
}


function addApi(agent) {
  const data = {
    nama : agent.parameters.nama,
    nim : agent.parameters.nim,
    nomor_wa : agent.parameters.nomor_wa,
    pertanyaan : agent.parameters.pertanyaan
  }
  const validationResult = v.validate(data,schema);
  if(validationResult !== true){
    //console.log(validationResult);
    validationResult.forEach(data => {
      console.log(data.message)
      agent.add(data.message);
    });
    
   } else {
    return spreadsheet
    .addDataSpreadsheet(agent,data)
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
  
}

module.exports = {  addApi };
