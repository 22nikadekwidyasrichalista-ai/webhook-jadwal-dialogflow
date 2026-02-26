const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req,res)=>{

  const hari = req.body.queryResult.parameters.hari;

  const jadwal = {
    senin: "08.10-09.30 Bahasa Bali, 09.30-14.20 IPAS, 14.20-15.40 Bahasa Indonesia ",
    selasa: "07.30-09.30 PJOK, 09.30-14.20 DDA, 14.20-15.40 Matematika ",
    rabu: "07.30-08.50 PPKn, 08.50-10.10 Matematika, 10.40-12.00 Seni budaya, 12.00-13.20 Sejarah, 13.40-14.20 BK, 14.20-15.40 Bahasa indonesia ",
    kamis: "07.30-08.50 KKA, 08.50-13.20 DDA, 13.40-15.40 Agama Hindu ",
    jumat: "08.00-10.00 Informatika, 10.40-12.40 Bahasa Ingris ",
  };

  const reply = jadwal[hari] || "Jadwal tidak ditemukan";

  res.json({
    fulfillmentText: `Jadwal hari ${hari}: ${reply}`
  });

});

app.listen(3000,()=>{
 console.log("Server jalan");
});


