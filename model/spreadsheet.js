const axios = require("axios");

function addDataSpreadsheet(agent,data) {
  const today = new Date();  
  const nama = data.nama;
  const nim = data.nim;
  const nomor_wa = data.nomor_wa;
  const pertanyaan = data.pertanyaan;
  const tanggal = today.toLocaleString('default',{
    day:'numeric',
    month:'short',
    year:"numeric",
    hour:"numeric",
    minute:"numeric",
    second:"numeric",
    timeZoneName:"short",
    timeZone:"Asia/Hong_kong",  
  });
    return axios.post(`https://sheetdb.io/api/v1/bi5oecum369re`, {
      nama: nama,
      nim: nim,
      nomor_wa: nomor_wa,
      pertanyaan: pertanyaan,
      tanggal:tanggal
    });
  


}

module.exports = { addDataSpreadsheet };
