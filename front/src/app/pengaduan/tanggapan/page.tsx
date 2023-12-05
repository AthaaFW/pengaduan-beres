"use client";

import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Edit from "./edit";

const Page = () => {
  const search = useSearchParams();
  const id = search.get("id");

  const [edit, setEdit] = useState(false);
  const toggleEdit = ()=>{
    setEdit(!edit)
    }
  const [formData, setFormData] = useState({
    isi: "",
    id_petugas: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/tanggapan/" + id, formData)
      .then((response) => {
        console.log("Data sent successfully:", response.data);
        getData();
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
  };

  const [data, setData] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:5000/tanggapan/" + id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="flex flex-col gap-2 min-h-screen items-center pt-[2rem]">
        {data.map((datas) => (
          <>
          <div
            key={datas.id_tanggapan}
            className="flex flex-row p-2 bg-white rounded-md items-start gap-5 w-[500px] justify-between"
          >
            <h4>{datas.petuga.nama_petugas}</h4>
            <p className="text-sm">{datas.tanggapan}</p>
            <div className="flex flex-col justify-center">
              <IconButton aria-label="Edit" size="small" onClick={toggleEdit}>
                <EditIcon />
              </IconButton>
              <IconButton
                aria-label="Delete"
                size="small"
                onClick={async () => {
                  try {
                    const ids = datas.id_tanggapan;
                    const response = await axios.delete('http://localhost:5000/tanggapan/' +ids);
                    getData();
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </div>
          <div className={edit?'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2':'hidden'}>
          <Edit isi={datas.tanggapan} id={datas.id_tanggapan} toggle={toggleEdit} get={getData}/>
          </div>
          </>
        ))}
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute min-w-[400px] min-h-[100px] bg-white rounded-md shadow-md bottom-0"
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
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Page;
