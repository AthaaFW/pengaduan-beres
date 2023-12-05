import Image from 'next/image'
import { Button } from "@mui/material";

export default function Home() {
  const buttonStyle ={
    width: '300px',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    color: 'white', 
    }


  return (
    <main className='min-h-screen flex flex-col items-center justify-center gap-5'>
    <div className="flex flex-row gap-5">
    <Button style={buttonStyle} variant="contained" color='primary' href='/pengaduan'>
      Pengaduan
    </Button>
    <Button style={buttonStyle} variant="contained" color='primary' href='/masyarakat'>
      Masyarakat
    </Button>
    </div>
    <div className="flex flex-row gap-5">
    <Button style={buttonStyle} variant="contained" color='primary' href='/petugas'>
      Petugas
    </Button>
    <Button style={buttonStyle} variant="contained" disabled>
      Tanggapan
    </Button>
    </div>
    </main>
  )
}
