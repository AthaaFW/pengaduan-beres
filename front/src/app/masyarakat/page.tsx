'use client'

import {useState, useEffect} from 'react';
import Link from 'next/link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import axios from 'axios';
import Edit from './edit';
import Sidebar from '../components/sidebar';
import Navbar from '../components/navbar';


export default function Page(){
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
    const [edit, setEdit] = useState(false);
    const [data, setData] = useState([]);
    const masyarakat = data;

    const getData = ()=>{
        axios.get('http://localhost:5000/masyarakat')
        .then(response =>{
            setData(response.data)
        })
        .catch(error =>{
            console.error(error)
        });
    }

    const toggleEdit = ()=>{
        setEdit(!edit)
    }

    useEffect(()=>{
        getData();
    }, []);



    return(
        <>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <div className='mt-[1rem]'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1050 }}>
                    <TableHead style={{ backgroundColor: 'black', color: 'white' }}>
                        <TableRow>
                            <TableCell style={{color: 'white', fontWeight: 'semibold'}} align='left'>NIK</TableCell>
                            <TableCell  style={{color: 'white', fontWeight: 'semibold'}} align='left'>Nama</TableCell>
                            <TableCell  style={{color: 'white', fontWeight: 'semibold'}} align='left'>Username</TableCell>
                            <TableCell  style={{color: 'white', fontWeight: 'semibold'}} align='left'>No Telp</TableCell>
                            <TableCell  style={{color: 'white', fontWeight: 'semibold'}} align='center'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {masyarakat.map(masyarakats =>(
                            <TableRow key={masyarakats.nik} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope='row'>
                                    {masyarakats.nik}
                                </TableCell>
                                <TableCell align='left'>{masyarakats.nama}</TableCell>
                                <TableCell align='left'>{masyarakats.username}</TableCell>
                                <TableCell align='left'>{masyarakats.telp}</TableCell>
                                <TableCell align='center'>
                                    <ButtonGroup variant="text" aria-label="text button group" color='inherit'>
                                     <Button onClick={toggleEdit}>Edit</Button>
                                     <Button onClick={async ()=>{
                                        try {
                                            const nik = masyarakats.nik;
                                            const response = await axios.delete('http://localhost:5000/masyarakat/' + nik);
                                            getData();
                                        } catch (error) {
                                            console.log(error);
                                        }
                                     }}>Delete</Button>
                                    </ButtonGroup>
                                </TableCell>
                                <div className={edit?'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2':'hidden'}>
                                    <Edit nama ={masyarakats.nama} username={masyarakats.username} password={masyarakats.password} telp={masyarakats.telp}
                                    toggle={toggleEdit} get={getData} nik={masyarakats.nik} setData={setData}
                                    />
                                </div>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Link href='/masyarakat/create'>
            <button className='absolute bottom-10 right-10 w-[60px] h-[60px] bg-black rounded text-white text-[40px]'>
                +
            </button>
            </Link>
        </div>
        </>
    )
}