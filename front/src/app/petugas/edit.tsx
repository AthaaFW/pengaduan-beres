'use client'

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Paper,
    Grid,
    TextField,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,} from '@mui/material';
import axios from 'axios';

const Edit = ({id, nama, username, password, telp, toggle, get, level}) => {

    const[ids, setIds] = useState({
        id_petugas: id
    })
    const[formData, setFormData] = useState({
        nama_petugas: nama,
        username: username,
        password: password,
        telp: telp,
        level: level
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
          .patch('http://localhost:5000/petugas/' + ids.id_petugas, formData, { headers: { 'Content-Type': 'application/json' } })
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
          <h1>{id}</h1>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="nama"
                label="Nama"
                variant="outlined"
                fullWidth
                value={formData.nama_petugas}
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
            <h4>Level :</h4>
              <RadioGroup
                aria-label="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Petugas"
                  control={<Radio />}
                  label="Petugas"
                />
                <FormControlLabel
                  value="Admin"
                  control={<Radio />}
                  label="Admin"
                />
                {/* Add more FormControlLabel components for other levels if needed */}
              </RadioGroup>
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