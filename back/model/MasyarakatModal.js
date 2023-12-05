import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Pengaduan from "./PengaduanModal.js";

const { DataTypes } = Sequelize;

const Masyarakat = db.define('masyarakat', {
    nik: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    telp: DataTypes.STRING,
}, {
    freezeTableName: true
});


export default Masyarakat;
