'use client'

import {useState, useEffect} from 'react';
import axios from 'axios';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';
import FacebookCard from '../components/FacebookCard';
import Image from 'next/image';
import Link from 'next/link';
import Edit from '../components/EditPengaduan';
import Tanggapan from './Tanggapan';

export default function Page() {
    const [tanggapans, setTanggapans] = useState(false)
    const onTanggapans = ()=>{
        setTanggapans(!tanggapans)
    }
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    
    const [data, setData] = useState([]);
    const pengaduan = data;
    const [edits,setEdits] = useState(false)
    const onEdits = ()=>{
        setEdits(!edits)
    }
    const getData = ()=>{
        axios.get('http://localhost:5000/pengaduan')
        .then(response =>{
            setData(response.data)
        })
        .catch(error =>{
            console.error(error)
        });
    }
    const [tanggapan, setTanggapan] = useState([]);
    const getTanggapan = (id)=>{
        const ids = id
        axios.get('http://localhost:5000/tanggapan/' + ids)
        .then(response =>{
            setTanggapan(response.data)
        })
        .catch(error =>{
            console.error(error)
        });
    }

    useEffect(()=>{
        getData();
    }, []);


    return(
        <>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <div className="flex flex-col justify-center items-center h-screen">
        {pengaduan.map(pengaduans =>(
            <div className='relative'>
            <FacebookCard
            key={pengaduans.id}
            imageSrc={pengaduans.foto}
            userAvatarSrc="https://placekitten.com/40/40"
            userName={pengaduans.masyarakat.nama}
            caption={pengaduans.isi_laporan}
            id={pengaduans.id_pengaduan}
            get={getData}
            toggle={onEdits}
             />
            <div className={edits?'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2':'hidden'}>
            <Edit imageSrc={pengaduans.foto} id={pengaduans.id_pengaduan} caption={pengaduans.isi_laporan} get={getData} toggle={onEdits}/>                    
            </div>
            <Link href={{
                pathname:'/pengaduan/tanggapan',
                query: {
                    id: pengaduans.id_pengaduan
                }
            }}>
            <button className='bg-black rounded-md p-2 text-white absolute right-[20] bottom-0'>
            (...)
            </button>
            </Link>
             </div>
        ))}
        
    </div>
    <Link href='/pengaduan/create'>
            <button className='absolute bottom-10 right-10 w-[60px] h-[60px] bg-black rounded text-white text-[40px]'>
                +
            </button>
            </Link>
        </>
    )
}
