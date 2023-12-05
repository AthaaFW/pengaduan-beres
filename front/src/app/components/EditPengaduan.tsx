'use client'

import { useState } from "react";
import axios from "axios";
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';

const Edit = ({imageSrc, caption, id, get, toggle})=>{
    const [formData, setFormData] = useState({
      isi : caption,
      file : imageSrc
    })
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
      };
      const handleSubmit = async(e) => {
        e.preventDefault();
        const ids = id
        const {isi, file} = formData;
  
        const formSend = new FormData();
        formSend.append('file', file);
        formSend.append('isi', isi);
  
        axios
        .patch('http://localhost:5000/pengaduan/' + ids, formSend,{headers: {
          'Content-Type': 'multipart/form-data',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, PATCH"
        }},
      )
        .then((response) => {
            console.log('Data sent successfully:', response.data);
            get();
          })
        .catch((error) => {
            console.error('Error sending data:', error);
        });
        console.log('Form submitted:', formData);
      };
      const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormData({
          ...formData,
          file: file,
        });
      };
      return(
        <div className="flex flex-col justify-center items-center h-screen w-screen">
             <form
          className="bg-white w-full max-w-md p-6 rounded-md shadow-md flex flex-col items-start"
          onSubmit={handleSubmit}
        >
          <label className=" mb-4">
            <textarea
              name="isi"
              value={formData.isi}
              onChange={handleInputChange}
              className="form-input mt-1 block border-2 p-2 rounded-md resize-none"
              cols={20}
              rows={10}
            />
          </label>
          <label className=" mb-4 relative">
          <div className="flex flex-col bg-blue-500 items-center justify-center w-[300px] h-[150px] rounded-md shadow-md">
              <h4 className="text-white">Insert Image</h4>
              <UploadOutlinedIcon className="text-white"/>
          </div>
            <input
              type="file"
              name="file"
              onChange={handleImageChange}
              className="w-[0.1px] h-[0.1px] absolute"
              accept="image/*"
            />
          </label>
          <div className="flex flex-row justify-between">
          <button onClick={toggle} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
          <button
            onClick={toggle}
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
          </div>
        </form>
          </div>
      )
  }

  export default Edit;