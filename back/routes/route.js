import express from 'express';
import { getPengaduan, postPengaduan,getPengaduanById, updatePengaduan, deletePengaduan, getPengaduanByMasyrakat } from '../controllers/PengaduanControllers.js';
import { getTanggapan, postTanggapan, deleteTanggapan, getTanggapanById, updateTanggapan } from '../controllers/TanggapanController.js'
import { getMasyarakat, getMasyarakatById, deleteMasyarakat, updateMasyarakat, postMasyarakat } from '../controllers/MasyarakatController.js';
import { getPetugas, getPetugasById, deletePetugas, updatePetugas, postPetugas } from '../controllers/PetugasController.js';

const router = express.Router();

router.get('/pengaduan', getPengaduan)
router.get('/pengaduan/:id_pengaduan', getPengaduanById)
router.get('/pengaduanMasyarakat/:nik', getPengaduanByMasyrakat)
router.post('/pengaduan', postPengaduan)
router.patch('/pengaduan/:id_pengaduan', updatePengaduan)
router.delete('/pengaduan/:id_pengaduan', deletePengaduan)

router.get('/tanggapan/', getTanggapan)
router.get('/tanggapan/:id_pengaduan', getTanggapanById)
router.post('/tanggapan/:id_pengaduan', postTanggapan)
router.patch('/tanggapan/:id_tanggapan', updateTanggapan)
router.delete('/tanggapan/:id_tanggapan', deleteTanggapan)

router.get('/masyarakat', getMasyarakat)
router.get('/masyarakat/:nik', getMasyarakatById)
router.post('/masyarakat', postMasyarakat)
router.patch('/masyarakat/:nik', updateMasyarakat)
router.delete('/masyarakat/:nik', deleteMasyarakat)

router.get('/petugas', getPetugas)
router.get('/petugas/:id_petugas', getPetugasById)
router.post('/petugas', postPetugas)
router.patch('/petugas/:id_petugas', updatePetugas)
router.delete('/petugas/:id_petugas', deletePetugas)

export default router