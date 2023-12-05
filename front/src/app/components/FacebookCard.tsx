'use client'

import { useState } from "react"
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Edit from "./EditPengaduan";


const FacebookCard = ({ imageSrc, userAvatarSrc, userName, caption, id, get,toggle}) => {
  const onDelete = async()=>{
    try {
      const ids = id;
      const response = await axios.delete('http://localhost:5000/pengaduan/' + ids);
      get();
    } catch (error) {
      console.log(error);
    }
  }

  return (
  <>
    <Card className='min-w-[400px] m-4'>
      <CardContent>
        <div className="flex items-center">
          {/* <Avatar src={userAvatarSrc} alt="User Avatar" /> */}
          <Typography variant="subtitle1" sx={{ marginLeft: 1 }} className='font-bold'>
            {userName}
          </Typography>
          <div className="ml-auto">
            <IconButton aria-label="Edit" size="small" onClick={toggle}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="Delete" size="small" onClick={onDelete}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
        <Typography variant="body2" className="mt-2">
          {caption}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt="Post Image"
        height="200"
        width="400"
        image={imageSrc}
      />
    </Card>
    </>
  );
};

export default FacebookCard;
