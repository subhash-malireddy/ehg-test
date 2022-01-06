import React, {useEffect, useRef} from 'react'
// import * as cSketch from 'canvas-sketch'
import '../../styles/general.scss'




function Basic() {

    const canvasRef = useRef()

    const drawCircle = () => {
        const ctx = canvasRef.current.getContext("2d");
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }

    useEffect(() => {
        drawCircle()
        console.log(canvasRef.current)
    }, [])

    return (
        <canvas ref={canvasRef} width="256" height="128" className='my-canvas'>

        </canvas>
    )
}

export default Basic
