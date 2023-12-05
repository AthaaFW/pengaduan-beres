import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import Route from "./routes/route.js"
import Masyarakat from "./model/MasyarakatModal.js";
import Pengaduan from "./model/PengaduanModal.js";
import Tanggapan from "./model/TanggapanModal.js";
import Petugas from "./model/PetugasModal.js";
import db from "./config/Database.js";

const app = express();

try {
    await db.authenticate();
    console.log("database connected");
    Pengaduan.sync()
    Petugas.sync()
    Tanggapan.sync()
    Masyarakat.sync()
} catch (error) {
    console.log(error)
}

app.use(cors());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"))
app.use(Route);

app.listen(5000, ()=> console.log('Server Jalan Cuyy'));