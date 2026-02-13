const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req,res)=>{

  const hari = req.body.queryResult.parameters.hari;

  const jadwal = {
    senin: "08.10-09.30 Bahasa Bali , 08.50 PPKN, 09.30 Bahasa Bali",
    selasa: "07.30 Inggris, 08.50 Sejarah",
    rabu: "07.30 Agama Hindu",
    kamis: "07.30 Informatika",
    jumat: "07.30 Olahraga"
  };

  const reply = jadwal[hari] || "Jadwal tidak ditemukan";

  res.json({
    fulfillmentText: `Jadwal hari ${hari}: ${reply}`
  });

});

app.listen(3000,()=>{
 console.log("Server jalan");
});


