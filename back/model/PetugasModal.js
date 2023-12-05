import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Tanggapan from "./TanggapanModal.js";

const {DataTypes} = Sequelize;

const Petugas = db.define('petugas',{
    id_petugas: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama_petugas: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    telp: DataTypes.STRING,
    level: DataTypes.STRING
})

export default Petugas;

// (async()=>{
//     await db.sync({alter: true});
// })();