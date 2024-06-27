import React from 'react'
import './index.scss'
import { FaSearchengin } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
const Common = () => {
  return (
    <>
<section id='Common'>
<div className="CommonAll">
    <div className="CommonText">
<h1>Most Common Asked Questions</h1>
    </div>
    <div className="CommonText2">
        <p>A masterful combination of style, power, sporty handling and comfort. A masterful combination of style, power, sporty handling and comfort.</p>
    </div>
    <div className="BoxFour">
        <div className="BoxOne">
            <div className="BoxIcon">
            <FaSearchengin />
            </div>
            <div className="BoxText">
<p>Engine</p>
            </div>
        </div>
        <div className="BoxOne">
            <div className="BoxIcon">
            <FaLocationDot />
            </div>
            <div className="BoxText">
<p>Navigation</p>
            </div>
        </div>
        <div className="BoxOne">
            <div className="BoxIcon">
            <IoMdSettings />
            </div>
            <div className="BoxText">
<p>Mechanical</p>
            </div>
        </div>
        <div className="BoxOne">
            <div className="BoxIcon">
            <FaSearchengin />
            </div>
            <div className="BoxText">
<p>Engine</p>
            </div>
        </div>
    </div>
</div>
</section>
    </>
  )
}

export default Common