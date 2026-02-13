const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook",(req,res)=>{

  const hari = req.body.queryResult.parameters.hari;

  const jadwal = {
    senin: "Matematika 07.30",
    selasa: "Bahasa Inggris 08.00"
  };

  const hasil = jadwal[hari] || "Tidak ada jadwal";

  res.json({
    fulfillmentText: `Jadwal hari ${hari}: ${hasil}`
  });

});

app.listen(3000,()=>{
 console.log("Server berjalan");
});
