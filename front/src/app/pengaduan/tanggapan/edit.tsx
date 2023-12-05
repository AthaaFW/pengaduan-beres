'use client'

import axios from "axios";
import { useState } from "react";

const Edit = ({isi, id, toggle, get}) => {

    const [formData, setFormData] = useState({
        isi: isi,
        id_petugas: 1,
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const ids = id
        axios
          .patch("http://localhost:5000/tanggapan/" + ids, formData)
          .then((response) => {
            console.log("Data sent successfully:", response.data);
            get();
          })
          .catch((error) => {
            console.error("Error sending data:", error);
          });
      };

    return ( 
        <form
        onSubmit={handleSubmit}
        className=" min-w-[400px] min-h-[100px] bg-white"
      >
        <label className=" mb-4">
          <textarea
            name="isi"
            value={formData.isi}
            onChange={handleChange}
            className="form-input mt-1 block border-2 p-2 rounded-md resize-none"
            cols={50}
            rows={10}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggle}
        >
          Submit
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={toggle}>
          Cancel
        </button>
      </form>
     );
}
 
export default Edit;