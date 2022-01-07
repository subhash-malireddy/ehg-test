import React, { useRef, useState, useEffect } from 'react'

import createColors from '../../utils/createColors'

import '../../styles/general.scss'

const colors = createColors()
function Creative() {

    const canvasRef = useRef()

    let particlesArray = useRef([])

    const [[canvasWidth, canvasHeight], setCanvasDimensions] = useState([window.innerWidth*0.8, window.innerHeight])
    const [{cursorX, cursorY}, setCursorCoords] = useState({cursorX: window.innerWidth *0.8*0.5, cursorY: window.innerHeight*0.5})

    const setCanvDims = () => {
        setCanvasDimensions([window.innerWidth*0.8, window.innerHeight])
    }

    const setCrsrCoords = (e) => {
        setCursorCoords({
            cursorX: e.clientX,
            cursorY: e.clientY
        })
    }

    const animate = ()=>{
        requestAnimationFrame(animate);
      
        particlesArray.current.forEach((particle) => particle.rotate());
      }

    useEffect(() => {
        const canvasContext = canvasRef.current.getContext("2d");
        window.addEventListener('resize', setCanvDims)
        // window.addEventListener('mousemove', setCrsrCoords)

        particlesArray.current = generateParticles(colors, canvasHeight, canvasWidth, canvasContext, cursorX, cursorY)

        animate(canvasContext);

        return () => {
            window.removeEventListener('resize', setCanvDims)
            // window.removeEventListener('mousemove', setCrsrCoords)
        }
    }, [])



    return (
        <div style={{minHeight: "300px", minWidth: "300px"}}>
            <canvas ref={canvasRef}  width={canvasWidth} height={canvasHeight} className="canvas-wrapper"></canvas>
        </div>
    )
}


function generateParticles(colors, canvasHeight, canvasWidth, canvasContext, cursorX, cursorY) {
    let particlesArray = []
    const colorsLength = colors.length
    for (let i = 0; i < colorsLength; i+=4) {
      particlesArray[i] = new Particle(
        canvasWidth / 2,
        canvasHeight / 2,
        1,
        `rgba(${colors[i]}, ${colors[i+1]}, ${colors[i+2]}, ${colors[i+4]})`,
        0.001,
        canvasContext,
        cursorX,
        cursorY
      );
    }
    return particlesArray
  }

  function Particle(x, y, particleTrailWidth, strokeColor, rotateSpeed, canvasContext, cursorX, cursorY) {
    this.x = x;
    this.y = y;
    this.particleTrailWidth = particleTrailWidth;
    this.strokeColor = strokeColor;
    this.theta = Math.random() * Math.PI * 2;
    this.rotateSpeed = rotateSpeed;
    this.t = Math.random() * 150;
  
    this.rotate = () => {
      const ls = {
        x: this.x,
        y: this.y,
      };
      this.theta += this.rotateSpeed;
      this.x = cursorX + Math.cos(this.theta) * this.t;
      this.y = cursorY + Math.sin(this.theta) * this.t;
      canvasContext.beginPath();
      canvasContext.lineWidth = this.particleTrailWidth;
      canvasContext.strokeStyle = this.strokeColor;
      canvasContext.moveTo(ls.x, ls.y);
      canvasContext.lineTo(this.x, this.y);
      canvasContext.stroke();
    };
  }

  

export default Creative
