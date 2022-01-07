import React, { useState, useEffect, useRef } from 'react'
import '../../styles/general.scss'

import createColors from '../../utils/createColors'



function Basic() {

    const canvasRef = useRef()
    // const [colors, setColors] = useState([])
    const [imgdwnldhref, setimgdwnldhref] = useState("")

    var startTime = performance.now()
    const colors = createColors();
    var endTime = performance.now()
    console.log(`Call to createColors took ${endTime - startTime} milliseconds`)

    // const handleSetColors = async () => {
    //     await setColors(createColors())
    // }

    const plotcolors = () => {
        const ctx = canvasRef.current.getContext("2d")
        const imgData = new ImageData(colors, 256, 128)
        ctx.putImageData(imgData, 0, 0)
    }
    
    const downloadCanvasAsImage = (e) => {
        const href = canvasRef.current.toDataURL('image/jpg')
        setimgdwnldhref(href)
        // console.log(canvasRef.current.toDataURL)
    }

    useEffect(() => {
        plotcolors()
    })

    return (
        <div>
            <canvas ref={canvasRef} width="256" height="128" className='my-canvas'></canvas>
            <a href={imgdwnldhref} onClick={downloadCanvasAsImage} download="download" className="dwnld-link">Download as Image</a>
        </div>
    )
}

export default Basic
