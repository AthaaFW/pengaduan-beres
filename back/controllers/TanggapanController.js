import Tanggapan from '../model/TanggapanModal.js';
import Pengaduan from '../model/PengaduanModal.js';
import path from 'path';
import fs from 'fs';
import Petugas from '../model/PetugasModal.js';

export const getTanggapan = async(req, res)=>{
    try {
        const tanggapan = await Tanggapan.findAll({
            include:{
                model: Petugas,
                attributes: ['nama_petugas']
            }
        });
        res.json(tanggapan)
    } catch (error) {
        console.log(error.message)
    }
}

export const getTanggapanById = async(req, res)=>{
    try {
        const response = await Tanggapan.findAll({where:{id_pengaduan: req.params.id_pengaduan},
        include:{
            model: Petugas,
            attributes: ['nama_petugas']
        }
        });
        res.json(response);
    } catch (error) {   
        console.log(error.message);
    }
}

export const postTanggapan = async(req, res)=>{
    const pengaduan = await Pengaduan.findOne({where:{id_pengaduan: req.params.id_pengaduan}})
    if(!pengaduan) return res.status(404).json({msg:"Pengaduan tidak ditemukan"})

    const id_pengaduan = req.params.id_pengaduan;
    const isi = req.body.isi;
    const id_petugas = req.body.id_petugas;
    const status = "Sudah"

    try {
        await Tanggapan.create({id_pengaduan: id_pengaduan, tanggapan: isi, id_petugas: id_petugas})
        await Pengaduan.update({status: status}, {where:{id_pengaduan: id_pengaduan}})
        res.status(201).json({msg:"Tanggapan diberikan"})
    } catch (error) {
        console.log(error.message)
    }
}

export const updateTanggapan = async(req, res)=>{
    const tanggapan = await Tanggapan.findOne({where:{id_tanggapan: req.params.id_tanggapan}})
    if(!tanggapan) return res.status(404).json({msg:"Tanggapan tidak ditemukan"})

    const isi = req.body.isi;
    const id_petugas = req.body.id_petugas

    try {
        await Tanggapan.update({tanggapan: isi, id_petugas: id_petugas},{where:{id_tanggapan: req.params.id_tanggapan}} ) 
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteTanggapan = async(req, res)=>{
    const tanggapan = await Tanggapan.findOne({where:{id_tanggapan: req.params.id_tanggapan}})
    if(!tanggapan) return res.status(404).json({msg: "Tanggapan tidak ditemukan"})
    try {
        await Tanggapan.destroy({where:{id_tanggapan: req.params.id_tanggapan}})
        res.status(201).json({msg: "Tanggapan dibatalkan"})
    } catch (error) {
        console.log(error.message)
    }
}