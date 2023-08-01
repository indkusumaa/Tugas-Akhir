const axios = require("axios");

function addDataSpreadsheet(agent) {
  const nama = agent.parameters.nama;
  const nim = agent.parameters.nim;
  const nomor_wa = agent.parameters.nomor_wa;
  const pertanyaan = agent.parameters.pertanyaan;
  return axios.post(`https://sheetdb.io/api/v1/bi5oecum369re`, {
    nama: nama,
    nim: nim,
    nomor_wa: nomor_wa,
    pertanyaan: pertanyaan,
  });
}

module.exports = { addDataSpreadsheet };
