'use client'

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TextField, Button, Container, Paper, Grid } from '@mui/material';
import axios from 'axios';


export default function Page() {
  const router = useRouter();   
  const [formData, setFormData] = useState({
    nama: '',
    username: '',
    password: '',
    telp: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/masyarakat', formData)
    .then((response) => {
      console.log('Data sent successfully:', response.data);
      router.push('/masyarakat');  
    })
    .catch((error) => {
      console.error('Error sending data:', error);
    });
  };

  return (
    <div className='h-screen flex flex-column justify-center items-center'>
        <Paper elevation={3} style={{ padding: '50px', maxWidth: '500px'}}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="nama" 
              label="Nama" 
              variant="outlined"
              fullWidth
              value={formData.nama}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="username" 
              label="Username" 
              variant="outlined"
              fullWidth
              value={formData.username}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password" 
              label="Password" 
              variant="outlined"
              type='password'
              fullWidth
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="telp" 
              label="Telepon" 
              variant="outlined"
              fullWidth
              value={formData.telp}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
    </div>
  );
}
