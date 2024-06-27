import React, { useEffect, useState } from 'react'
import './index.scss'
import { IoIosPlay } from "react-icons/io";

import { MdClose } from "react-icons/md";
const Consultation = () => {
     
   
    const [open, setopen] = useState(false)
    function handleOpen() {
        setopen(!open)
    }
  return (
    <>
    <div className="ConsultationAll">
        <div className="Textpart1">
            <div className="TextConsul">

            </div>
            <div className="TextEmailJs">

            </div>
        </div>
        <div className="VideoPart2">
            <div className="playBtn" onClick={handleOpen}>
                            <IoIosPlay />
                        </div>
                         </div>
                        <div className={`videoBox ${open ? "open" : ""}`}>
                        <div className="closeBtn" onClick={handleOpen}>
                        <MdClose />
                        </div>
                        
                        <iframe width="930" height="523" src="https://www.youtube.com/embed/-4zsY28t76k" title="The New S-Class: World Premiere | Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
       
    </div>
    </>
  )
}

export default Consultation