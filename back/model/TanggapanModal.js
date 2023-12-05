import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Pengaduan from "./PengaduanModal.js";
import Petugas from "./PetugasModal.js";

const {DataTypes} = Sequelize;

const Tanggapan = db.define('tangappan',{
    id_tanggapan:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_pengaduan: DataTypes.INTEGER,
    tgl_tanggapan:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    tanggapan: DataTypes.TEXT,
    id_petugas: DataTypes.INTEGER
})

Tanggapan.belongsTo(Petugas,{
    foreignKey: 'id_petugas',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

export default Tanggapan;

// (async()=>{
//     await db.sync({alter: true});
// })();