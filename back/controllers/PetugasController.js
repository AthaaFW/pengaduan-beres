import Petugas from "../model/PetugasModal.js";

export const getPetugas = async(req, res)=>{
    try {
        const response = await Petugas.findAll();
        res.json(response)
    } catch (error) {
        console.log(error.message)
    }
}

export const getPetugasById = async(req, res)=>{
    try {
        const response = await Petugas.findOne({where:{id_petugas: req.params.id_petugas}});
        res.json(response)
    } catch (error) {
        console.log(error.message)
    }
}

export const postPetugas = async(req, res)=>{
    const nama_petugas = req.body.nama_petugas
    const username = req.body.username
    const password = req.body.password
    const telp = req.body.telp
    const level = req.body.level

    try {
        await Petugas.create({nama_petugas: nama_petugas, username: username, password: password, telp: telp, level: level})
        res.status(201).json({msg:"Data ditambahkan"})
    } catch (error) {
        console.log(error.message)
    }
}

export const updatePetugas = async(req, res)=>{
    const petugas = await Petugas.findOne({where:{id_petugas: req.params.id_petugas}})
    if(!petugas) return res.status(404).json({msg: "Data tidak ditemukan"})

    const nama_petugas = req.body.nama_petugas
    const username = req.body.username
    const password = req.body.password
    const telp = req.body.telp
    const level = req.body.level

    try {
        await Petugas.update({nama_petugas: nama_petugas, username: username, password: password, telp: telp, level: level},
            {where:{id_petugas: req.params.id_petugas}})
        res.status(201).json({msg:"Data berhasil diedit"})
    } catch (error) {
        console.log(error.message)
    }
}

export const deletePetugas = async(req, res)=>{
    const petugas = await Petugas.findOne({where:{id_petugas: req.params.id_petugas}})
    if(!petugas) return res.status(404).json({msg: "Data tidak ditemukan"})

    try {
        await Petugas.destroy({where:{id_petugas: req.params.id_petugas}})
        res.status(201).json({msg:"Data berhasil dihapus"})
    } catch (error) {
        console.log(error.message)
    }
}
