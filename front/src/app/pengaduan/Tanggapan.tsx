'use client'

import {useState, useEffect} from 'react';
import axios from "axios";


const Tanggapan = ({id, toggle, tanggapan}) => {
    
    const [data, setData] = useState(tanggapan)

    return ( 
        <div className="flex flex-col">
            {data.map(datas =>(
                <div key={datas.id_tanggapan} className='flex flex-row items-start gap-2 p-4'>
                    <h4 className='font-bold'>{datas.petugas.nama_petugas}</h4>
                    <p>
                        {datas.tanggapan}
                    </p>
                </div>
            ))}
        </div>
     );
}
 
export default Tanggapan;