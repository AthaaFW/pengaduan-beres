// components/Sidebar.js
import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <List className='w-[15rem]'>
        <h3 className='pl-[15px] font-semibold' >Post</h3>
        <hr />
        <Link href="/pengaduan" passHref className='no-underline text-black'>
          <ListItem button onClick={onClose} >
            <ListItemText primary="Pengaduan" />
          </ListItem>
        </Link>
        <Link href="/tanggapan" passHref className='no-underline text-black'>
          <ListItem button component="a" onClick={onClose}>
            <ListItemText primary="Tanggapan"/>
          </ListItem>
        </Link>
        <h3 className='pl-[15px]'>User</h3>
        <hr />
        <Link href="/masyarakat" passHref className='no-underline text-black'>
          <ListItem button component="a" onClick={onClose}>
            <ListItemText primary="Masyarakat"/>
          </ListItem>
        </Link>
        <Link href="/petugas" passHref className='no-underline text-black'>
          <ListItem button component="a" onClick={onClose}>
            <ListItemText primary="Petugas"/>
          </ListItem>
        </Link>
      </List>
    </Drawer>
  );
};

export default Sidebar;
