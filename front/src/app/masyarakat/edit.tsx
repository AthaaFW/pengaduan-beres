'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { TextField, Button, Container, Paper, Grid } from '@mui/material';
import axios from 'axios';


const Edit = ({ nik, nama, username, password, telp, toggle, setData, get }) => {


  const [niks, setNiks] = useState({
    nik : nik
  });
  const router = useRouter();
  const [formData, setFormData] = useState({
    nama: nama,
    username: username,
    password: password,
    telp: telp,
  });

  useEffect(()=>{
    console.log({nik})
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .patch('http://localhost:5000/masyarakat/' + niks.nik, formData, { headers: { 'Content-Type': 'application/json' } })
      .then((response) => {
        console.log('Data sent successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
    get();
  };



  return (
    <div className='h-screen flex flex-column justify-center items-center'>
      <Paper elevation={3} style={{ padding: '50px', maxWidth: '500px' }}>
        <form onSubmit={handleSubmit}>
          <h1>{nik}</h1>
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
              <div className='flex flex-row justify-between'>
                <Button type="submit" variant="contained" color="primary"
                onClick={toggle}>
                  Submit
                </Button>
                <Button variant="contained" color='error' onClick={toggle}>
                  Cancel
                </Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

export default Edit;